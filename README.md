# OPMA Website

A modern, responsive website for OPMA - a Digital Marketing, AI, and Automation Agency. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🎯 Conversion-focused UI/UX
- 📝 SEO optimized
- 🔒 Type-safe with TypeScript
- 🎨 Styled with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **UI Components:** Headless UI
- **Icons:** Heroicons
- **Calendar Integration:** Calendly
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/opma-website.git
   cd opma-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_CALENDLY_URL=your-calendly-url
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── services/       # Services page
│   ├── pricing/        # Pricing page
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   └── contact/        # Contact page
├── components/         # Reusable components
│   ├── Navigation.tsx  # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── ...
└── styles/            # Global styles
    └── globals.css    # Global CSS
```

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow the [Next.js Style Guide](https://nextjs.org/docs/basic-features/eslint)
- Use functional components with hooks
- Keep components small and focused
- Use proper naming conventions

### Component Structure

- Place reusable components in the `components` directory
- Use proper TypeScript types for props
- Include JSDoc comments for complex components
- Follow the single responsibility principle

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Keep styles consistent across components
- Use CSS variables for theme values

### Performance

- Optimize images with Next.js Image component
- Use proper loading strategies
- Minimize bundle size
- Implement proper caching

## Deployment

The website is deployed on Vercel. To deploy:

1. Push your changes to the main branch
2. Vercel will automatically deploy the changes
3. Check the deployment status on the Vercel dashboard

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or concerns, please contact:
- Email: contact@opma.com
- Website: https://opma.com 