import { TDetection } from '../../common.type';
import { TFaceFitterFace } from '../face-detection-fitter';

// Quality Assessment Estimator
export type TQualityAssessmentFace = TFaceFitterFace &
  TDetection & {
    quality: {
      qaa: {
        totalScore: number;
        isSharp: boolean;
        sharpnessScore: number;
        isEvenlyIlluminated: boolean;
        illuminationScore: number;
        noFlare: boolean;
        isLeftEyeOpened: boolean;
        leftEyeOpennessScore: number;
        isRightEyeOpened: boolean;
        rightEyeOpennessScore: number;
        isRotationAcceptable: boolean;
        maxRotationDeviation: number;
        notMasked: boolean;
        notMaskedScore: number;
        isNeutralEmotion: boolean;
        neutralEmotionScore: number;
        isEyesDistanceAcceptable: boolean;
        eyesDistance: number;
        isMarginsAcceptable: boolean;
        marginOuterDeviation: number;
        marginInnerDeviation: number;
        isNotNoisy: boolean;
        noiseScore: number;
        watermarkScore: number;
        hasWatermark: boolean;
        isBackgroundUniform: boolean;
        backgroundUniformityScore: number;
        dynamicRangeScore: number;
        isDynamicRangeAcceptable: boolean;
      };
    };
  };
