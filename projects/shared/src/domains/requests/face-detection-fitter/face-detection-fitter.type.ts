import { TBaseDetectionInfo } from '../../common.type';

export type TAngles = {
  yaw: number;
  roll: number;
  pitch: number;
};

export type TFitter = {
  fitter_type: string;
  keypoints: number[]; // x,y,z
  leftEye: number[]; // массив из двух значений - координаты
  rightEye: number[]; // массив из двух значений - координаты
};

export type TFaceFitterFace = TBaseDetectionInfo & {
  angles: TAngles;
  fitter: TFitter;
};
