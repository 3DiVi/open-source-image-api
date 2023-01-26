const ROOT = "/image-api";

export const ImageAPIEndpoints = {
  detect: `${ROOT}/detect/`,
  liveness: `${ROOT}/liveness/image`,
  quality: `${ROOT}/quality/image`,
  verification: `${ROOT}/match/image`,
};

export const ProcessingBlockAPI = {
  FACE_DETECTOR: "/face-detector",
  BODY_DETECTOR: "/body-detector",
  AGE_ESTIMATOR: "/age-estimator",
  EMOTION_ESTIMATOR: "/emotion-estimator",
  GENDER_ESTIMATOR: "/gender-estimator",
  MASK_ESTIMATOR: "/mask-estimator",
  LIVENESS_ESTIMATOR: "/face-detector-liveness-estimator",
  QUALITY_ASSESSMENT: "/quality-assessment-estimator",
  SEARCH_MATCHER: "/search-matcher",
  VERIFY_MATCHER: "/verify-matcher",
  FACE_DETECTION_TEMPLATE: "/face-detector-template-extractor",
  FACE_DETECTION_FITTER: "/face-detector-face-fitter",
};
