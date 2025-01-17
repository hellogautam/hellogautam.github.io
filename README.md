# Portfolio Site

A minimalist, retro-styled portfolio website built with Vue 3 + TypeScript.

## Tech Stack
- Vue 3 with TypeScript
- Vue Router for navigation
- TailwindCSS for styling
- Markdown support for blog posts
- Dark/Light mode toggle

## Project Structure
```
project-root/
├── src/
│   ├── components/
│   │   ├── BlogCard.vue
│   │   ├── LoadingSpinner.vue
│   │   ├── MetaTags.vue
│   │   ├── NavBar.vue
│   │   ├── ProjectCard.vue
│   │   ├── Project.vue
│   │   └── Layout.vue
│   ├── content/
│   │   ├── blog/
│   │   │   └── first-post.md
│   │   ├── projects/
│   │   │   └── example-project.md
│   │   └── reading/
│   │       └── index.json
│   ├── pages/
│   │   ├── Blog.vue
│   │   ├── BlogPost.vue
│   │   ├── Contact.vue
│   │   ├── Home.vue
│   │   ├── NotFound.vue
│   │   ├── Projects.vue
│   │   └── Reading.vue
│   ├── router/
│   │   └── index.ts
│   ├── styles/
│   │   └── style.css
│   ├── types/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Setup & Development

1. Install dependencies:

2. Start development server:

## Adding Content

### Projects
Add new projects in `content/projects/` as markdown files:

### Reading/Watch List
Update `content/reading/index.json` to add new items:

### Blog Posts
Add new blog posts in `content/blog/` as markdown files:

## Features
- Responsive design
- Dark/Light mode toggle
- Markdown support for blog posts
- Project showcase with filtering
- Reading list with content type filtering
- Contact information with social links

## Customization
1. Update `src/pages/Home.vue` with your personal information
2. Modify social links in `src/pages/Contact.vue`
3. Customize theme colors in `tailwind.config.js`
4. Add your projects and blog posts in the `content/` directory

## Deployment
This site is configured for GitHub Pages deployment. To deploy:

1. Update `vite.config.ts` with your repository name
2. Run: `npm run build`
3. Push to GitHub
4. Enable GitHub Pages in repository settings

## Development Notes
- Use TypeScript interfaces defined in `src/types/index.ts`
- Follow the markdown format for content files
- Keep the retro-minimalist theme in mind when adding new features
