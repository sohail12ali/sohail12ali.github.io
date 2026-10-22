// Fails if any banned name (employers, clients, identifying brands, ticket ids)
// leaks into the built site.
//
// The list itself is private, so it never lives in this public repo:
//   - CI reads it from the AUDIT_BANNED environment variable (a GitHub Actions secret).
//   - Locally it is read from .audit-names.local (gitignored).
// Format: one case-insensitive regex per line; blank lines and lines starting with # are ignored.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const LOCAL_LIST = '.audit-names.local';

function loadPatterns() {
  const source = process.env.AUDIT_BANNED?.trim()
    ? process.env.AUDIT_BANNED
    : existsSync(LOCAL_LIST) ? readFileSync(LOCAL_LIST, 'utf8') : '';
  return source
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
}

const patterns = loadPatterns();
if (!patterns.length) {
  // No list means no protection; fail loudly rather than pass silently.
  console.error(`Name audit has no banned list. Set AUDIT_BANNED or create ${LOCAL_LIST}.`);
  process.exit(1);
}

const BANNED = new RegExp(patterns.map((p) => `(?:${p})`).join('|'), 'i');
const SKIP = /\.(pdf|png|jpe?g|webp|woff2?|ico)$/i;

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

// Report locations only, never the matched text: CI logs are public on this repo.
const hits = [];
for (const file of walk('dist')) {
  if (SKIP.test(file)) continue;
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (BANNED.test(line)) hits.push(`${file}:${i + 1}`);
  });
}

if (hits.length) {
  console.error(`Name audit failed (${hits.length} line(s) contain a banned name):\n` + hits.join('\n'));
  process.exit(1);
}
console.log(`Name audit passed: ${patterns.length} pattern(s), no banned names in dist/.`);
