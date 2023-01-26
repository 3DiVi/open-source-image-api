import { TResponse, TSampleImput } from '../../common.type';
import { exeBaseAPIRequest } from '../../helpers';
import { ProcessingBlockAPI } from '../../image-api-endpoints.const';
import { TQualityAssessmentFace } from './quality-assessment.type';

export type TExeQualityAssessmentResult = TResponse<TQualityAssessmentFace[]>;

export function exeQualityAssessmentAPIRequest(
  data: File | TSampleImput
): Promise<TExeQualityAssessmentResult> {
  return exeBaseAPIRequest<TResponse<TQualityAssessmentFace[]>>({
    apiUrl: ProcessingBlockAPI.QUALITY_ASSESSMENT,
    data,
  });
}
