import { getBase64Src } from './get-base64-src.helper';

export const getCropOfImage = (base64string: string, coord: number[][]) => {
  const image = new Image();
  image.src = getBase64Src(base64string);

  const res: string[] = [];

  coord.forEach((item) => {
    const xStart = item[0] ?? 0;
    const yStart = item[1] ?? 0;
    const xEnd = item[2] ?? 0;
    const yEnd = item[3] ?? 0;

    const bbWidth = xEnd - xStart;
    const bbHeight = yEnd - yStart;

    const canvas = document.createElement('canvas');
    canvas.width = bbWidth * image.width;
    canvas.height = bbHeight * image.height;

    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.drawImage(
        image,
        xStart * image.width,
        yStart * image.height,
        bbWidth * image.width,
        bbHeight * image.height,
        0,
        0,
        bbWidth * image.width,
        bbHeight * image.height
      );

      res.push(ctx.canvas.toDataURL());
    }
  });

  return res;
};
