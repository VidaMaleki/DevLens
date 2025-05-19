# DevLens

![DevLens Logo](https://raw.githubusercontent.com/VidaMaleki/DevLens/main/assets/DevLens.png)

[![DevLens in Marketplace](https://img.shields.io/visual-studio-marketplace/v/vida-dev.devlens.svg?label=DevLens&color=blue)](https://marketplace.visualstudio.com/items?itemName=vida-dev.devlens)

**DevLens** is an AI-powered assistant for developers working in VS Code.  
It helps you understand unfamiliar codebases faster by summarizing files directly in your editor — powered by OpenAI's GPT-4o.

🧠 Whether you're onboarding to a new repo or reviewing old code, DevLens gives you a head start.

---

## First-Time Setup

If it's your first time using DevLens, you'll be prompted to enter your OpenAI API key when you run any command like **Ask DevLens**.

You can also set it up manually:

- Open the Command Palette (`Cmd/Ctrl + Shift + P`)
- Run: `DevLens: Set or Update API Key`
- Paste your [OpenAI API Key](https://platform.openai.com/account/api-keys)

✅ Your key is securely stored using VS Code's SecretStorage — it is never exposed.

---

## 💡 How to Use DevLens

Once your API key is set, you're ready to go!

### To summarize a file:

1. Open any `.ts`, `.js`, `.jsx`, or `.tsx` file in VS Code  
2. Press `Cmd/Ctrl + Shift + P` to open the Command Palette  
3. Type `Ask DevLens` and select the command  
4. Wait a few seconds while DevLens analyzes the file  
5. You'll see a popup: **"Summary ready! Click to view full summary."**  
6. Click **"View Summary"** — a markdown file will open with the result ✨

---

## ✨ Features

-  **Ask DevLens**: Summarize any `.ts`, `.tsx`, `.js`, or `.jsx` file
-  **Secure API Key Storage**: Uses VS Code’s SecretStorage
-  **Runs locally** in your VS Code environment
-  **Coming Soon**: Codebase-wide Q&A — “Where is login handled?”

---

## Screenshots

![First](https://raw.githubusercontent.com/VidaMaleki/DevLens/main/assets/view.png)  
![Second](https://raw.githubusercontent.com/VidaMaleki/DevLens/main/assets/ask_devlens.png)  
![Third](https://raw.githubusercontent.com/VidaMaleki/DevLens/main/assets/summary.png)

---

## Author

**Vida Ghorbannezhad Maleki**  
- [Portfolio](https://vida-maleki-portfolio.vercel.app)  
- [GitHub](https://github.com/VidaMaleki)  
- [LinkedIn](https://www.linkedin.com/in/vida-ghorbannezhad-maleki-4082a4197)

---

## 📄 License

[MIT License](./LICENSE)
