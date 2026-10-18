# 🎓 Mithun — Electrical & Electronic Engineering Portfolio

A sleek, fast, and responsive portfolio website designed for **Mithun**, an Electrical and Electronic Engineering (EEE) Graduate from **Rajshahi University of Engineering & Technology (RUET)**.

Built with a **cool light color palette** (clean slate whites, cool ice blues, subtle teals, and high-contrast typography) to create a sophisticated, academic, and executive engineering aesthetic.

---

## 🌟 Key Features

- **Cool Light Aesthetic:** Zero gaudy/flashy colors. Clean, calm slate tones with crisp contrast.
- **EE Domain Specialization:** Sections tailored for Electrical & Electronic Engineering:
  - Microcontrollers & Embedded Systems (ESP32, STM32, Arduino)
  - Power Systems, Renewable Energy (Solar MPPT), and APFC
  - Circuit Design, Proteus, KiCAD, and MATLAB/Simulink
  - RUET Academic credentials and Industrial Training details
- **Interactive Project Filtering:** Easily switch between All, Embedded/IoT, Power Systems, and Hardware.
- **Zero Build Dependencies:** Pure HTML5, CSS3, and modern vanilla JavaScript. Instant deployment on GitHub Pages without Node.js or build pipelines!
- **Mobile Responsive:** Looks pristine on smartphones, tablets, laptops, and 4K displays.
- **Interactive Contact:** One-click email copy button and mail client integration.

---

## 📁 File Structure

```text
portfolio/
├── index.html        # Complete semantic webpage structure & content
├── style.css         # Cool light theme styles & responsive design
├── script.js         # Interactivity (filtering, scrollspy, copy email)
└── README.md         # Deployment & customization guide
```

---

## 🛠️ Step 1: Quick Personalization Checklist

Open `index.html` in VS Code or any text editor and make these quick updates:

1. **Email Address**: Search for `your.email@example.com` and replace with your real email.
2. **Social Links**:
   - Replace `https://github.com/your-username` with your GitHub profile URL.
   - Replace `https://linkedin.com/in/your-profile` with your LinkedIn profile URL.
3. **Resume / CV**: Put your PDF resume file in the same folder and name it `resume.pdf`.
4. **Project Links**: Update the project repository links and descriptions to match your exact undergraduate thesis or semester projects.

---

## 🚀 Step 2: How to Publish on GitHub Pages (Easy Guide)

You have two easy ways to publish this to GitHub:

### Option A: The Simplest Method (Using GitHub Website / Web Browser)

1. **Log in to GitHub**: Go to [github.com](https://github.com) and sign in.
2. **Create a New Repository**:
   - Click the **`+`** icon in the top right corner &rarr; select **New repository**.
   - **Repository name**:
     - *Choice 1 (Primary domain)*: Name it `yourusername.github.io` (replace `yourusername` with your exact GitHub handle).
     - *Choice 2 (Sub-folder)*: Name it `portfolio` or `eee-portfolio`.
   - Set visibility to **Public**.
   - Leave "Initialize with README" **unchecked**.
   - Click **Create repository**.
3. **Upload Your Files**:
   - On the next screen, click the link that says **"uploading an existing file"**.
   - Drag and drop `index.html`, `style.css`, and `script.js` (and `resume.pdf` if you have it).
   - Click the green **Commit changes** button.
4. **Enable GitHub Pages**:
   - Go to your repository's **Settings** tab (gear icon at the top).
   - In the left sidebar, click on **Pages**.
   - Under **Build and deployment &rarr; Branch**:
     - Change the branch from `None` to `main` (or `master`).
     - Leave the folder set to `/ (root)`.
     - Click **Save**.
5. **Done!**: Wait 1 to 2 minutes. GitHub will display a notification:
   > *"Your site is live at `https://yourusername.github.io/`"*

---

### Option B: Using Git Terminal (PowerShell / Command Prompt)

If you have Git installed on your computer, open your terminal inside the `portfolio` folder:

```bash
# 1. Initialize git repository
git init

# 2. Add all portfolio files
git add .

# 3. Create initial commit
git commit -m "Initial release of RUET EEE portfolio"

# 4. Set branch to main
git branch -M main

# 5. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/portfolio.git

# 6. Push files to GitHub
git push -u origin main
```

Then go to **Settings &rarr; Pages &rarr; Source: main branch (/root) &rarr; Save**.

---

## 💡 Pro Tips for RUET EEE Graduates

- **Include your Thesis/Capstone Title**: Highlight your final year design project right at the top of the Projects section.
- **Add Lab Pictures / Schematics**: You can add real photos of your breadboard circuits, PCBs, or 3D renders into an `images/` folder and link them in `index.html`.
- **Custom Domain**: Later, you can easily connect a custom domain (like `mithun-eee.com` or `mithun.dev`) under GitHub Pages settings with free HTTPS!
