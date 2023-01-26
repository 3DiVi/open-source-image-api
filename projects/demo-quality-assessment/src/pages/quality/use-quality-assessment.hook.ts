import {
  TExeFaceDetectionFitterAPIResult,
  useBaseAPI,
  exeFaceDetectionFitterAPIRequest,
  TExeQualityAssessmentResult,
  exeQualityAssessmentAPIRequest,
} from '@3divi/shared/src/domains';
import { getCropOfImage } from '@3divi/shared/src/domains/helpers';
import { useState } from 'react';

const checkFaceDetectionResponse = (
  response: TExeFaceDetectionFitterAPIResult
) => {
  if (response.objects.length > 1) {
    throw new Error('Many faces');
  }
};

export function useQualityAssessment() {
  const [error, setError] = useState<string>();

  const {
    getData: getFaceDetectionFitterData,
    error: faceDetectionFitterError,
    loading: faceDetectionFitterLoading,
  } = useBaseAPI<TExeFaceDetectionFitterAPIResult>({
    apiRequest: exeFaceDetectionFitterAPIRequest,
  });
  const {
    getData: getQualityAssesmentData,
    error: qualityAssessmentError,
    loading: qualityAssessmentLoading,
  } = useBaseAPI<TExeQualityAssessmentResult>({
    apiRequest: exeQualityAssessmentAPIRequest,
  });

  const getQualityAssessment = (file: File) => {
    setError(undefined);

    return getFaceDetectionFitterData(file)
      .then((response) => {
        checkFaceDetectionResponse(response);

        return getQualityAssesmentData({
          $image: response.$image,
          objects: [response.objects[0]],
        });
      })
      .then((data) => {
        const crop = getCropOfImage(data.$image, [data.objects[0].bbox]);

        return {
          ...data,
          $image: crop[0],
        };
      })
      .catch((err) => {
        const quaityErr = err as Error;
        setError(quaityErr.message);
      });
  };

  return {
    getQualityAssessment,
    loading: faceDetectionFitterLoading || qualityAssessmentLoading,
    error: faceDetectionFitterError ?? qualityAssessmentError ?? error,
  };
}
