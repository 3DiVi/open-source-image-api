import { TPoint } from '../../../../shared/src/domains/common.type';

type TGetNormalizeKeypointsCoordinates = {
  keypoints: number[];
  imageWidth: number;
  imageHeight: number;
};

export function getNormalizeKeypointsCoordinates({
  keypoints,
  imageWidth,
  imageHeight,
}: TGetNormalizeKeypointsCoordinates): TPoint[] {
  const resObj = [];

  for (let i = 0; i < keypoints.length - 2; i += 3) {
    resObj.push({
      x: (keypoints[i] ?? 0) * imageWidth,
      y: (keypoints[i + 1] ?? 0) * imageHeight,
    });
  }

  return resObj;
}
