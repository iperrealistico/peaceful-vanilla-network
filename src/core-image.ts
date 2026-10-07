export async function revealCoreImage(image: HTMLImageElement): Promise<void> {
  // Keep the logo hidden until its complete pixels are ready for a smooth fade.
  try {
    await image.decode();
  } catch {
    if (!image.complete || image.naturalWidth === 0) {
      return;
    }
  }

  image.classList.add("is-ready");
}
