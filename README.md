# Purple Portfolio Website

A responsive HTML, CSS, and JavaScript portfolio inspired by the style shown in the supplied video.

## Run the website

Open `index.html` in a browser. For the best local development experience, use VS Code with the Live Server extension.

## Main files

- `index.html` — all page content and sections
- `styles.css` — colors, layout, animations, and responsive design
- `script.js` — typing effect, mobile menu, filtering, project dialogs, and contact form
- `assets/` — portfolio images and downloadable CV

## Edit your details

Search for `EDIT:` inside `index.html`.

Common changes:

1. Replace `assets/profile.png` to update the profile photo.
2. Edit the `roles` array in `script.js`.
3. Update About, Experience, Education, and Projects content in `index.html`.
4. Update project dialog details and add live/source links in `script.js`.
5. Replace `assets/cv.pdf` when a newer CV is available.

## Change theme colors

Edit the variables at the top of `styles.css`:

```css
:root {
  --bg: #070613;
  --primary: #8b5cf6;
  --accent: #18d4bd;
}
```

## Contact form

The contact form works without a backend by opening the visitor's email application with a pre-filled message addressed to the portfolio owner.

## Notes

Google Fonts are loaded through a CDN. The website still works without the fonts, but the appearance may differ slightly.
