import { mkdirSync, writeFileSync } from "node:fs";

// One-liner: the vacuum blames the sock — it attacked first.
const entry =
  "The sock attacked first — I was just defending the carpet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
