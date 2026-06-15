import fs from 'fs';
import path from 'path';

// Using simple regex or fetch to just grab the raw HTML and write it out, 
// or I can just use fetch and simple parsing.
const urls = [
  'http://www.miitjee.org/Franchise.aspx',
  'http://www.miitjee.org/methodology_concept.aspx',
  'http://www.miitjee.org/SucessStory.aspx',
  'http://www.miitjee.org/OtherCentre.aspx',
  'http://www.miitjee.org/Our-Courses.aspx',
  'http://www.miitjee.org/Scholarship.aspx',
  'http://www.miitjee.org/12board.aspx',
  'http://www.miitjee.org/jeeadvance.aspx',
  'http://www.miitjee.org/neet.aspx',
  'http://www.miitjee.org/OurTeam.aspx'
];

async function fetchAndSave() {
  const outDir = path.join(process.cwd(), 'scraped_data');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  for (const url of urls) {
    console.log(`Fetching ${url}...`);
    try {
      const res = await fetch(url);
      const html = await res.text();
      const filename = url.split('/').pop() + '.html';
      fs.writeFileSync(path.join(outDir, filename), html);
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Failed to fetch ${url}`, e);
    }
  }
}

fetchAndSave();
