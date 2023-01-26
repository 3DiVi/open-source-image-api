/* eslint-disable camelcase */
export type TSettings = { [key: string]: TSettingOption };
export type TSettingOption = { value: boolean; locale: string };

export type TPoint = {
  x: number;
  y: number;
};

export type TBbox = [number, number, number, number];
export type TImage = { $image: string };

export type TSampleImput = {
  $image?: string;
  objects: any[];
};

export type TBaseDetectionInfo = {
  id: number;
  class: string;
};

export type TDetection = TBaseDetectionInfo & {
  confidence: number;
  bbox: TBbox;
};

export type TAPIError = {
  detail: [
    {
      loc: Array<number | string>;
      msg: string;
      type: string;
    }
  ];
};

export type TResponse<T> = TImage & {
  objects: T;
};
