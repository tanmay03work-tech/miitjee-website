const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ASSETS_DIR = 'e:/MIITJEE_WEBSITE/ASSETS';
const PUBLIC_RESULTS_DIR = 'e:/MIITJEE_WEBSITE/public/assets/results';
const MIGRATION_FILE = 'e:/MIITJEE_WEBSITE/supabase/migrations/004_result_images.sql';

const categories = {
  'results snapshot 2026': 'snapshots_2026',
  'newspaper headline': 'newspaper_headlines',
  'jee': 'jee',
  'NEET': 'neet',
  '12th boards': 'boards'
};

// Create output dirs
if (!fs.existsSync(PUBLIC_RESULTS_DIR)) {
  fs.mkdirSync(PUBLIC_RESULTS_DIR, { recursive: true });
}

let sql = `-- Create result_images table
CREATE TABLE result_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  photo_url TEXT NOT NULL,
  category TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE result_images ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public read result_images"
  ON result_images FOR SELECT USING (is_published = TRUE);

CREATE POLICY "Admin read result_images"
  ON result_images FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admin manage result_images"
  ON result_images FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Insert seed data
`;

for (const [sourceDir, category] of Object.entries(categories)) {
  const sourcePath = path.join(ASSETS_DIR, sourceDir);
  const targetPath = path.join(PUBLIC_RESULTS_DIR, category);
  
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  if (fs.existsSync(sourcePath)) {
    const files = fs.readdirSync(sourcePath);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) continue;

      const sourceFilePath = path.join(sourcePath, file);
      // Clean filename to avoid spaces and special chars
      const cleanFileName = file.replace(/[^a-zA-Z0-9.-]/g, '_');
      const targetFilePath = path.join(targetPath, cleanFileName);
      
      fs.copyFileSync(sourceFilePath, targetFilePath);
      
      const photoUrl = `/assets/results/${category}/${cleanFileName}`;
      const title = file.replace(ext, '').replace(/[^a-zA-Z0-9.-]/g, ' ').trim();
      
      sql += `INSERT INTO result_images (title, photo_url, category, sort_order) VALUES ('${title.replace(/'/g, "''")}', '${photoUrl}', '${category}', ${i});\n`;
    }
  } else {
    console.warn(`Source dir not found: ${sourcePath}`);
  }
}

fs.writeFileSync(MIGRATION_FILE, sql);
console.log('Migration generated and images copied successfully.');
