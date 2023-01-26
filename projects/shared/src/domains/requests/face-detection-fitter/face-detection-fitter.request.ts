import { TDetection, TSampleImput, TResponse } from '../../common.type';
import { exeBaseAPIRequest } from '../../helpers';
import { ProcessingBlockAPI } from '../../image-api-endpoints.const';
import { TFaceFitterFace } from './face-detection-fitter.type';

export type TExeFaceDetectionFitterAPIResult = TResponse<
  Array<TFaceFitterFace & TDetection>
>;

export function exeFaceDetectionFitterAPIRequest(
  data: File | TSampleImput
): Promise<TExeFaceDetectionFitterAPIResult> {
  return exeBaseAPIRequest<TResponse<Array<TFaceFitterFace & TDetection>>>({
    apiUrl: ProcessingBlockAPI.FACE_DETECTION_FITTER,
    data,
  }).then((response) => {
    if (!response.objects.length) {
      throw new Error('No faces found');
    }

    return response;
  });
}
