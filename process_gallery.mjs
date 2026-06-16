import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const SOURCE_DIR = 'E:\\MIITJEE_WEBSITE\\ASSETS\\Gallery';
const HIGHLIGHTS_DIR = path.join(SOURCE_DIR, 'admission open highlights');
const PUBLIC_DIR = path.join(process.cwd(), 'public', 'assets', 'gallery');
const PUBLIC_STORYLINE_DIR = path.join(PUBLIC_DIR, 'storyline');
const PUBLIC_HIGHLIGHTS_DIR = path.join(PUBLIC_DIR, 'highlights');

// Create directories if they don't exist
[PUBLIC_STORYLINE_DIR, PUBLIC_HIGHLIGHTS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function main() {
  console.log('Starting gallery processing...');
  
  // Clear existing gallery items
  const { error: deleteError } = await supabase.from('gallery').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (deleteError) {
    console.error('Error clearing gallery:', deleteError);
  } else {
    console.log('Cleared existing gallery entries.');
  }

  const newItems = [];

  // 1. Process storyline images (root of Gallery folder)
  const rootFiles = fs.readdirSync(SOURCE_DIR);
  let sortOrder = 1;
  for (const file of rootFiles) {
    const filePath = path.join(SOURCE_DIR, file);
    if (fs.statSync(filePath).isFile()) {
      // It's an image
      const ext = path.extname(file);
      const safeName = file.replace(/[^a-zA-Z0-9.-]/g, '_');
      const destPath = path.join(PUBLIC_STORYLINE_DIR, safeName);
      
      fs.copyFileSync(filePath, destPath);
      
      newItems.push({
        title: path.basename(file, ext),
        photo_url: `/assets/gallery/storyline/${safeName}`,
        category: 'Storyline',
        sort_order: sortOrder++
      });
    }
  }

  // 2. Process highlights images
  if (fs.existsSync(HIGHLIGHTS_DIR)) {
    const highlightsFiles = fs.readdirSync(HIGHLIGHTS_DIR);
    sortOrder = 1; // Reset for highlights if needed, or keep increasing
    for (const file of highlightsFiles) {
      const filePath = path.join(HIGHLIGHTS_DIR, file);
      if (fs.statSync(filePath).isFile()) {
        const ext = path.extname(file);
        const safeName = file.replace(/[^a-zA-Z0-9.-]/g, '_');
        const destPath = path.join(PUBLIC_HIGHLIGHTS_DIR, safeName);
        
        fs.copyFileSync(filePath, destPath);
        
        newItems.push({
          title: path.basename(file, ext),
          photo_url: `/assets/gallery/highlights/${safeName}`,
          category: 'Admission Open Highlights',
          sort_order: sortOrder++
        });
      }
    }
  }

  console.log(`Inserting ${newItems.length} new items into gallery...`);
  const { error: insertError } = await supabase.from('gallery').insert(newItems);
  
  if (insertError) {
    console.error('Error inserting gallery items:', insertError);
  } else {
    console.log('Successfully processed and inserted all gallery items.');
  }
}

main().catch(console.error);
