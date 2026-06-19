# Personal Portfolio

A personal portfolio website for Talha Saleem, Full Stack Software Engineer. Built with React, Tailwind CSS, and a dark theme with a periwinkle accent.

## Features

- Hero intro with professional summary
- Skills section grouped by Languages, Frameworks & Libraries, and Development Tools
- Project cards with tech tags and links to live demos / source
- Responsive layout with subtle hover and load animations

## Tech Stack

React, Tailwind CSS, Create React App.

## Getting Started

```bash
npm install
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm start` — run the dev server
- `npm run build` — production build to `build/`
- `npm test` — run tests

## Project Structure

```
src/
  App.js                 # Page layout
  index.css              # Theme variables and global styles
  components/
    Navbar.js            # Top nav with Resume / Email / Github links
    Welcome.js           # Hero / intro section
    Skills.js            # Grouped skill chips
    Projects.js          # Projects list
    Project.js           # Single project card
    Footer.js            # Footer
    MagicVariables.js    # Project content (titles, blurbs, links)
```

To add or edit projects, update the exports in `src/components/MagicVariables.js`.
