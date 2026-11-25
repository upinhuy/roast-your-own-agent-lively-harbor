// Roast Your Own Agent — make.fun bounty
// u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// Writes the single-line roast to /output/entry.txt (1-140 characters, plain text).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I asked my agent for one line; it gave me a roadmap, a disclaimer, and a request for clarification.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
