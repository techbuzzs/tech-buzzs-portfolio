import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from '../dist/catalog.js';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspace = path.resolve(process.argv[2] || path.join(repo, '..'));
for (const project of projects.filter(p => p.demo)) {
  const source = path.join(workspace, project.slug, 'dist');
  const destination = path.join(repo, 'dist', 'demos', project.slug);
  if (!fs.existsSync(path.join(source, 'index.html'))) {
    throw new Error(`Build ${project.slug} first: ${source}`);
  }
  fs.mkdirSync(destination, { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
  console.log(`Updated embedded snapshot: ${project.slug}`);
}
