# Purple Portfolio Website

A responsive HTML, CSS, and JavaScript portfolio inspired by the style shown in the supplied video.

## Run the website

Open `index.html` in a browser. For the best local development experience, use VS Code with the Live Server extension.

## Main files

- `index.html` — all page content and sections
- `styles.css` — colors, layout, animations, and responsive design
- `script.js` — typing effect, mobile menu, filtering, popups, and form demos
- `assets/` — placeholder images and sample CV file

## Edit your details

Search for `EDIT:` inside `index.html`.

Common changes:

1. Change `YourName#` and `Your Full Name`.
2. Replace `assets/profile.svg` with your own photo and keep the same filename, or update the image path.
3. Edit the `roles` array in `script.js`.
4. Replace About, Experience, Education, Projects, and Certificates content.
5. Update email, phone, location, social media, and WhatsApp links.
6. Replace `assets/cv.pdf` with your actual CV.
7. Update project and certificate popup details in `script.js`.

## Change theme colors

Edit the variables at the top of `styles.css`:

```css
:root {
  --bg: #070613;
  --primary: #8b5cf6;
  --accent: #18d4bd;
}
```

## Connect the contact form

The included contact form is a front-end demo. Connect it to one of these:

- Formspree
- EmailJS
- Web3Forms
- Your own PHP, Laravel, Node.js, or other backend

## Notes

Google Fonts are loaded through a CDN. The website still works without the fonts, but the appearance may differ slightly.
