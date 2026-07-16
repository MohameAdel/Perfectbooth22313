const fs = require('fs');
const html = fs.readFileSync('scratch/vav.html', 'utf8');
const regex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
let styles = '';
let match;
while ((match = regex.exec(html)) !== null) {
  styles += match[1] + '\n\n';
}
fs.writeFileSync('scratch/vav_styles.css', styles);
console.log('Extracted ' + styles.length + ' bytes of CSS');
