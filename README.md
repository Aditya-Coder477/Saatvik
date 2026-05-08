<div align="center">
  <img src="https://via.placeholder.com/150x50/FAF7F2/2D2D2D?text=SAATVIK" alt="Saatvik Logo" width="200" />
  <br />
  <h1>Saatvik</h1>
  <p><strong>Where Heritage Meets Modernity — A Premium Women's Fashion Experience</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma" alt="Prisma" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License" />
  </p>
</div>

---

## 📖 Project Overview

**Saatvik** is a premium women’s fashion e-commerce platform that seamlessly blends traditional Indian wear with contemporary western silhouettes. Designed with a minimalist, luxury-boutique aesthetic, it provides a high-conversion, mobile-first shopping experience.

Unlike generic marketplaces, Saatvik is built for storytelling, visual elegance, and trust. The platform caters to the modern woman who values artisanal craftsmanship (Chanderi, Lucknowi Chikankari) as much as structured linen and refined satin. 

## ✨ Key Features

- 👘 **Curated Collections**: Distinct Traditional and Western clothing lines.
- 🎛️ **Advanced Discovery**: Faceted filtering (fabric, occasion, size) and sorting.
- 📱 **Mobile-First Commerce**: Sticky buy bars, thumb-friendly navigation, and swipeable galleries.
- 📏 **Fit Confidence**: Interactive "Find Your Fit" wizard and comprehensive size guides.
- ❤️ **Wishlist & Cart**: Persistent state management for saved items and shopping bags.
- 💳 **Secure Checkout**: Seamless integration with Razorpay for UPI, Card, and COD payments.
- ⭐ **Social Proof**: Customer reviews with photo galleries and detailed fit feedback.
- 💬 **Omnichannel Support**: WhatsApp support integration and Instagram feed displays.
- 📊 **Admin Dashboard**: Secure panel for managing orders, inventory, and analytics.
- 🖼️ **High-Res Galleries**: Editorial-style product imagery with desktop hover-zoom.

## 🎨 UI / UX Highlights

- **Minimalist Interface**: Ample whitespace and a calm, uncluttered layout.
- **Premium Palette**: A sophisticated blend of Cream, Sand, Blush, and Muted Gold.
- **Elegant Typography**: Editorial serif headings (`Playfair Display`) paired with clean sans-serif body text (`Inter`).
- **Smooth Motion**: Subtle page transitions, fade-ins, and micro-interactions powered by Framer Motion.
- **Boutique Feel**: Zero aggressive sales banners, pop-ups, or visual noise.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui & Radix UI Primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend & Database
- **API**: Next.js Server Actions & API Routes (NestJS-ready architecture)
- **Database**: PostgreSQL
- **ORM**: Prisma

### Infrastructure & Integrations
- **Deployment**: Vercel
- **Asset Storage**: Cloudflare R2
- **Payments**: Razorpay

---

## 📂 Folder Structure

```text
saatvik/
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets (fonts, icons)
├── src/
│   ├── app/                # Next.js App Router (Pages, Layouts, API)
│   ├── components/         # Reusable React components
│   │   ├── home/           # Homepage specific sections
│   │   ├── layout/         # Header, Footer, Navigation
│   │   ├── product/        # Product cards, galleries, Modals
│   │   └── ui/             # shadcn/ui base components
│   ├── context/            # React Context (Cart, Wishlist)
│   ├── data/               # Mock data for prototype (Products, Reviews)
│   ├── lib/                # Utility functions, Prisma client
│   └── types/              # TypeScript interfaces
├── .env.example            # Environment variables template
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
└── tailwind.config.js      # Theme design tokens
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database

### 1. Clone the repository
```bash
git clone https://github.com/Aditya-Coder477/Saatvik.git
cd Saatvik
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Copy the example environment file and update the values:
```bash
cp .env.example .env.local
```

### 4. Database Setup
Push the Prisma schema to your PostgreSQL database:
```bash
npx prisma db push
```

### 5. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## 🔐 Environment Variables

Ensure the following variables are set in your `.env.local` file:

```env
# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/saatvik?schema=public"

# Payments (Razorpay)
RAZORPAY_KEY_ID="rzp_test_yourkeyid"
RAZORPAY_KEY_SECRET="your_key_secret"

# Storage (Cloudflare R2)
R2_ACCESS_KEY_ID="your_access_key"
R2_SECRET_ACCESS_KEY="your_secret_key"
R2_BUCKET_NAME="saatvik-assets"
```

---

## 📸 Screenshots

| Homepage | Product Detail |
|:---:|:---:|
| ![Homepage Preview](/public/screenshots/home-preview.jpg) <br/> *Curated editorial hero and categories* | ![PDP Preview](/public/screenshots/pdp-preview.jpg) <br/> *High-res gallery and fit helper wizard* |

| Mobile UI | Checkout Flow |
|:---:|:---:|
| ![Mobile Preview](/public/screenshots/mobile-preview.jpg) <br/> *Thumb-friendly navigation and sticky buy bar* | ![Checkout Preview](/public/screenshots/checkout-preview.jpg) <br/> *Seamless Razorpay payment integration* |

*(Note: Replace screenshot placeholders with actual images before showcasing)*

---

## 🔮 Future Improvements

- 🤖 **AI Stylist Assistant**: A conversational AI to recommend outfits based on occasion and body type.
- 🎯 **Recommendation Engine**: "You May Also Like" powered by collaborative filtering.
- 👗 **Virtual Try-On**: AR integration to visualize fit and drape.
- 💎 **Loyalty System**: Tiered rewards program (e.g., *Saatvik Insider*).
- 🌍 **Multi-Language & Currency**: Support for global luxury shoppers.

---

## ⚡ Performance & SEO

- **SSR & SSG**: Pre-rendered product pages for instant load times and optimal SEO.
- **Image Optimization**: Next/Image utilized for automatic WebP conversion and lazy loading.
- **Accessibility**: ARIA-labels, semantic HTML, and keyboard navigation support.
- **Lighthouse**: Targeting 90+ across Performance, Accessibility, Best Practices, and SEO.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the codebase or add features:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing style guidelines and passes all linting checks.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Aditya**  
- 🐙 GitHub: [@Aditya-Coder477](https://github.com/Aditya-Coder477)
- 💼 LinkedIn: [Your Profile Link]
- 📧 Email: [Your Email Address]

<br/>
<div align="center">
  <sub>Built with elegance and performance.</sub>
</div>
