import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const dummyImages = [
    { title: 'Classroom Session', photo_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&q=80', category: 'classroom', sort_order: 1 },
    { title: 'Annual Function', photo_url: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80', category: 'events', sort_order: 2 },
    { title: 'Felicitation Ceremony', photo_url: 'https://images.unsplash.com/photo-1523580494112-071d311fa8f4?w=500&q=80', category: 'results', sort_order: 3 },
    { title: 'Campus Tour', photo_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80', category: 'campus', sort_order: 4 },
    { title: 'Doubt Clearing', photo_url: 'https://images.unsplash.com/photo-1427504494785-319ce5154b51?w=500&q=80', category: 'classroom', sort_order: 5 },
    { title: 'Student Life', photo_url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=80', category: 'campus', sort_order: 6 },
  ];

  const { error } = await supabase.from('gallery').insert(dummyImages);
  
  if (error) {
    console.error('Error inserting seed data:', error);
  } else {
    console.log('Successfully seeded gallery table.');
  }
}

main();
