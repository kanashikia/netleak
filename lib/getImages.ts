// utils/getImages.js
import fs from 'fs';
import path from 'path';

export function getImages() {
  const imagesDir = path.join(process.cwd(), 'public/images/profil');
  const filenames = fs.readdirSync(imagesDir);
  return filenames.map((name) => `/images/profil/${name}`);
}
