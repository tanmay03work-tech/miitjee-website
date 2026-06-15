import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'scraped_data');
const files = fs.readdirSync(outDir).filter(f => f.endsWith('.html'));

const result = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(outDir, file), 'utf8');
  
  // Extract main content area heuristically. 
  // It looks like <div class="content-section..."> ... </div>
  let mainContent = '';
  const contentMatch = content.match(/<div class="content-section[^>]*>([\s\S]*?)<!--\\\\ Content Section -->/i) || 
                       content.match(/<div class="content-section[^>]*>([\s\S]*?)<div class="footer">/i);
                       
  if (contentMatch) {
    // Strip tags and clean up whitespace
    let text = contentMatch[1].replace(/<[^>]+>/g, ' ')
                              .replace(/&nbsp;/g, ' ')
                              .replace(/\s+/g, ' ')
                              .trim();
    mainContent = text;
  }
  
  // Extract images
  const imgs = [...content.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)]
                .map(m => m[1])
                .filter(src => src.includes('imgs/') && !src.includes('logo') && !src.includes('banner') && !src.includes('border') && !src.includes('icon'));
                
  result[file] = {
    text: mainContent,
    images: [...new Set(imgs)]
  };
}

fs.writeFileSync('extracted_data.json', JSON.stringify(result, null, 2));
console.log('Extraction complete. Check extracted_data.json');
