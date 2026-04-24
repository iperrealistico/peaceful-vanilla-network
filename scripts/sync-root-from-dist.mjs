import { cp, copyFile } from "node:fs/promises";

const distIndex = new URL("../dist/index.html", import.meta.url);
const rootIndex = new URL("../index.html", import.meta.url);
const distAssets = new URL("../dist/assets", import.meta.url);
const rootAssets = new URL("../assets", import.meta.url);

await copyFile(distIndex, rootIndex);
await cp(distAssets, rootAssets, { recursive: true, force: true });
