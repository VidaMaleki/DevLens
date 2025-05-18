import * as vscode from "vscode";
import * as fs from "fs";
import OpenAI from "openai";

export function registerAskFileSummary(
  openai: OpenAI,
  context: vscode.ExtensionContext
) {
  const disposable = vscode.commands.registerCommand(
    "devlens.askQuestion",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No file open to analyze.");
        return;
      }

      const filePath = editor.document.uri.fsPath;
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const lineCount = fileContent.split("\n").length;
      const isShortFile = lineCount < 100;
      const prompt = isShortFile
        ? "You are a concise developer assistant. Summarize this code file in under 150 words. Mention imported components **only if** they are critical to understanding the file’s behavior."
        : "You are a helpful developer assistant. Give a detailed breakdown of what this file does, including any imported components **only if they significantly affect logic or rendering.** Format your response in markdown with headings and bullet points.";

      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            { role: "system", content: prompt },
            {
              role: "user",
              content: `What does this file do?\n\n${fileContent}`,
            },
          ],
          temperature: 0.2,
          max_tokens: 1500,
        });

        const summary =
          response.choices[0]?.message?.content || "No summary returned.";
        vscode.window
          .showInformationMessage(
            "Summary ready! Click to view full summary.",
            "View Summary"
          )
          .then((selection) => {
            if (selection === "View Summary") {
              vscode.workspace
                .openTextDocument({ content: summary, language: "markdown" })
                .then((doc) => vscode.window.showTextDocument(doc));
            }
          });
      } catch (error: any) {
        vscode.window.showErrorMessage(`OpenAI error: ${error.message}`);
      }
    }
  );

  context.subscriptions.push(disposable);
}
