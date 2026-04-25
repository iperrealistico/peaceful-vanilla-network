import { cp, copyFile, mkdir, rm } from "node:fs/promises";

const distIndex = new URL("../dist/index.html", import.meta.url);
const rootIndex = new URL("../index.html", import.meta.url);
const distAssetsBuild = new URL("../dist/assets/build", import.meta.url);
const rootAssetsBuild = new URL("../assets/build", import.meta.url);

await copyFile(distIndex, rootIndex);
await rm(rootAssetsBuild, { recursive: true, force: true });
await mkdir(rootAssetsBuild, { recursive: true });
await cp(distAssetsBuild, rootAssetsBuild, { recursive: true, force: true });
