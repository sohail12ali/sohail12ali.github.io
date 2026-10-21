// Fails if any employer or client name leaks into the built site.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BANNED = /\b([redacted]|[redacted]|[redacted]|[redacted]|[redacted]|[redacted]|[redacted]|[redacted]|[redacted]|[redacted])\b/i;
const SKIP = /\.(pdf|png|jpe?g|webp|woff2?|ico)$/i;

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const hits = [];
for (const file of walk('dist')) {
  if (SKIP.test(file)) continue;
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    const m = line.match(BANNED);
    if (m) hits.push(`${file}:${i + 1}  "${m[0]}"`);
  });
}

if (hits.length) {
  console.error(`Name audit failed (${hits.length}):\n` + hits.join('\n'));
  process.exit(1);
}
console.log('Name audit passed: no employer or client names in dist/.');
