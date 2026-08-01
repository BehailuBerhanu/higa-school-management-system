# Higa Model Boarding School Management System

A complete web-based school management system with public marketing website and three role-based admin portals.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser to http://localhost:3000
```

## System Overview

### Public Website
- Homepage with hero, statistics, testimonials
- About page with school history and leadership
- Academics with curriculum and FAQ
- Admissions with application form
- Campus life and facilities
- News blog with articles
- Photo gallery
- Contact page

**Access**: `http://localhost:3000`

### Student Portal
Dashboard, exam results, announcements, profile, settings

**Access**: `http://localhost:3000/student`

### Teacher Portal
Dashboard, marks entry, attendance tracking, profile

**Access**: `http://localhost:3000/teacher`

### Admin Portal
Dashboard, student directory, teacher management, results publishing

**Access**: `http://localhost:3000/admin`

### Login Page
Unified authentication with role-based tabs

**Access**: `http://localhost:3000/login`

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Neon PostgreSQL + Drizzle ORM
- **Authentication**: Better Auth (email + password)
- **UI Components**: shadcn/ui + Tailwind CSS v4
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: Server actions with validation

## Key Features

✅ Responsive design (mobile, tablet, desktop)
✅ Professional branding with school logo
✅ Semantic HTML and accessibility
✅ Animated hero and scroll effects
✅ Data tables with search and filtering
✅ Role-based navigation
✅ Type-safe database queries
✅ Session management across portals

## Environment Setup

Required environment variables (auto-configured):
- `DATABASE_URL` — Neon PostgreSQL connection
- `BETTER_AUTH_SECRET` — Session signing key

## File Structure

```
app/          — Next.js routes (public site, portals, auth)
components/   — React components (navigation, forms, cards)
lib/          — Utilities (auth, database, data)
public/       — Static assets (logo, images)
```

## Important Files

- `PROJECT_SUMMARY.md` — Complete feature documentation
- `BACKEND_PROGRESS.md` — Backend implementation status
- `lib/db/schema.ts` — Database table definitions
- `lib/auth.ts` — Authentication configuration
- `app/globals.css` — Design system tokens

## Demo Credentials

All portals are pre-filled with demo credentials (UI only):

**Student Portal**
- ID: `HIG-2026-0184`
- Password: Auto-filled

**Teacher Portal**
- Email: `jane.njeri@higa.edu.et`
- Password: Auto-filled

**Admin Portal**
- Email: `kipchoge@higa.edu.et`
- Password: Auto-filled

## Customization

### Colors
Edit `app/globals.css` theme tokens:
- Primary: `--primary: #0B6B3A` (deep green)
- Accent: `--accent: #F4B400` (gold)

### Typography
Fonts configured in `app/layout.tsx`:
- Headings: Playfair Display
- Body: Geist

### School Data
Update `lib/data/school.ts` with:
- School name, address, phone
- Academic year, founding year
- Principal and staff information

## Common Tasks

### Add a new public page
1. Create `app/(public)/new-page/page.tsx`
2. Use `PageHero` component for header
3. Add navigation link in `components/public/site-header.tsx`

### Add portal data
1. Update `lib/db/schema.ts` with new table
2. Create server action in `app/actions/`
3. Use in portal page with server-side rendering

### Modify theme
1. Edit color tokens in `app/globals.css`
2. Update Tailwind classes in components
3. Test across light/dark modes

## Support

- **Design System**: `components/ui/` — shadcn/ui components
- **Icons**: `lucide-react` — 400+ icons
- **Documentation**: `PROJECT_SUMMARY.md` — Full feature list

## Status

- UI Design: ✅ Complete
- Backend: ✅ Foundation ready
- Database: ✅ Schema created
- Authentication: ✅ Configured
- Production Ready: ⏳ Pending integration

---

Built with Next.js 16, Neon, and Drizzle ORM for a modern school management experience.
