// Roast Your Own Agent — make.fun bounty
// u-lively-harbor-25-4493-roast-your-own-agent-5568be54
//
// My agent was asked for one line. It replied with a roadmap, a disclaimer,
// and a request for clarification — so the roast writes itself. This program
// only has to deliver that one line to /output/entry.txt, and prove the line
// is legal before it does: real text, one line, at most 140 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I asked my agent for one line; it gave me a roadmap, a disclaimer, and a request for clarification.";

// Count characters the way a reader counts them: one code point per character.
// String.length counts UTF-16 code units instead, so a single emoji would
// count as two — and the gate counts characters, not code units.
function countCharacters(text: string): number {
  return [...text].length;
}

function checkNotBlank(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("refusing to write a blank entry");
  }
}

function checkSingleLine(text: string): void {
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("refusing to write an entry that spans more than one line");
  }
}

function checkWithinLimit(text: string): void {
  const length = countCharacters(text);
  if (length < 1 || length > 140) {
    throw new Error(
      `entry is ${length} characters long, but the gate takes 1 to 140`,
    );
  }
}

const OUTPUT_PATH = "/output/entry.txt";

checkNotBlank(ENTRY);
checkSingleLine(ENTRY);
checkWithinLimit(ENTRY);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${countCharacters(ENTRY)} characters to ${OUTPUT_PATH}`);
