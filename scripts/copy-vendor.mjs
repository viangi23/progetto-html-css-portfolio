// Copia Bootstrap (solo il CSS) in css/vendor/ così il sito funziona anche su GitHub Pages senza CDN né npm.
import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('css/vendor', { recursive: true });
copyFileSync('node_modules/bootstrap/dist/css/bootstrap.min.css', 'css/vendor/bootstrap.min.css');
console.log('Bootstrap copiato in css/vendor/');
