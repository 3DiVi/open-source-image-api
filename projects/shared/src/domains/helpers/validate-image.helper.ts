/* eslint-disable @typescript-eslint/no-unsafe-argument */
const MAX_IMAGE_SIZE = 4 * 1024 * 1024;

export const validateUploadImage = (file: File) => {
  if (file && !file.type.match('image/')) {
    return 'OnlyImage';
  }

  if (
    !(
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/bmp'
    )
  ) {
    return 'UnsupportedFormat';
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return 'BigImageSize';
  }

  return '';
};
