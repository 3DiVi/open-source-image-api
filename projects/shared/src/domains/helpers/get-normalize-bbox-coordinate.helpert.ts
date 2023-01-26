import { TBbox } from '../../../../shared/src/domains/common.type';
import { TImageResolution } from '../../components';

type TNormilizeBboxCoordinate = {
  bbox: TBbox;
};

export const getNormalizeBboxCoordinate = (
  { bbox }: TNormilizeBboxCoordinate,
  { imageWidth, imageHeight }: TImageResolution
): TBbox => [
  bbox[0] * imageWidth,
  bbox[1] * imageHeight,
  bbox[2] * imageWidth,
  bbox[3] * imageHeight,
];
