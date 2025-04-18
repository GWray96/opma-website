# Brand Guidelines

## 🧠 Brand Identity  
**Brand Name:** Wrayvolution  
**Tagline:** _"Marketing. Automation. AI. On Demand."_

**Brand Personality:**  
- **Confident** but not arrogant  
- **Casual**, conversational, approachable  
- **Forward-thinking**, innovative, streamlined  
- Focused on **time freedom**, **efficiency**, and **entrepreneur empowerment**

## 🎨 Logo Design

**Logo Concept:**
- **Primary Icon:** A modern, clean icon combining a **play button** (streaming metaphor), a **gear** (automation), and a **bolt or brain node** (AI).
- Must work well in square format for favicons and social media.
- Needs to have both a **primary (icon + text)** version and a **simplified (icon only)** version.

**Logo Style:**
- Flat, minimal, and versatile
- Works on both dark and light backgrounds
- Slight tech/futuristic flair without feeling cold or robotic

## 🌈 Color Palette

| Color             | Use                           | Hex        |
|-------------------|-------------------------------|------------|
| **Primary Blue**  | CTAs, highlights, buttons    | #3F8CFF    |
| **Electric Purple**| Accent color for AI/innovation| #A66EFF    |
| **Charcoal Gray** | Text, neutral base           | #1C1C1E    |
| **Cool White**    | Background                   | #F9FAFB    |
| **Mint Green**    | Success, automation highlights| #2DE3B6    |

> - Use **blue** to convey trust and professionalism  
> - Use **purple** sparingly to symbolize cutting-edge tech and creativity  
> - Use **green** to emphasize efficiency, results, and automation success

## ✍️ Typography

**Primary Typeface:**  
- **Sora** (Google Font) – clean, modern, tech-forward  
- Great for headers, CTAs, and UI text  

**Secondary Typeface:**  
- **Inter** – highly readable for body copy, paragraph text, and smaller labels  

| Use Case         | Font        | Weight       |
|------------------|-------------|--------------|
| Headings (H1–H3) | Sora       | Bold         |
| Subheadings      | Sora       | Medium       |
| Body Text        | Inter      | Regular      |
| Buttons          | Sora       | Semi-Bold    |
| Captions/Labels  | Inter      | Light        |

## 🖼️ Imagery & Visual Style

- Lean on **clean UI mockups**, **illustrated workflows**, and **tech-inspired visuals**
- Subtle **motion graphics** or looping animations to reflect systems working behind the scenes
- Use **iconography** to explain services simply
- Avoid clutter or stocky-looking images

## 🔊 Brand Voice & Tone

- Clear, confident, and a bit playful  
- No jargon — simplify tech/AI speak  
- Speak directly to the pain point: _"We handle the complex, so you can focus on growth."_

**Examples:**
- ✅ "Let us build your funnel. You just show up to the calls."  
- ✅ "Automations that work while you sleep."  
- ✅ "Like hiring a full marketing team — without the overhead."

## 📦 Brand Elements At-a-Glance

- ✅ Logo (primary, icon-only, stacked)  
- ✅ Brand Color Palette (5 colors max)  
- ✅ Typography (Google fonts for accessibility)  
- ✅ UI component styling (rounded corners, card layouts, hover states, smooth shadows)
- ✅ Button styles: Pill-shaped or rectangular with soft shadows  
- ✅ Motion: Microinteractions, subtle transitions via Framer Motion  
- ✅ Visual Metaphor: "Choose your service like a playlist"  

## 🎨 Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3F8CFF',    // Primary Blue
        accent: '#A66EFF',     // Electric Purple
        neutral: '#1C1C1E',    // Charcoal Gray
        background: '#F9FAFB', // Cool White
        success: '#2DE3B6',    // Mint Green
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
};
``` 