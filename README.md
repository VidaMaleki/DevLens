# DevLens

**DevLens** is an AI-powered VS Code extension that helps you understand unfamiliar codebases faster. Powered by OpenAI's GPT-4o, DevLens can summarize files and soon will help you find where specific functionality is implemented.

![DevLens Logo](https://github.com/VidaMaleki/DevLense/blob/main/assets/DevLens.png)

---

## ✨ Features

- 🧠 **Ask DevLens**: Summarize the purpose and structure of any open file
- 🔐 **Secure API Key Storage**: Uses VS Code SecretStorage — never exposes your OpenAI key
- ⚡ Works locally inside VS Code with minimal setup
- 🔜 **Coming Soon**: Ask DevLens about the entire codebase (e.g. “Where is login handled?”)

---

## 📦 Installation

Once published on the Marketplace, you’ll be able to install directly from the VS Code Extensions panel.

Until then, you can install manually:

1. Clone this repo
2. Run `npm install`
3. Run `npm run compile`
4. Press `F5` to open a new Extension Development Host window
5. Open a code file and run `Ask DevLens` from the Command Palette (`Cmd/Ctrl + Shift + P`)

---

## 🔐 Setup: API Key

1. Open the Command Palette (`Cmd/Ctrl + Shift + P`)
2. Run: `DevLens: Set or Update API Key`
3. Paste your [OpenAI API Key](https://platform.openai.com/account/api-keys)
4. DevLens will store it securely in your VS Code environment

---

## 💡 Usage

- Open any `.ts`, `.js`, `.jsx`, `.tsx` file
- Open the Command Palette → `Ask DevLens`
- DevLens will summarize the file in a readable markdown format

---

## 🧪 Development

Clone this repo and run:

```bash
npm install
npm run watch
```
Then press F5 to launch the extension in a new window.

## 🚀 Roadmap

- [x] **File summarization**
- [ ] **Codebase Q&A**: Ask about functionality across files
- [ ] **Smart file selection and file limiting**
- [ ] **Support for Python, Go, and Java**
- [ ] **VS Code Settings UI for customizing DevLens behavior**

---

## 🙋‍♀️ Author

**Vida Maleki**  
🌐 [vidamaleki.com](https://vidamaleki.com) *(coming soon)*  
💼 [LinkedIn]([https://www.linkedin.com/in/vida-maleki](https://www.linkedin.com/in/vida-ghorbannezhad-maleki-4082a4197/))  
💻 [Portfolio](https://vida-maleki-portfolio.vercel.app/)  
🐙 [GitHub](https://github.com/VidaMaleki)

---

## 📄 License

[MIT License](./LICENSE)

