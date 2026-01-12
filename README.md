# SULECO EstateOS - Estate Management System

A premium, portfolio-quality estate management web application built with Next.js 14+, TypeScript, and TailwindCSS. This is a UI-only implementation with realistic mock data, designed to showcase enterprise-grade design and functionality.

## 🎯 Features

- **Modern UI/UX**: Clean, professional interface with light/dark mode support
- **Geospatial Console**: Interactive map-like canvas with layer controls for parcels and assets
- **Estate Health Score**: Composite scoring system with breakdown visualization
- **Smart Work Order Triage**: Priority-based grouping and recommended actions
- **Comprehensive Modules**: Estates, Parcels, Assets, Clients, Contracts, Inspections, Maintenance, Documents, Finance, Reports
- **Global Search & Command Palette**: Quick navigation with keyboard shortcuts (Ctrl/Cmd + K)
- **Responsive Design**: Desktop-first, works on tablet and mobile
- **Realistic Mock Data**: 10 estates, 50+ parcels, assets, clients, contracts, work orders, and more

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The app will automatically redirect to `/dashboard`.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # Dashboard with KPIs and charts
│   ├── estates/            # Estate list and detail pages
│   ├── parcels/            # Parcel registry
│   ├── assets/             # Asset management
│   ├── clients/            # Client management
│   ├── contracts/          # Contract management
│   ├── inspections/        # Inspection scheduling
│   ├── maintenance/        # Work order management
│   ├── documents/          # Document vault
│   ├── finance/            # Invoices and payments
│   ├── reports/            # Analytics and reports
│   ├── settings/           # System settings
│   └── help/               # Knowledge base
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   ├── app-shell.tsx      # Main layout wrapper
│   ├── sidebar.tsx         # Navigation sidebar
│   ├── topbar.tsx          # Top navigation bar
│   ├── page-header.tsx     # Page header component
│   ├── stat-card.tsx       # KPI stat card
│   └── map-canvas.tsx      # Geospatial console
├── src/
│   ├── brand/              # Brand system (colors, logo paths)
│   └── lib/
│       ├── mock/           # Mock data files
│       └── utils.ts        # Utility functions
└── public/
    └── brand/              # Brand assets (logo, icons)
```

## 🎨 Design System

### Brand Colors

- **SULECO Cyan**: `#28F0F1`
- **SULECO Blue**: `#3857F9`

### Typography

- System font stack (Inter via Next.js)
- Strong hierarchy with clear heading levels

### Components

Built with [shadcn/ui](https://ui.shadcn.com/) components based on Radix UI primitives.

## 🗺️ Route Map

| Route | Description |
|-------|-------------|
| `/` | Redirects to dashboard |
| `/dashboard` | Main dashboard with KPIs and charts |
| `/estates` | Estate registry list |
| `/estates/[id]` | Estate detail with tabs (Overview, Map, Parcels, Assets, etc.) |
| `/parcels` | Parcel registry |
| `/assets` | Asset management |
| `/clients` | Client management |
| `/contracts` | Contract management |
| `/inspections` | Inspection scheduling |
| `/maintenance` | Work order management with triage mode |
| `/documents` | Document vault |
| `/finance/invoices` | Invoice management |
| `/finance/payments` | Payment tracking |
| `/reports` | Analytics and reports |
| `/settings` | System settings |
| `/help` | Knowledge base and support |
| `/auth/sign-in` | Sign-in page (UI only) |

## 🎯 Key Features Explained

### Estate Health Score

Each estate has a composite health score (0-100) calculated from:
- Compliance (90%)
- Maintenance (85%)
- Occupancy (88%)
- Financial (82%)
- Risk (75%)

The score is visualized with a progress bar and breakdown pills. An "Explain" button (UI stub) would show calculation details.

### Geospatial Console

The Map & Boundaries tab in estate detail pages features:
- SVG-based interactive map canvas
- Layer toggles (Parcels, Assets, Risk Zones, Utilities)
- Parcel selection with details panel
- Coordinate display
- Scale indicator

### Smart Work Order Triage

Triage mode groups work orders by priority:
- **Urgent**: Immediate action required
- **High**: Action needed soon

Each group shows recommended next actions.

### Global Search & Command Palette

Press `Ctrl/Cmd + K` to open the command palette for:
- Quick navigation to any page
- Common actions (Create Estate, Work Order, Contract)
- Keyboard shortcuts displayed

## 🔧 Customization

### Changing Brand Colors

Edit `src/brand/brand.ts`:

```typescript
colors: {
  cyan: "#28F0F1",
  blue: "#3857F9",
}
```

### Replacing Logo

1. Place your logo at `/public/brand/suleco-logo-white.png`
2. Update the path in `src/brand/brand.ts` if needed

### Adding Mock Data

All mock data is in `src/lib/mock/`. Each file exports an array of objects. Add or modify entries as needed.

## 📦 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: lucide-react
- **Charts**: recharts
- **Tables**: @tanstack/react-table
- **Forms**: react-hook-form + zod
- **Animations**: framer-motion
- **Theme**: next-themes

## 🎨 Design Notes

- **Rounded Corners**: 2xl (16px) for cards and containers
- **Gradients**: Subtle cyan-to-blue gradients for primary actions
- **Dark Mode**: Full support with glassy card effects
- **Spacing**: Consistent 4px grid system
- **Shadows**: Soft shadows for depth
- **Motion**: Subtle animations (not gimmicky)

## 🚧 Known Limitations

- **No Backend**: All data is in-memory mock data
- **No Authentication**: Sign-in page is UI only
- **No Real Maps**: Geospatial console uses SVG simulation
- **No File Upload**: Document upload is UI only
- **No Real Calculations**: Health scores and analytics use mock calculations

## 📸 Showcase

Visit `/showcase` to see a gallery of key screens (coming soon).

## 🤝 Contributing

This is a portfolio/demo project. Feel free to fork and customize for your needs.

## 📄 License

This project is for demonstration purposes.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework

---

**Built with ❤️ for SULECO Estate Management**

