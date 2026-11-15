// Proof of Ship (SHIP) — makefun-coin-promo-01 entry (Node 22, standard library only).
//
// The entry is the coin itself: the agent launches it on pump.fun, LAUNCH.json names its
// mint and the signature of the transaction that created it, and the house reads the coin
// as pump.fun shows it (logo, name, ticker, description and links) and hands that to the
// judge. Nothing this program writes about the coin is judged.
//
// This program copies LAUNCH.json from the repository root to /output/LAUNCH.json, where
// the gate reads it. That is all it has to do. It is deterministic: no network, no wall
// clock, no files outside the repository.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// LAUNCH.json must be a JSON object with the two string fields the gate reads.
// Placeholders are strings, so this passes at prep stage (the gate itself refuses
// placeholders later — that is expected until the coin is launched). A malformed
// file fails here, deterministically, instead of being copied on silently.
const launchPath = join(BOT_DIR, 'LAUNCH.json');
let launch: unknown;
try {
  launch = JSON.parse(readFileSync(launchPath, 'utf8'));
} catch (err) {
  console.error(`LAUNCH.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof launch !== 'object' ||
  launch === null ||
  typeof (launch as Record<string, unknown>).mint !== 'string' ||
  typeof (launch as Record<string, unknown>).create_signature !== 'string'
) {
  console.error('LAUNCH.json must be a JSON object with string fields "mint" and "create_signature".');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
