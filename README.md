# OPMA Website

A modern, responsive website for a Digital Marketing, AI, and Automation Agency built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- Modern, responsive design
- Mobile-first approach
- Smooth animations with Framer Motion
- SEO optimized
- Fast performance with Next.js
- Clean, modular code structure

## Tech Stack

- **Framework:** Next.js 14 / App Router
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Forms:** React Hook Form
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/opma-website.git
cd opma-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/app
  /home
    page.tsx
    /components
      HeroSection.tsx
      HowItWorks.tsx
      ServicesPreview.tsx
      PricingPreview.tsx
      Testimonials.tsx

  /services
    page.tsx
    /components
      ServiceTabs.tsx
      ServiceCard.tsx

  /pricing
    page.tsx
    /components
      PricingTable.tsx
      FAQ.tsx

  /about
    page.tsx
    /components
      FounderStory.tsx
      ValuesSection.tsx

  /case-studies
    page.tsx
    /components
      CaseStudyCard.tsx
      ResultsStats.tsx

  /resources
    page.tsx
    /components
      BlogGrid.tsx
      DownloadCard.tsx

  /contact
    page.tsx
    /components
      ContactForm.tsx
      BookingEmbed.tsx
```

## Deployment

The site is configured for easy deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

## License

This project is licensed under the MIT License - see the LICENSE file for details. 