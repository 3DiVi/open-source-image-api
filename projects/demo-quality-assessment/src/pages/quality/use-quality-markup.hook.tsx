import {
  TImageResolution,
  TImageCoef,
  BoundedBoxes,
  AntropometricPoints,
} from '@3divi/shared/src/components';
import {
  TExeQualityAssessmentResult,
  TBbox,
  TPoint,
} from '@3divi/shared/src/domains';
import {
  getNormalizeBboxCoordinate,
  getNormalizeKeypointsCoordinates,
} from '@3divi/shared/src/domains/helpers';
import { useCallback } from 'react';

type TUseQualityMarkup = {
  data: TExeQualityAssessmentResult | undefined;
};

function useQualityMarkup({ data }: TUseQualityMarkup) {
  const showQuaityMarkup = useCallback(
    ({
      imageHeight,
      imageWidth,
      widthCoef,
      heightCoef,
    }: TImageResolution & TImageCoef) => {
      if (!data) {
        return null;
      }

      const bboxData: TBbox[] = [];
      let keypointsData: TPoint[] = [];

      data.objects?.forEach((item) => {
        bboxData.push(
          getNormalizeBboxCoordinate(
            { bbox: item.bbox },
            { imageWidth, imageHeight }
          )
        );

        keypointsData = getNormalizeKeypointsCoordinates({
          keypoints: item.fitter.keypoints,
          imageWidth: widthCoef,
          imageHeight: heightCoef,
        });
      });

      return (
        <>
          {bboxData.map((item) => (
            <BoundedBoxes
              key={`bbox-${item[0]}-${item[1]}-${item[2]}-${item[3]}`}
              bbox={item}
              color="yellow.400"
            />
          ))}

          <AntropometricPoints points={keypointsData} />
        </>
      );
    },
    [data]
  );

  return { showQuaityMarkup };
}

export default useQualityMarkup;
