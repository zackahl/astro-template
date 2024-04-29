import type { ImageMetadata } from 'astro';

const load = async function () {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('../assets/images/*.{jpeg,jpg,png,tiff,webp,gif,svg,JPEG,JPG,PNG,TIFF,WEBP,GIF,SVG}');
  } catch (e) {
    // continue regardless of error
  }
  return images;
};

let _images: Record<string, () => Promise<unknown>> | undefined = undefined;

export const fetchLocalImages = async () => {
  _images = _images || (await load());
  return _images;
};

export const findImage = async (
  imagePath: string
): Promise<{ default: ImageMetadata }> => {
  const images = await fetchLocalImages();
  const key = imagePath;

  return (images && typeof images[key] === 'function')
    ? (await images[key]() as { default: ImageMetadata })['default']
    : Promise.resolve({} as any)
};