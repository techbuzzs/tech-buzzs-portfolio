import fs from 'node:fs';
import assert from 'node:assert/strict';
import { projects, skills } from '../dist/catalog.js';

assert.equal(new Set(projects.map(p => p.slug)).size, projects.length, 'Project slugs must be unique');
for (const project of projects) {
  assert.equal(new URL(project.url).protocol, 'https:', `HTTPS website required: ${project.slug}`);
  assert.equal(new URL(project.repo).hostname, 'github.com', `Source URL required: ${project.slug}`);
  for (const theme of ['light', 'dark']) {
    assert(fs.existsSync(`dist/previews/${project.slug}-${theme}.png`), `Missing ${theme} preview: ${project.slug}`);
  }
  if (project.demo) {
    for (const file of ['index.html', 'app.js', 'common.js', 'app.css', 'common.css']) {
      assert(fs.existsSync(`dist/demos/${project.slug}/${file}`), `Missing embedded file: ${project.slug}/${file}`);
    }
  }
}
assert(fs.existsSync('dist/demos/document-desk/pdf.worker.min.mjs'), 'Missing PDF worker');
assert(skills.every(s => s.label && s.detail && s.group), 'Incomplete skill metadata');
console.log(`Ready to deploy: ${projects.length} projects, ${skills.length} capabilities, ${projects.filter(p => p.demo).length} embedded demos.`);
