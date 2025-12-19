# Placehold

A simple, fast, and reliable placeholder image and text generator documentation website and API.

## Features

- **Dynamic Image Generation**: Create placeholder images with custom width, height, background, and foreground colors.
- **Text Generation**: Generate Lorem Ipsum text in various formats (words, sentences, paragraphs) and output types (plain text, HTML).
- **Documentation**: Comprehensive documentation website built with Next.js and shadcn/ui.
- **Modern UI**: Clean and responsive design inspired by Syntax.
- **Edge Ready**: API routes designed to run on the Edge.

## Tech Stack

- [Next.js 16](https://nextjs.org/) - App Router & Server Components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Lucide React](https://lucide.dev/) - Icons
- [Bun](https://bun.sh/) - Package Manager & Runtime
- [@vercel/og](https://vercel.com/docs/functions/og-image-generation) - Image Generation

## Getting Started

This project uses [Bun](https://bun.sh) as the package manager.

### Installation

```bash
git clone https://github.com/harshsandhu/placehold.git
cd placehold
bun install
```

### Development

Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

Build the application for production:

```bash
bun run build
```

## Project Structure

- `/app` - Next.js App Router pages and API routes.
  - `/api` - API endpoints (`/img`, `/lorem`).
  - `/docs` - Documentation pages.
- `/components` - React components (UI, Navigation, etc.).
- `/lib` - Utility functions and configuration.
- `/public` - Static assets.

## API Reference

### Images

`GET /api/img`

| Parameter | Default | Description            |
| --------- | ------- | ---------------------- |
| `w`       | 600     | Width (px)             |
| `h`       | 400     | Height (px)            |
| `bg`      | #f3f4f6 | Background Color (Hex) |
| `fg`      | #9ca3af | Text Color (Hex)       |

### Text

`GET /api/lorem`

| Parameter | Default   | Description                  |
| --------- | --------- | ---------------------------- |
| `units`   | sentences | words, sentences, paragraphs |
| `count`   | random    | Number of units              |
| `format`  | plain     | plain, html                  |

## License

MIT

