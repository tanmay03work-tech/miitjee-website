-- ─────────────────────────────────────────
-- FEATURED REELS (Instagram reels for homepage)
-- ─────────────────────────────────────────
CREATE TABLE featured_reels (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url           TEXT NOT NULL,
  is_published  BOOLEAN DEFAULT TRUE,
  sort_order    INTEGER DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ─────────────────────────────────────────
ALTER TABLE featured_reels ENABLE ROW LEVEL SECURITY;

-- Public can read published reels
CREATE POLICY "Public read featured_reels"
  ON featured_reels FOR SELECT USING (is_published = TRUE);

-- Only authenticated admins can manage reels
CREATE POLICY "Admin manage featured_reels"
  ON featured_reels FOR ALL USING (auth.role() = 'authenticated');
