# MIITJEE Website Redesign — Architecture & Implementation Guide
### Version — Lean & Launch-Ready

> **Prepared for:** MIITJEE Classes Pvt. Ltd.
> **Stack:** Next.js 15 · TypeScript · Tailwind CSS · Supabase Free · Vercel Free

---

## WHAT CHANGED IN V2

| V1 (Removed / Simplified)               | V2 (What We're Building)                          |
|------------------------------------------|----------------------------------------------------|
| Phone OTP verification for MANTHAN       | ❌ Removed — simple form capture instead           |
| Vercel Pro                               | ✅ Vercel Free (Hobby) — sufficient for MVP        |
| Supabase Pro                             | ✅ Supabase Free tier — 500MB DB, 1GB storage      |
| Sentry error tracking                    | ❌ Removed — use Vercel built-in logs              |
| Resend email service (paid)              | ✅ Supabase built-in email OR free Brevo tier      |
| MSG91 SMS/WhatsApp API                   | ❌ Removed — use WhatsApp deep links only          |
| React PDF generation                     | ✅ Static PDF files hosted on Supabase Storage     |
| Complex test interface for MANTHAN       | ✅ MANTHAN → Coming Soon page (Phase 1)            |
| Blog module (Phase 1)                    | Deferred to Phase 2                               |
| Scholarship result card PDF generation   | Deferred — not needed for coming soon             |

Reference: MIITJEE Website Redesign Architecture v2.0

Stack: Next.js 15 · TypeScript · Tailwind CSS · Supabase Free · Vercel Free
Fonts: Inter (body/UI) · Poppins (headings/display)
Brand Colors:


White: #FFFFFF (backgrounds, cards)
Yellow: #FEFD12 (primary CTA, accents, highlights)
Blue Dark: #1C1CA5 (primary brand, navbars, headings)
Blue Deep: #23205D (dark sections, footers, overlays)
Architecture Reference: MIITJEE_Architecture_v2.md (attached in project folder)

---

## TABLE OF CONTENTS

1. [Revised Sitemap](#1-revised-sitemap)
2. [Revised Tech Stack](#2-revised-tech-stack)
3. [Navigation Architecture](#3-navigation-architecture)
4. [NEET Test Series — PDF Lead-Gen Flow](#4-neet-test-series--pdf-lead-gen-flow)
5. [MANTHAN — Coming Soon Page](#5-manthan--coming-soon-page)
6. [Homepage Architecture (Updated)](#6-homepage-architecture-updated)
7. [Database Schema (Lean)](#7-database-schema-lean)
8. [Admin Panel (Lean)](#8-admin-panel-lean)
9. [Next.js Folder Structure](#9-nextjs-folder-structure)
10. [Development Roadmap](#10-development-roadmap)
11. [Infrastructure & Costs](#11-infrastructure--costs)

---

## 1. REVISED SITEMAP

```
/                                   → Homepage
/about                              → About MIITJEE
/programs                           → Programs Overview
  /programs/jee                     → JEE Programme
  /programs/neet                    → NEET Programme
  /programs/foundation              → Foundation (Cl. 6–10)

/test-series                        → Test Series Hub            ← NEW
  /test-series/neet                 → NEET Mock Test Series      ← NEW
  /test-series/neet/register        → Student Details Form       ← NEW
  /test-series/neet/download        → PDF Download Page          ← NEW

/scholarship                        → MANTHAN — Coming Soon      ← CHANGED (was full funnel)

/results                            → Results Hub
  /results/jee                      → JEE Results
  /results/neet                     → NEET Results

/faculty                            → Faculty Listing
/gallery                            → Gallery
/branches                           → All Branches
/testimonials                       → Testimonials
/faq                                → FAQ
/contact                            → Contact
/apply                              → Admission Enquiry Form

/admin                              → Admin Dashboard (protected)
  /admin/leads                      → Admission Leads
  /admin/test-series-leads          → NEET Test Series Registrations ← NEW
  /admin/results                    → Results Manager
  /admin/gallery                    → Gallery Manager
  /admin/testimonials               → Testimonials Manager
  /admin/faculty                    → Faculty Manager
  /admin/settings                   → Site Settings
```

---

## 2. REVISED TECH STACK

### Core Stack

| Layer              | Technology                       | Plan / Cost         |
|--------------------|----------------------------------|---------------------|
| Framework          | Next.js 15 (App Router)          | Free                |
| Language           | TypeScript 5                     | Free                |
| Styling            | Tailwind CSS 3.4                 | Free                |
| UI Components      | Shadcn UI                        | Free                |
| Animation          | Framer Motion 11                 | Free                |
| Database           | Supabase (PostgreSQL)            | Free tier           |
| Auth (Admin)       | Supabase Auth                    | Free tier           |
| Storage (PDFs)     | Supabase Storage                 | Free (1GB)          |
| Deployment         | Vercel Hobby                     | Free                |
| Forms              | React Hook Form + Zod            | Free                |
| Email notification | Supabase built-in SMTP OR Brevo  | Free tier           |
| Analytics          | Vercel Analytics (basic)         | Free                |

### What We're NOT Using (and why)

| Removed              | Reason                                                        |
|----------------------|---------------------------------------------------------------|
| Phone OTP / Twilio   | Adds cost + complexity, not needed for MVP                    |
| Vercel Pro           | Free tier: 100GB bandwidth, 100 deployments/day — enough     |
| Supabase Pro         | Free tier: 500MB DB, 1GB storage — enough for Phase 1        |
| Sentry               | Use Vercel function logs for now                              |
| react-pdf (server)   | PDFs are static files uploaded to Supabase Storage            |
| MSG91 / SMS API      | Use WhatsApp `wa.me` deep links instead                       |
| Resend (paid)        | Brevo free 300 emails/day is sufficient                       |

### Supabase Free Tier Limits (confirmed sufficient)

- 500MB database space — we'll use < 50MB at Phase 1
- 1GB file storage — 5 PDF mock papers ≈ 25–50MB total
- 50MB database egress/day — fine for MVP traffic
- 2 projects on free plan
- Unlimited API requests

---

## 3. NAVIGATION ARCHITECTURE

### Desktop Nav (left → right)

```
[MIITJEE Logo]   Programs ▾   Results   Test Series ▾   Scholarship   Faculty   Branches   [📞 Call]  [Apply Now]
```

### "Programs" Dropdown

```
Programs ▾
├── JEE Main + Advanced
├── NEET / AIIMS
└── Foundation (Cl. 6–10)
```

### "Test Series" Dropdown  ← NEW

```
Test Series ▾
├── 🩺 NEET Mock Test Series (Free)    ← active, links to /test-series/neet
└── ⚙️ JEE Test Series                 ← "Coming Soon" badge, disabled
```

### "Scholarship" Link

→ Links to `/scholarship` — the MANTHAN Coming Soon page

### Mobile Nav (hamburger drawer)

```
Programs →
Results →
Test Series →
  └── NEET Mock Papers (Free) →
Scholarship (MANTHAN) →
Faculty →
Branches →
Apply Now  [gold button, full width]
📞 Call Us [secondary, full width]
```

---

## 4. NEET TEST SERIES — PDF LEAD-GEN FLOW

### 4.1 Concept

MIITJEE is offering **5 free NEET Mock Test Papers** as PDFs to students preparing for NEET re-exam (ReNEET). This is a lead-generation tool — student fills details → stored in admin panel → student gets instant PDF access.

No OTP. No payment. No login. Just: **fill form → download PDFs**.

---

### 4.2 Page Flow

```
Nav: "Test Series" → "NEET Mock Test Series"
         ↓
/test-series/neet           ← Marketing landing page
         ↓
[Download Free Papers →]    ← CTA button
         ↓
/test-series/neet/register  ← Student details form
         ↓
[Submit & Get Papers]       ← Form submit
         ↓
/test-series/neet/download  ← PDF download page
```

Also: Hero section on homepage has a button → `/test-series/neet`

---

### 4.3 Page 1: `/test-series/neet` — Marketing Landing

**Purpose:** Convert visitor into a lead. Explain what's included, why it's free, create urgency.

**Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  🩺  NEET ReNEET Preparation                           │
│                                                         │
│  5 FREE NEET Mock Test Papers                          │
│  By MIITJEE Faculty · Absolutely Free · Instant Access │
│                                                         │
│  ✅ 180 Questions per paper (Physics · Chemistry · Bio) │
│  ✅ Based on actual NEET pattern (NTA 2024 syllabus)    │
│  ✅ Detailed answer key + solutions                     │
│  ✅ All 5 papers in one download                        │
│  ✅ Prepared by MIITJEE's expert NEET faculty           │
│                                                         │
│  [Download All 5 Papers Free →]                        │
│                                                         │
│  ──────────── What's Inside ────────────               │
│  Paper 1 · Paper 2 · Paper 3 · Paper 4 · Paper 5      │
│  (Preview card for each showing subject coverage)      │
│                                                         │
│  Already downloaded by 2,400+ students                 │
└─────────────────────────────────────────────────────────┘
```

**Section: Mock Paper Preview Cards**

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Mock Paper 1 │  │  Mock Paper 2 │  │  Mock Paper 3 │
│  Full Syllabus│  │  Full Syllabus│  │  Full Syllabus│
│  180 Q        │  │  180 Q        │  │  180 Q        │
│  Physics: 45  │  │  Physics: 45  │  │  Physics: 45  │
│  Chemistry:45 │  │  Chemistry:45 │  │  Chemistry:45 │
│  Biology: 90  │  │  Biology: 90  │  │  Biology: 90  │
│  [Locked 🔒]  │  │  [Locked 🔒]  │  │  [Locked 🔒]  │
└──────────────┘  └──────────────┘  └──────────────┘
```

*(Lock icon unlocks after form fill — visual device)*

**Bottom CTA:** "Fill your details below and get all 5 papers instantly — completely free."

---

### 4.4 Page 2: `/test-series/neet/register` — Student Details Form

**Purpose:** Capture student data into admin panel before giving PDF access.

**Form Fields:**

```
NEET Mock Test Series — Get Your Free Papers

┌────────────────────────────────────────────────────┐
│  Student Full Name *          [_________________]   │
│  Mobile Number *              [_________________]   │
│  Email Address                [_________________]   │
│  Class / Year *               [Dropdown]            │
│     • Class 11                                      │
│     • Class 12                                      │
│     • Dropper (ReNEET)                              │
│  Target Exam Year *           [2025 / 2026]         │
│  City *                       [_________________]   │
│  Preferred MIITJEE Branch     [Dropdown - optional] │
│                                                     │
│  ☑ I agree to receive updates from MIITJEE         │
│                                                     │
│  [Get My Free Papers →]  (gold button, full width)  │
└────────────────────────────────────────────────────┘

🔒 Your details are safe. We don't spam.
```

**On Submit:**
1. Client-side Zod validation
2. Server Action → insert into `test_series_leads` table in Supabase
3. Redirect to `/test-series/neet/download?ref=neet-ts` (no token needed for MVP — anyone with URL can access)
4. *(Optional Phase 2: email the download link via Brevo)*

**Note on access control:** For MVP, no login/token required. The download page is publicly accessible but not linked from nav. Students reach it only via form submit redirect. This is intentional — simplicity over gate-keeping at this stage.

---

### 4.5 Page 3: `/test-series/neet/download` — PDF Download Page

**Purpose:** Deliver the value. Reinforce MIITJEE brand. Upsell to admission enquiry.

**Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  🎉 Your Papers Are Ready!                             │
│  Thank you, [Name]. Download all 5 NEET mock papers    │
│  below. Good luck with your preparation!               │
│                                                         │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐          │
│  │ Mock Paper 1│ │ Mock Paper 2│ │ Mock Paper 3│         │
│  │ 180 Q      │ │ 180 Q      │ │ 180 Q      │          │
│  │[⬇ Download]│ │[⬇ Download]│ │[⬇ Download]│         │
│  └────────────┘ └────────────┘ └────────────┘          │
│                                                         │
│  ┌────────────┐ ┌────────────┐                          │
│  │ Mock Paper 4│ │ Mock Paper 5│                         │
│  │ 180 Q      │ │ 180 Q      │                          │
│  │[⬇ Download]│ │[⬇ Download]│                         │
│  └────────────┘ └────────────┘                          │
│                                                         │
│  ─────────── Want to crack NEET 2025? ───────────      │
│  Join MIITJEE's NEET Classroom Coaching                │
│  • Expert faculty · Small batches · Proven results     │
│  [Book Free Counselling →]  [WhatsApp Us →]            │
└─────────────────────────────────────────────────────────┘
```

**PDF Links:** Supabase Storage public bucket URLs (direct download links).

**Download button behavior:**
```typescript
// Each button is a direct anchor tag with download attribute
<a
  href="https://[project].supabase.co/storage/v1/object/public/neet-mock-papers/neet-mock-paper-1.pdf"
  download="MIITJEE_NEET_Mock_Paper_1.pdf"
  className="btn btn-primary"
>
  ⬇ Download Paper 1
</a>
```

**Upsell section below downloads:**
- "Want personalised NEET coaching?" → `#admission` form or `/apply`
- "Ask our experts on WhatsApp" → `wa.me` link

---

### 4.6 Data Captured (Admin Panel)

Every form submit creates a row in `test_series_leads`:

| Field               | Value Example                    |
|---------------------|----------------------------------|
| id                  | uuid                             |
| name                | "Priya Sharma"                   |
| phone               | "9876543210"                     |
| email               | "priya@gmail.com"                |
| class_level         | "Dropper (ReNEET)"               |
| target_year         | "2025"                           |
| city                | "Jamshedpur"                     |
| branch_pref         | "Sakchi, Jamshedpur"             |
| series_type         | "neet"                           |
| created_at          | 2025-06-12T10:30:00Z             |

Admin can:
- View all leads in a table
- Filter by class, city, date, branch
- Export as CSV
- See total count + today's count

---

## 5. MANTHAN — COMING SOON PAGE

### 5.1 Why Coming Soon?

The full online MANTHAN test (registration → OTP → test → result → counselling) is complex. For Phase 1, we ship a high-quality **Coming Soon** page that:
- Builds excitement and collects interested students
- Allows students to register interest (name + phone + class) → goes into admin panel
- Shows a countdown timer to launch date
- Doesn't block launch of the main site

### 5.2 `/scholarship` — Coming Soon Page Layout

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  🏆  MIITJEE MANTHAN 2025                                 │
│                                                            │
│  Win Up to 100% Scholarship on Coaching Fees              │
│  Our flagship scholarship exam is coming soon.            │
│                                                            │
│  ┌──────────────────────────────────────────┐             │
│  │   Launches in:                           │             │
│  │   [  12  ]  [  04  ]  [  32  ]  [  18 ] │             │
│  │   DAYS      HRS      MINS      SECS      │             │
│  └──────────────────────────────────────────┘             │
│                                                            │
│  ── What is MANTHAN? ──                                   │
│  • Free scholarship exam for Class 7–12 students          │
│  • Score well → win up to 100% fee waiver                 │
│  • Instant result · Free to take                          │
│                                                            │
│  Register your interest and we'll notify you              │
│  the moment MANTHAN 2025 goes live.                       │
│                                                            │
│  ┌────────────────────────────────────────────┐           │
│  │  Name *          [__________________]       │           │
│  │  Phone *         [__________________]       │           │
│  │  Class *         [Dropdown 7–12    ]        │           │
│  │  [Notify Me When It Launches →]             │           │
│  └────────────────────────────────────────────┘           │
│                                                            │
│  ── MANTHAN Scholarship Tiers ──                          │
│  90–100% score  →  100% scholarship                       │
│  75–89%  →  60% scholarship                               │
│  60–74%  →  40% scholarship                               │
│  50–59%  →  20% scholarship                               │
│  Below 50% →  10% scholarship                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 5.3 Interest Registration

Form submit → row in `manthan_interest` table:

| Field       | Value          |
|-------------|----------------|
| id          | uuid           |
| name        | "Rohan Kumar"  |
| phone       | "9876543210"   |
| class_level | "11"           |
| created_at  | timestamp      |

Admin can see total interest count and export for notification campaign when MANTHAN goes live.

### 5.4 Launch Date Configuration

Set in `/admin/settings` → "MANTHAN Launch Date" field. The countdown timer reads this value from a `site_settings` table row. Admin can change it anytime without code deploy.

---

## 6. HOMEPAGE ARCHITECTURE (UPDATED)

### Section Order

```
1.  Navbar (sticky)
2.  Hero Section          ← Updated with Test Series CTA
3.  Results Showcase
4.  NEET Test Series CTA  ← NEW section (replaces MANTHAN form)
5.  Programs Overview
6.  Why MIITJEE
7.  Faculty Showcase
8.  Testimonials
9.  Gallery Preview
10. Branches
11. MANTHAN Teaser         ← "Coming Soon" mini-section linking to /scholarship
12. FAQ
13. Admission Form
14. Footer
```

### Section 2: Hero — Updated CTAs

**Three CTAs in hero (priority order):**

```
Primary:    [Book Free Counselling →]   ← gold button, links to #admission
Secondary:  [Free NEET Mock Papers →]   ← blue outline, links to /test-series/neet  ← NEW
Tertiary:   [MANTHAN — Coming Soon]     ← ghost, disabled/greyed with badge
```

The hero sub-headline now reads:
> JEE · NEET · Foundation · NTSE · Olympiads
> **Free NEET Mock Test Papers available now →**

### Section 4: NEET Test Series CTA (New Homepage Section)

**Layout:** Full-width ice-blue background. Two column: left = copy, right = visual mock paper preview stack.

```
┌─────────────────────────────────────────────────────────────┐
│  [Light blue bg]                                            │
│                                                             │
│  Left Column:                                               │
│  🩺  FREE for ReNEET Aspirants                             │
│  "5 NEET Mock Test Papers                                  │
│   by MIITJEE Faculty — Absolutely Free"                   │
│                                                             │
│  ✅ 180 questions per paper                                 │
│  ✅ NTA 2024 pattern                                        │
│  ✅ Answer key + solutions included                         │
│  ✅ Instant PDF download                                    │
│                                                             │
│  [Download Free Papers →]  (primary blue CTA)              │
│                                                             │
│  Right Column:                                              │
│  [Stacked mock paper PDF thumbnails — visual, decorative]  │
│  [Paper 1] [Paper 2] [Paper 3] with slight overlap         │
└─────────────────────────────────────────────────────────────┘
```

### Section 11: MANTHAN Teaser (mini-section)

```
┌───────────────────────────────────────────────────────────┐
│  [Navy background]                                        │
│                                                           │
│  🏆  MIITJEE MANTHAN — Coming Soon                       │
│  Win up to 100% Scholarship. Launching soon.             │
│  Class 7–12. Free. Instant result.                       │
│                                                           │
│  [Register Interest →]   links to /scholarship           │
└───────────────────────────────────────────────────────────┘
```

---

## 7. DATABASE SCHEMA (LEAN)

### Tables Required for Phase 1

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─────────────────────────────────────────
-- BRANCHES
-- ─────────────────────────────────────────
CREATE TABLE branches (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL,
  slug        TEXT UNIQUE NOT NULL,
  address     TEXT NOT NULL,
  city        TEXT NOT NULL,
  phone       TEXT[],
  whatsapp    TEXT,
  email       TEXT,
  maps_url    TEXT,
  is_active   BOOLEAN DEFAULT TRUE,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────
-- ADMISSION LEADS (main enquiry form)
-- ─────────────────────────────────────────
CREATE TABLE leads (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          TEXT NOT NULL,
  phone         TEXT NOT NULL,
  email         TEXT,
  class_level   TEXT,
  programme     TEXT,              -- 'jee', 'neet', 'foundation', 'unsure'
  branch_pref   TEXT,
  source        TEXT DEFAULT 'homepage',
  message       TEXT,
  status        TEXT DEFAULT 'new',  -- 'new', 'contacted', 'admitted', 'lost'
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────
-- NEET TEST SERIES LEADS (PDF gate)
-- ─────────────────────────────────────────
CREATE TABLE test_series_leads (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          TEXT NOT NULL,
  phone         TEXT NOT NULL,
  email         TEXT,
  class_level   TEXT NOT NULL,     -- 'Class 11', 'Class 12', 'Dropper (ReNEET)'
  target_year   TEXT,              -- '2025', '2026'
  city          TEXT,
  branch_pref   TEXT,
  series_type   TEXT DEFAULT 'neet',
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────
-- MANTHAN INTEREST (coming soon signups)
-- ─────────────────────────────────────────
CREATE TABLE manthan_interest (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          TEXT NOT NULL,
  phone         TEXT NOT NULL,
  class_level   TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────
-- RESULTS
-- ─────────────────────────────────────────
CREATE TABLE results (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name  TEXT NOT NULL,
  photo_url     TEXT,
  exam          TEXT NOT NULL,     -- 'JEE Advanced', 'NEET', 'JEE Main', 'NTSE'
  year          INTEGER NOT NULL,
  rank_score    TEXT,              -- 'AIR 147' or '99.4%ile' or '680/720'
  institute     TEXT,
  programme     TEXT NOT NULL,     -- 'jee', 'neet', 'foundation'
  branch_name   TEXT,
  is_featured   BOOLEAN DEFAULT FALSE,
  is_published  BOOLEAN DEFAULT TRUE,
  sort_order    INTEGER DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────
-- FACULTY
-- ─────────────────────────────────────────
CREATE TABLE faculty (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name            TEXT NOT NULL,
  designation     TEXT,
  subject         TEXT,
  qualification   TEXT,
  credential      TEXT,           -- 'IIT Kharagpur'
  experience_yrs  INTEGER,
  bio             TEXT,
  photo_url       TEXT,
  sort_order      INTEGER DEFAULT 0,
  is_published    BOOLEAN DEFAULT TRUE,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────
-- TESTIMONIALS
-- ─────────────────────────────────────────
CREATE TABLE testimonials (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name  TEXT NOT NULL,
  photo_url     TEXT,
  quote         TEXT NOT NULL,
  programme     TEXT,
  year          INTEGER,
  branch_name   TEXT,
  rating        INTEGER DEFAULT 5,
  type          TEXT DEFAULT 'student',  -- 'student', 'parent'
  is_published  BOOLEAN DEFAULT TRUE,
  sort_order    INTEGER DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────
-- GALLERY
-- ─────────────────────────────────────────
CREATE TABLE gallery (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title         TEXT NOT NULL,
  photo_url     TEXT NOT NULL,
  category      TEXT,            -- 'classroom', 'events', 'results', 'campus'
  is_published  BOOLEAN DEFAULT TRUE,
  sort_order    INTEGER DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────
-- SITE SETTINGS (key-value store)
-- ─────────────────────────────────────────
CREATE TABLE site_settings (
  key           TEXT PRIMARY KEY,
  value         TEXT,
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Seed: MANTHAN launch date
INSERT INTO site_settings (key, value)
VALUES ('manthan_launch_date', '2025-09-01T00:00:00Z');

-- ─────────────────────────────────────────
-- INDEXES
-- ─────────────────────────────────────────
CREATE INDEX idx_leads_status     ON leads(status);
CREATE INDEX idx_leads_created    ON leads(created_at DESC);
CREATE INDEX idx_ts_leads_created ON test_series_leads(created_at DESC);
CREATE INDEX idx_results_year     ON results(year DESC);
CREATE INDEX idx_results_prog     ON results(programme);

-- ─────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ─────────────────────────────────────────
ALTER TABLE leads               ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_series_leads   ENABLE ROW LEVEL SECURITY;
ALTER TABLE manthan_interest    ENABLE ROW LEVEL SECURITY;

-- Public can INSERT (form submissions)
CREATE POLICY "Public insert leads"
  ON leads FOR INSERT WITH CHECK (TRUE);

CREATE POLICY "Public insert ts_leads"
  ON test_series_leads FOR INSERT WITH CHECK (TRUE);

CREATE POLICY "Public insert manthan_interest"
  ON manthan_interest FOR INSERT WITH CHECK (TRUE);

-- Only authenticated admins can SELECT / UPDATE / DELETE leads
CREATE POLICY "Admin read leads"
  ON leads FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admin read ts_leads"
  ON test_series_leads FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admin read manthan_interest"
  ON manthan_interest FOR SELECT USING (auth.role() = 'authenticated');

-- Public can read published content
CREATE POLICY "Public read results"
  ON results FOR SELECT USING (is_published = TRUE);

CREATE POLICY "Public read faculty"
  ON faculty FOR SELECT USING (is_published = TRUE);

CREATE POLICY "Public read testimonials"
  ON testimonials FOR SELECT USING (is_published = TRUE);

CREATE POLICY "Public read gallery"
  ON gallery FOR SELECT USING (is_published = TRUE);

CREATE POLICY "Public read branches"
  ON branches FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Public read settings"
  ON site_settings FOR SELECT USING (TRUE);
```

### Supabase Storage Buckets

```
neet-mock-papers/       → Public read. Upload 5 PDF files here.
                          neet-mock-paper-1.pdf
                          neet-mock-paper-2.pdf
                          neet-mock-paper-3.pdf
                          neet-mock-paper-4.pdf
                          neet-mock-paper-5.pdf

miitjee-results/        → Public read. Student result photos.
miitjee-gallery/        → Public read. Gallery images.
miitjee-faculty/        → Public read. Faculty profile photos.
```

**To get a public URL:**
```
https://[your-project-ref].supabase.co/storage/v1/object/public/neet-mock-papers/neet-mock-paper-1.pdf
```

---

## 8. ADMIN PANEL (LEAN)

### Authentication

- Supabase Auth (email + password)
- One admin user for MVP
- Next.js middleware protects all `/admin/*` routes
- Redirect to `/admin/login` if not authenticated

### Admin Pages

#### `/admin` — Dashboard

**Stats cards (4 across):**
- Total Admission Leads · Today's Leads
- Total NEET Test Series Downloads · Today's
- Total MANTHAN Interest Registrations
- Published Results Count

**Recent activity table** (last 10 leads across all types)

---

#### `/admin/leads` — Admission Leads

**Table columns:**
`Name · Phone · Class · Programme · Branch · Source · Date · Status · Actions`

**Actions:**
- Click phone → tel: link
- Click WhatsApp → wa.me link
- Update status: New → Contacted → Admitted / Lost
- Delete

**Filters:** Programme · Branch · Status · Date range
**Search:** Name / Phone
**Export:** Download CSV button

---

#### `/admin/test-series-leads` — NEET Test Series

**Table columns:**
`Name · Phone · Email · Class · Target Year · City · Branch Pref · Date`

**No status column** — these are pure download leads, no pipeline.

**Filters:** Class · City · Date range
**Search:** Name / Phone
**Export:** Download CSV

**Top stat:** "Total downloads: [count]"

---

#### `/admin/manthan-interest` — MANTHAN Registrations

**Table columns:**
`Name · Phone · Class · Date`

**Top stat:** "Interested students: [count]"

**Export CSV** (for bulk SMS/WhatsApp campaign when MANTHAN launches)

---

#### `/admin/results` — Results Manager

CRUD for result cards:
- Add: student name, rank/score, exam, year, programme, branch, photo upload, featured toggle
- Edit / Delete
- Toggle published
- Preview card

---

#### `/admin/faculty` — Faculty Manager

CRUD for faculty profiles:
- Add: name, designation, subject, qualification, credential, photo, sort order
- Edit / Delete / Toggle published

---

#### `/admin/gallery` — Gallery Manager

- Bulk photo upload (drag-and-drop)
- Category tag
- Sort order drag handle
- Toggle published

---

#### `/admin/testimonials` — Testimonials Manager

CRUD for testimonials:
- Add: name, quote, programme, year, branch, rating, student/parent type, photo
- Edit / Delete / Toggle published

---

#### `/admin/settings` — Site Settings

- **MANTHAN Launch Date** — date-time picker → updates `site_settings` table
- **Announcement Bar Text** — optional top-of-site announcement
- **Contact Numbers** — phone numbers for navbar CTA

---

## 9. NEXT.JS FOLDER STRUCTURE

```
src/
├── app/
│   ├── layout.tsx                   ← Root layout (fonts, analytics)
│   ├── page.tsx                     ← Homepage
│   │
│   ├── about/page.tsx
│   ├── programs/
│   │   ├── page.tsx
│   │   ├── jee/page.tsx
│   │   ├── neet/page.tsx
│   │   └── foundation/page.tsx
│   │
│   ├── test-series/                 ← NEW
│   │   ├── page.tsx                 ← Test Series hub
│   │   └── neet/
│   │       ├── page.tsx             ← Marketing landing
│   │       ├── register/page.tsx    ← Student details form
│   │       └── download/page.tsx    ← PDF download page
│   │
│   ├── scholarship/page.tsx         ← MANTHAN coming soon
│   │
│   ├── results/
│   │   ├── page.tsx
│   │   ├── jee/page.tsx
│   │   └── neet/page.tsx
│   │
│   ├── faculty/page.tsx
│   ├── gallery/page.tsx
│   ├── branches/page.tsx
│   ├── testimonials/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── apply/page.tsx
│   │
│   ├── admin/
│   │   ├── layout.tsx               ← Auth check wrapper
│   │   ├── login/page.tsx
│   │   ├── page.tsx                 ← Dashboard
│   │   ├── leads/page.tsx
│   │   ├── test-series-leads/page.tsx
│   │   ├── manthan-interest/page.tsx
│   │   ├── results/page.tsx
│   │   ├── faculty/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── testimonials/page.tsx
│   │   └── settings/page.tsx
│   │
│   └── api/
│       ├── leads/route.ts           ← POST: admission lead
│       ├── test-series/
│       │   └── register/route.ts    ← POST: NEET test series registration
│       └── manthan/
│           └── interest/route.ts    ← POST: MANTHAN interest
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx               ← With Test Series dropdown
│   │   ├── Footer.tsx
│   │   └── WhatsAppFAB.tsx
│   │
│   ├── home/
│   │   ├── HeroSection.tsx          ← Updated CTAs
│   │   ├── ResultsShowcase.tsx
│   │   ├── TestSeriesCTA.tsx        ← NEW: homepage NEET section
│   │   ├── ProgramsOverview.tsx
│   │   ├── WhyMiitjee.tsx
│   │   ├── FacultyShowcase.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── BranchesSection.tsx
│   │   ├── ManthanTeaser.tsx        ← Coming soon mini-section
│   │   ├── FAQSection.tsx
│   │   └── AdmissionForm.tsx
│   │
│   ├── test-series/
│   │   ├── MockPaperCard.tsx        ← Paper preview card
│   │   ├── RegisterForm.tsx         ← Student details form
│   │   └── DownloadCard.tsx         ← Individual PDF download card
│   │
│   ├── scholarship/
│   │   ├── CountdownTimer.tsx       ← Reads manthan_launch_date from DB
│   │   └── InterestForm.tsx         ← Coming soon interest registration
│   │
│   ├── admin/
│   │   ├── Sidebar.tsx
│   │   ├── DataTable.tsx            ← Generic reusable table
│   │   ├── StatCard.tsx
│   │   └── ExportCSVButton.tsx
│   │
│   └── ui/                          ← Shadcn UI components
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts                ← Browser Supabase client
│   │   └── server.ts                ← Server Supabase client
│   ├── validators/
│   │   ├── lead.ts                  ← Zod: admission lead schema
│   │   ├── test-series.ts           ← Zod: NEET test series form
│   │   └── manthan.ts               ← Zod: MANTHAN interest form
│   └── constants/
│       ├── mock-papers.ts           ← PDF URLs array
│       └── branches.ts
│
├── middleware.ts                    ← Protects /admin/* routes
└── types/
    └── database.types.ts            ← Supabase generated types
```

### Key Server Actions

```typescript
// lib/constants/mock-papers.ts
// These are the Supabase Storage public URLs for the 5 PDFs
export const NEET_MOCK_PAPERS = [
  {
    id: 1,
    title: 'NEET Mock Paper 1 — Full Syllabus',
    description: '180 Q · Physics 45 · Chemistry 45 · Biology 90',
    url: 'https://[ref].supabase.co/storage/v1/object/public/neet-mock-papers/neet-mock-paper-1.pdf',
    filename: 'MIITJEE_NEET_Mock_Paper_1.pdf',
  },
  // ... papers 2–5
]

// app/api/test-series/register/route.ts
export async function POST(req: Request) {
  const body = await req.json()
  const validated = testSeriesSchema.parse(body)
  const supabase = createServerClient()
  const { error } = await supabase
    .from('test_series_leads')
    .insert(validated)
  if (error) return NextResponse.json({ error: 'Failed' }, { status: 500 })
  return NextResponse.json({ success: true })
}

// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()
  if (req.nextUrl.pathname.startsWith('/admin') &&
      !req.nextUrl.pathname.startsWith('/admin/login') &&
      !session) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }
  return res
}

export const config = {
  matcher: ['/admin/:path*'],
}
```

---

## 10. DEVELOPMENT ROADMAP

### Phase 1 — MVP (Weeks 1–6)

**Week 1: Setup**
- Init Next.js 15 + TypeScript project
- Configure Tailwind CSS + Shadcn UI
- Set up Supabase project + run SQL schema
- Set up Vercel deployment (GitHub auto-deploy)
- Upload 5 NEET Mock PDFs to Supabase Storage

**Week 2: Public Site Core**
- Navbar with Test Series dropdown
- Footer
- Homepage (all sections including TestSeriesCTA + ManthanTeaser)
- WhatsApp FAB
- Mobile responsive

**Week 3: Key Pages**
- `/test-series/neet` — marketing landing
- `/test-series/neet/register` — form page
- `/test-series/neet/download` — PDF download page
- `/scholarship` — MANTHAN coming soon + countdown + interest form

**Week 4: Other Public Pages**
- Programme pages (JEE, NEET, Foundation)
- Results pages
- Faculty page
- Gallery
- Branches
- FAQ
- Apply Now / Contact

**Week 5: Admin Panel**
- Admin login page
- Dashboard with stats
- Leads table (`/admin/leads`)
- Test Series leads table (`/admin/test-series-leads`)
- MANTHAN interest table (`/admin/manthan-interest`)
- CSV export for each

**Week 6: Admin Continued + QA**
- Results CRUD
- Faculty CRUD
- Gallery upload
- Testimonials CRUD
- Settings page (MANTHAN launch date)
- Cross-browser + mobile QA
- SEO metadata (title, description, OG tags)
- DNS migration + 301 redirects from .aspx URLs

**Deliverable:** Full site live on miitjee.org

---

### Phase 2 — Growth (Weeks 7–10, post-launch)

- MANTHAN full online test (registration → test → result — now that coming soon has warmed audience)
- Blog module (3 SEO articles)
- JEE Test Series (same PDF flow as NEET)
- Individual branch pages with Google Maps
- Email notifications on lead submit (Brevo free tier)
- Google Review collection campaign

---

### 301 Redirect Map (Old .aspx → New URLs)

```
/index.aspx          →  /
/about.aspx          →  /about
/courses.aspx        →  /programs
/neet.aspx           →  /programs/neet
/jeeadvance.aspx     →  /results/jee
/Scholarship.aspx    →  /scholarship
/gallery.aspx        →  /gallery
/contact.aspx        →  /contact
```

Add in `next.config.ts`:

```typescript
const nextConfig = {
  async redirects() {
    return [
      { source: '/index.aspx',      destination: '/',             permanent: true },
      { source: '/about.aspx',      destination: '/about',         permanent: true },
      { source: '/courses.aspx',    destination: '/programs',      permanent: true },
      { source: '/neet.aspx',       destination: '/programs/neet', permanent: true },
      { source: '/jeeadvance.aspx', destination: '/results/jee',   permanent: true },
      { source: '/Scholarship.aspx',destination: '/scholarship',   permanent: true },
      { source: '/gallery.aspx',    destination: '/gallery',       permanent: true },
      { source: '/contact.aspx',    destination: '/contact',       permanent: true },
    ]
  },
}
export default nextConfig
```

---

## 11. INFRASTRUCTURE & COSTS

### Monthly Cost Breakdown (Phase 1)

| Service                | Plan                        | Monthly Cost    |
|------------------------|-----------------------------|-----------------|
| Vercel                 | Hobby (Free)                | ₹0              |
| Supabase               | Free tier                   | ₹0              |
| Domain (miitjee.org)   | Existing / GoDaddy          | ₹0 (pre-paid)   |
| Brevo (Email)          | Free (300 emails/day)       | ₹0              |
| Google Analytics 4     | Free                        | ₹0              |
| **Total Phase 1**      |                             | **₹0/month**    |

### When to Upgrade

| Trigger                              | Upgrade To                   | Approx. Cost    |
|--------------------------------------|------------------------------|-----------------|
| >500MB Supabase DB                   | Supabase Pro                 | $25/mo (~₹2,100)|
| >100GB Vercel bandwidth/month        | Vercel Pro                   | $20/mo (~₹1,680)|
| >300 emails/day                      | Brevo Starter                | $9/mo (~₹750)   |
| Need SMS/WhatsApp notifications      | MSG91                        | ₹500–2,000/mo   |

**Realistic timeline to upgrade:** After 6–12 months of growth. Phase 1 is entirely free.

---

*End of MIITJEE Website Redesign Architecture v2.0*
*Updated: June 2025 | Next revision after MANTHAN launch (Phase 2)*
