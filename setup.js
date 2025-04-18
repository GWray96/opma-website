const fs = require('fs');
const path = require('path');

const directories = [
  'src/app/home/components',
  'src/app/services/components',
  'src/app/pricing/components',
  'src/app/about/components',
  'src/app/case-studies/components',
  'src/app/resources/components',
  'src/app/contact/components',
  'public/images'
];

directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}); 