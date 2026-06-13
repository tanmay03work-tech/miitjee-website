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
