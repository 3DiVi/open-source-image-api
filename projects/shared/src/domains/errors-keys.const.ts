type TErrorMessages = {
  [x: string]: string;
};

export const ERRORS_KEYS: TErrorMessages = {
  'This image format is not supported': 'UnsupportedFormat',
  'Request body size is too large': 'BigImageSize',
  'No faces found': 'NoFacesFound',
  'Many faces': 'ManyFaces',
  'Starting videoinput failed': 'CouldNotStartVideo',
  'Permission denied': 'WebcamPermissionDenied',
  'The request is not allowed by the user agent or the platform in the current context.':
    'WebcamPermissionDenied',
  'Could not start video source': 'CouldNotStartVideo',
  'Requested device not found': 'CameraNotFound',
  'The number of faces is not equal to 1': 'ManyFaces',
  'Not Found': 'NotFound',
  'Bad Gateway': 'SomeError',
  'Not in allowed files': 'UnsupportedFormat',
  'Request Entity Too Large': 'BigImageSize',
};
