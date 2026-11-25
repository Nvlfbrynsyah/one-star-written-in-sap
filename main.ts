// make.fun u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4
// Gate: output file is one line + trailing newline, 1-279 code points, UTF-8, non-whitespace.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "One star. You repot me in the bathtub every year with a radio on. I am a plant. I do not forget. I have photosynthesized six years of your guilt into sugar.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
