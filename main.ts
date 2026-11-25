// Famous Last Words: The Funniest Epitaph — a single line carved for the stone.
// The joke is the dead man's own boast coming back to haunt him: he swore
// he would sleep only when he was dead, and the headstone now proves him right.
const EPITAPH =
  "Here lies Tom. He always said he'd sleep when he was dead. He was right.";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, EPITAPH);
console.log(`Wrote ${EPITAPH.length} chars to ${outDir}/entry.txt`);
