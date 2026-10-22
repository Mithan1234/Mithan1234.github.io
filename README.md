# Personal Portfolio Website

A clean, responsive, and easy-to-customize portfolio website ready to publish directly on **GitHub Pages**.

---

## 🧭 Page Structure & Ordered Sections

1. **Navbar** (Professional gradient, sticky navigation)
2. **Hero Section** (Professional gradient, greeting, circular photo frame with experience badge)
3. **About Section** (Summary, career highlights, and statistical grid)
4. **Education Section** (Degrees, institutions, honors, and core coursework)
5. **Skills Section** (Categorized into Frontend, Backend, Databases/Cloud, Tools/Research)
6. **Research & Publications Section** (Academic papers, conference venues, abstracts, keyword tags, paper links)
7. **Projects Section** (Featured cards with banners, descriptions, key features, tech stacks, and live/source links)
8. **Experience Section** (Job roles, dates, company, responsibilities, and tech tags)
9. **Contact Section** (Direct messaging connected to Telegram bot)
10. **Footer** (Quick links and copyright note)

---

## 📱 How to Receive Contact Messages on Telegram (1 Minute Setup)

Your website is pre-wired to send incoming contact form submissions straight to your Telegram via [contact.js](file:///C:/Users/Mithun/.gemini/antigravity/scratch/portfolio-website/contact.js).

### Step 1: Create your free Telegram Bot
1. Open Telegram on your phone or PC.
2. Search for **`@BotFather`** and click Start.
3. Send `/newbot`, then enter a name and a username for your bot (e.g. `MyPortfolioContactBot`).
4. BotFather will reply with your **Bot Token** (looks like: `7123456789:AAHqXXXXXXXXXXXXXXXXXXXXX`).

### Step 2: Get your Chat ID
1. Search for **`@userinfobot`** on Telegram and click Start.
2. It will reply with your personal **Id** (a number like `123456789`).
3. **Important**: Open your new bot (from Step 1) in Telegram and click **Start** (or send any message like "hello") so it has permission to message you.

### Step 3: Paste both values in `contact.js`
Open [contact.js](file:///C:/Users/Mithun/.gemini/antigravity/scratch/portfolio-website/contact.js) and replace the top lines:
```javascript
const TELEGRAM_CONFIG = {
  botToken: "PASTE_YOUR_BOT_TOKEN_HERE",
  chatId: "PASTE_YOUR_CHAT_ID_HERE"
};
```
That's it! When anyone submits the contact form, you will instantly get a notification and message on Telegram.

---

## 🎨 Easy Customization Guide

- **Profile Picture**: Place your photo (e.g. `my-photo.jpg`) in this folder and change `profile.svg` to `my-photo.jpg` on line 87 in [index.html](file:///C:/Users/Mithun/.gemini/antigravity/scratch/portfolio-website/index.html).
- **Personal Details**: Open [index.html](file:///C:/Users/Mithun/.gemini/antigravity/scratch/portfolio-website/index.html) to edit text, dates, roles, and project links.
- **Styling & Colors**: Every class in [style.css](file:///C:/Users/Mithun/.gemini/antigravity/scratch/portfolio-website/style.css) has its own independent block with **direct values** (no CSS variables, no grouped selectors).

---

## 🚀 Publish on GitHub Pages

1. Create a public repository on [GitHub](https://github.com) named `your-username.github.io` (or `portfolio`).
2. Push all files in this directory to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Add Telegram contact integration"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** > **Pages** > select **Deploy from a branch** (`main` / `/ root`) and click **Save**.
