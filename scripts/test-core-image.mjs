import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../src/core-image.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext }
});
const { revealCoreImage } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

function mockImage(decode, complete = false, naturalWidth = 0) {
  const classes = new Set();
  return {
    decode,
    complete,
    naturalWidth,
    classList: { add: (value) => classes.add(value) },
    classes
  };
}

test("keeps an uncached logo hidden until decoding finishes", async () => {
  let finishDecode;
  const image = mockImage(() => new Promise((resolve) => { finishDecode = resolve; }));
  const reveal = revealCoreImage(image);
  assert.equal(image.classes.has("is-ready"), false);
  finishDecode();
  await reveal;
  assert.equal(image.classes.has("is-ready"), true);
});

test("reveals a cached decoded logo", async () => {
  const image = mockImage(() => Promise.resolve(), true, 768);
  await revealCoreImage(image);
  assert.equal(image.classes.has("is-ready"), true);
});

test("does not reveal a broken logo or reject the startup task", async () => {
  const image = mockImage(() => Promise.reject(new Error("Image unavailable")), true, 0);
  await revealCoreImage(image);
  assert.equal(image.classes.has("is-ready"), false);
});

test("does not reveal an incomplete logo after a decode failure", async () => {
  const image = mockImage(() => Promise.reject(new Error("Incomplete image")), false, 768);
  await revealCoreImage(image);
  assert.equal(image.classes.has("is-ready"), false);
});

test("allows a completely loaded logo when the decode API rejects", async () => {
  const image = mockImage(() => Promise.reject(new Error("Decode API failure")), true, 768);
  await revealCoreImage(image);
  assert.equal(image.classes.has("is-ready"), true);
});
