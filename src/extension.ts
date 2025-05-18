import * as vscode from "vscode";
import OpenAI from "openai";
import { registerAskFileSummary } from "./commands/askFileSummary";

export async function activate(context: vscode.ExtensionContext) {
  let apiKey = await context.secrets.get("devlens.openaiApiKey");

  if (!apiKey) {
    apiKey = await vscode.window.showInputBox({
      prompt:
        "Enter your OpenAI API Key (get one at platform.openai.com/account/api-keys)",
      password: true,
      ignoreFocusOut: true,
    });

    if (!apiKey) {
      vscode.window.showErrorMessage("DevLens requires an OpenAI API key.");
      return;
    }

    await context.secrets.store("devlens.openaiApiKey", apiKey);
    vscode.window.showInformationMessage("✅ OpenAI API key stored.");
  }

  // Update API key command
  context.subscriptions.push(
    vscode.commands.registerCommand("devlens.setApiKey", async () => {
      const newKey = await vscode.window.showInputBox({
        prompt: "Enter your OpenAI API Key (get one at platform.openai.com/account/api-keys)",
        password: true,
        ignoreFocusOut: true,
      });

      if (!newKey) {
        vscode.window.showErrorMessage("API key update canceled.");
        return;
      }

      await context.secrets.store("devlens.openaiApiKey", newKey);
      vscode.window.showInformationMessage("✅ OpenAI API key updated.");
    })
  );

  const openai = new OpenAI({ apiKey });

  // Register features
  registerAskFileSummary(openai, context);
}

export function deactivate() {}
