# Quick Start Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## First Steps

1. The app will automatically redirect to `/dashboard`
2. Explore the sidebar navigation to see all modules
3. Try the command palette: Press `Ctrl/Cmd + K`
4. Toggle dark mode: Click the theme toggle in the top bar
5. Visit `/showcase` to see a gallery of all screens

## Key Routes to Explore

- **Dashboard** (`/dashboard`) - Overview with KPIs and charts
- **Estates** (`/estates`) - Browse all estates
- **Estate Detail** (`/estates/est-001`) - See the full estate detail page with tabs
- **Maintenance** (`/maintenance`) - Try the "Triage Mode" toggle
- **Geospatial Console** - Go to any estate detail page → "Map & Boundaries" tab

## Features to Try

### 1. Global Search & Command Palette
- Press `Ctrl/Cmd + K` anywhere
- Navigate to any page quickly
- See keyboard shortcuts

### 2. Estate Health Score
- Go to any estate detail page
- View the health score breakdown
- Click "Explain Score" (UI stub)

### 3. Geospatial Console
- Navigate to `/estates/est-001`
- Click the "Map & Boundaries" tab
- Toggle layers and click on parcels

### 4. Smart Work Order Triage
- Go to `/maintenance`
- Click "Triage Mode"
- See work orders grouped by priority

### 5. Theme Toggle
- Click the sun/moon icon in the top bar
- See the UI adapt to light/dark mode

## Mock Data

All data is in-memory mock data located in `src/lib/mock/`:
- 10 estates
- 50+ parcels
- 18 assets
- 15 clients
- 10 contracts
- 10 work orders
- 8 inspections
- 10 documents
- 10 invoices
- 5 payments

## Customization

### Change Brand Colors
Edit `src/brand/brand.ts`:
```typescript
colors: {
  cyan: "#28F0F1",  // Change this
  blue: "#3857F9",   // Change this
}
```

### Add More Mock Data
Edit files in `src/lib/mock/` to add more entries.

## Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Build Errors
Clear `.next` folder and reinstall:
```bash
rm -rf .next node_modules
npm install
npm run dev
```

## Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Explore the codebase structure
- Customize the brand colors and logo
- Add your own mock data

---

**Happy exploring! 🚀**

