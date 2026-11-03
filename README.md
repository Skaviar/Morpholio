# Morpholio

Swanand Kavitkar’s portfolio, built with React, Vite, and Tailwind CSS.

## Develop

```sh
npm ci
npm start
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

```sh
npm run build
npm run preview
```

The production build goes into `dist/`. `npm run deploy` explicitly publishes it to GitHub Pages; ordinary development and builds do not publish.

## Content and navigation

- `src/data/featured-projects.json`: curated projects, descriptions, technologies, and destination links. Sudotrail and Kafka Solo lead the collection.
- `src/data/resume.json`: work history and education.
- `src/data/blogs.json`: article titles, previews, images, and links.
- `src/data/hobbies.json`: the About page’s Outside work cards. Each card has a local image, description, and image alt text.
- `src/data/certifications.json`: dated credentials and recognition.
- `src/App.jsx`: Work, About, and Blogs pages, with a short introduction, illustrated project panels, full work contributions, and article thumbnails.
- `src/Header.jsx` and `src/Footer.jsx`: navigation, social links, resume, and contact details.
- `src/index.css`: responsive layouts, colors, type, menu transitions, and reduced-motion styles.
- `src/components/Motion.jsx`: progressive scroll reveals, including projects opened through More projects.
- `public/`: served images, favicon, and resume PDF.

Hash routing supports GitHub Pages without server rewrites. Previous `/projects`, `/resume`, `/skills`, `/hobbies`, `/certifications`, and `/writing` hash routes still resolve. The retired components and original data files remain available for reference; the redesigned application uses the files listed above.

Project descriptions were checked against the public repositories at `github.com/Skaviar/SudoTrail` and `github.com/Skaviar/kafka-solo`.

Project cards include local images. Sudotrail uses its repository’s preview artwork; the face recognition and blockchain illustrations are original SVG assets.

Mobile navigation uses an animated hamburger, closes on link selection or outside click, supports Escape and keyboard focus containment, and releases the scroll lock when closed or resized. The mobile hero stacks consistently, cards use a single column, and project image proportions remain intact. Animations respect reduced-motion preferences.
