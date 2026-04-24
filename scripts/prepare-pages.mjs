import { copyFile, access } from "node:fs/promises";

const source = new URL("../dist/app.html", import.meta.url);
const target = new URL("../dist/index.html", import.meta.url);

try {
  await access(source);
  await copyFile(source, target);
} catch (error) {
  throw new Error(`Unable to prepare GitHub Pages index.html: ${error}`);
}
