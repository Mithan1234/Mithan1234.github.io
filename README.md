# Mithan Sakider — Engineering Portfolio

A responsive static portfolio built with HTML, CSS, and vanilla JavaScript. It is suitable for free hosting with GitHub Pages.

## Files

- `index.html` — page content and section structure
- `styles.css` — theme, responsive layout, and visual design
- `script.js` — mobile navigation and automatic footer year
- `assets/profile-placeholder.svg` — replace with your own photo
- `assets/cv-placeholder.txt` — instructions for adding your CV PDF
- `assets/favicon.svg` — site icon

## Customize before publishing

Search `index.html` for these placeholders and replace them with your real information:

- `your.email@example.com`
- `your-linkedin`
- `yourusername`
- project repository links
- education dates/status and any personal description you want to make more specific

The project cards are examples / topics, not claims of completed work or results. Update them to reflect your actual work and link to real reports or repositories.

### Add your profile photo

1. Add your photo to the `assets` directory, for example `profile.jpg`.
2. In `index.html`, find `assets/profile-placeholder.svg`.
3. Change the image path to `assets/profile.jpg`.
4. Use a professional photo you have permission to publish.

### Add your CV

1. Export your current CV as a PDF.
2. Name it `cv.pdf`.
3. Put it in the `assets` directory.
4. The existing CV buttons link to `assets/cv.pdf`.

Do not publish personal information in your CV that you do not want public.

## Test locally

Open `index.html` directly in your browser. For a more production-like local preview, run a simple static server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish using GitHub Pages

1. Sign in or create an account at https://github.com/.
2. Create a new **public** repository named `yourusername.github.io` to use a user site URL, replacing `yourusername` with your GitHub username.
3. Upload all files and folders from this project. Ensure `index.html` is in the repository root.
4. Open repository **Settings → Pages**.
5. Under the build/deployment source, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for deployment to finish. Open `https://yourusername.github.io/`.
8. If you use a repository with a different name, the project site URL will normally be `https://yourusername.github.io/repository-name/`.

GitHub Pages may take a few minutes to publish changes. If the page does not appear, check the Actions tab and the Pages settings.

## Notes

- This is a front-end static website; it does not need PHP, MySQL, or XAMPP.
- Google Fonts are loaded from an external service. The page uses fallback system fonts if unavailable.
- The site is not connected to a contact form backend. The email link opens the visitor's email app.
