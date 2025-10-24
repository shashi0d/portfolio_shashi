# Shashidhara Narayanappa Portfolio Website

A modern, minimalist portfolio website for Shashidhara Narayanappa, an innovative HCI researcher and design enthusiast, built with React Router and Tailwind CSS.

## Features

- **Clean, Minimalist Design**: Elegant and sophisticated design aesthetic focused on showcasing HCI research and development work
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Multiple Pages**: 
  - Home page with main statement and work showcase
  - Dynamic case study pages for individual projects
  - Contact page with professional information
- **Modern Tech Stack**: Built with React Router v7, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading with optimized assets and modern build tools

## Pages

### Home Page
- Main landing page with Shashidhara's role and research focus
- Work section showcasing VR research, interactive kiosk CMS, and metaverse projects
- About section with education, research experience, and technical skills
- Clean typography and centered layout
- Fixed header and footer

### Dynamic Case Study Pages
- Individual project pages accessible via `/work/project-1`, `/work/project-2`, etc.
- Detailed case studies including:
  - VR Emotional Recognition Research (SETH Lab, Indiana University)
  - Interactive Display Kiosk CMS (Zero Distance Metaverse)
  - Web Metaverse Application (Zero Distance Metaverse)
- Comprehensive project information with achievements, challenges, and technologies

### Contact Page
- Professional contact information including email, phone, LinkedIn, and portfolio
- Contact form with subject selection for different types of inquiries
- Current role and location information

## Tech Stack

- **Framework**: React Router v7
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Development**: React Router Dev Server

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd knowshashi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
├── routes/             # Page components
│   ├── home.tsx        # Home page with work showcase
│   ├── work.tsx        # Work page (redirects to home)
│   ├── work/[projectId].tsx # Dynamic case study pages
│   └── contact.tsx     # Contact page
├── app.css             # Global styles
├── root.tsx            # Root layout
└── routes.ts           # Route configuration
```

## Design Features

- **Typography**: Uses Inter font family for clean, modern typography
- **Color Scheme**: Minimalist gray and white color palette
- **Layout**: Fixed header and footer with scrollable content
- **Spacing**: Generous white space and consistent spacing
- **Interactions**: Subtle hover effects and transitions

## Content Highlights

### Professional Experience
- **Graduate VR Research and Development** at SETH Lab, Indiana University (2024-Present)
- **Lead Full Stack Developer** at Zero Distance Metaverse Pvt. Ltd. (2022-2024)
- **Software Developer** at Zero Distance Metaverse Pvt. Ltd. (2021-2022)

### Education
- **M.S., Human Computer Interaction** - Indiana University (Expected May 2026)
- **B.E., Computer Science and Engineering** - Visvesvaraya Technological University (2020)

### Key Skills
- VR Technologies (Meta Quest Pro, Unity, Unreal Engine)
- Full Stack Development (React, Next.js, Node.js, Firebase)
- UX Research & Design (Figma, User Interviews, Usability Testing)
- HCI Research Methods (Literature Review, Qualitative Analysis)

## Customization

The website is built to be easily customizable:

- Update content in the respective page components
- Modify styling using Tailwind CSS classes
- Add new projects by updating the project data in the dynamic case study component
- Replace placeholder images with actual project screenshots

## Contact Information

- **Email**: shashidharprakash33@gmail.com
- **Phone**: +1 (317) 384-4975
- **LinkedIn**: linkedin.com/in/meetshashi
- **Portfolio**: shashidhara-n.vercel.app
- **Location**: Indianapolis, Indiana, United States

## License

This project is for educational and portfolio purposes.
