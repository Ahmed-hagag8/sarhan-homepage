# SARHAN — Import & Export Solutions

A modern, high-performance landing page for **SARHAN Import & Export**, built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**. Features a luxury metallic gold brand identity, dark/light theme switching, full trilingual internationalization (English, Arabic RTL, and Chinese), interactive quote forms, and direct WhatsApp/Email dispatch.

---

## 🌟 Key Features

- **Executive Brand Identity**: Bespoke luxury metallic gold styling (`oklch` color system) inspired by the official SARHAN globe emblem.
- **Responsive Hero Section**:
  - **Desktop**: Split 2-column layout with brand logo on the left and company presentation on the right (respects natural RTL reading flow).
  - **Mobile**: Clean stacked layout with prominent logo and optimized hierarchy.
- **Direct Shipping Quote Modal**:
  - Interactive popup when selecting **"Ship For You"**.
  - Form fields for Name, Phone, Origin, Destination, Freight Mode (Air/Sea/Express), and cargo specifications.
  - Direct 1-click dispatch to **WhatsApp** and **Email** with pre-formatted inquiry text.
- **EGY FLAX Product Showcase**:
  - Featured export commodity: **EGY FLAX** (Premium Natural Egyptian Flax & Fibers).
  - Desktop hover preview revealing product highlights, with a full interactive product modal and direct quote request buttons.
- **Modern Connect Us Select Bar**:
  - Floating frosted-glass dock with live status indicator (*Active Now*).
  - Instant direct channels for **WhatsApp**, **Email**, and **Direct Call** with 1-click number copy feedback.
- **Full Internationalization (i18n)**:
  - Supports **English (LTR)**, **العربية (RTL)**, and **中文 (LTR)**.
  - Seamless layout mirroring for Arabic with balanced typography.
- **Dark / Light Theme Switcher**:
  - Smooth theme transitions with automatic contrast adaptation.
  - Transparent logo asset engineered to seamlessly adapt across dark and light modes.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.17` or higher (recommended: Node `v20+` or `v24+`)
- **npm**, **pnpm**, or **yarn**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/sarhan-homepage.git
cd sarhan-homepage
npm install
```

### Running Locally

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Available Scripts

| Script | Command | Purpose |
| --- | --- | --- |
| `npm run dev` | `next dev` | Start development server on port 3000 |
| `npm run build` | `next build` | Build optimized production bundle |
| `npm run start` | `next start` | Start production server |
| `npm run lint` | `eslint .` | Lint codebase for best practices |

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/new).
3. Import the `sarhan-homepage` repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **Deploy**.

### Deploy on Netlify

1. Push your code to GitHub.
2. Link your repository in Netlify.
3. Build command: `npm run build`.
4. Publish directory: `.next`.

### Self-Hosted (Node / Docker)

```bash
npm run build
npm run start
```

The application will run on port `3000` (or `PORT` environment variable).

---

## 📁 Project Structure

```text
├── public/
│   ├── sarhan-logo.png     # Official transparent company emblem
│   └── robots.txt          # Search engine crawlers configuration
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind v4 styles & metallic gold utilities
│   │   ├── layout.tsx      # Root layout, fonts, and theme providers
│   │   └── page.tsx        # Homepage (Hero, About Us, Services, Footer)
│   ├── components/
│   │   ├── connect-us.tsx           # Modern floating contact select bar
│   │   ├── egy-flax-dialog.tsx      # EGY FLAX product details & quote modal
│   │   ├── ship-inquiry-dialog.tsx  # Interactive shipping quote form modal
│   │   ├── language-selector.tsx    # Multilingual language switcher
│   │   ├── theme-toggle.tsx         # Dark / light mode toggle
│   │   ├── logo.tsx                 # Responsive brand logo component
│   │   └── ui/                      # Accessible UI components (Radix/shadcn)
│   ├── lib/
│   │   ├── i18n-context.tsx         # Trilingual translations & RTL provider
│   │   └── utils.ts                 # ClassName merging utility
├── eslint.config.mjs       # ESLint 9 configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and npm scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 📄 License

Private & Proprietary © SARHAN Import & Export. All rights reserved.
add scarab
## 📄 License

Private & Proprietary © SARHAN Import & Export. All rights reserved.
add scarab

## 📄 License

Private & Proprietary © SARHAN Import & Export. All rights reserved.
