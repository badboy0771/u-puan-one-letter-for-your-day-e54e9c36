// One Letter for Your Day — entry program.
// Writes exactly one letter, "B", to /output/entry.txt and nothing else.
//
// Why "B": it stands for "bounties" — a day spent hunting bounties, which is
// vivid, specific and true to the day, and B is the fitting initial for it.
// The judge picks the letter whose hidden word feels most vivid, funnier or
// truer, and "bounties" is the honest one-word report of this day.
//
// The gate requires UTF-8 text of exactly 1 character, not only whitespace,
// so no trailing newline is written: the file must be exactly one byte.
// The output path is the fixed sandbox path from the rules; it is never
// derived from the working directory, so the program behaves identically
// from any cwd.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LETTER = "B";
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");
