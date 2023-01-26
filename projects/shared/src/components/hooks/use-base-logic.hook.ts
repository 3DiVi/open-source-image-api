/* eslint-disable @typescript-eslint/no-floating-promises */
import { useToast } from '@chakra-ui/react';
import { useEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TSettings } from '../../../../shared/src/domains/common.type';
import { selectImage } from '../../../../shared/src/domains/helpers';
import { ERRORS_KEYS } from '../../domains';

export type TTakePhotoViaWebcam = {
  newFile: File;
  newImageSrc: string;
};

type TUseBaseHook<Type> = {
  query: (file: File) => Promise<Type | null | undefined | void>;
  loading: boolean;
  error?: string;
  settings?: TSettings;
};

export function useBaseLogic<Type>({
  query,
  loading,
  error,
  settings,
}: TUseBaseHook<Type>) {
  const { t } = useTranslation('components');
  const [file, setFile] = useState<File>();
  const [imageSrc, setImageSrc] = useState<string>();
  const [responseData, setResponseData] = useState<Type>();

  const toast = useToast({
    status: 'error',
    duration: 5000,
    isClosable: true,
    position: 'top',
  });

  const resetData = useCallback(() => {
    setImageSrc(undefined);
    setFile(undefined);
    setResponseData(undefined);
  }, [setFile]);

  const setImage = useCallback(
    (fileList: FileList) =>
      selectImage({
        fileList,
        setFile,
        setImageSrc,
        resetData,
      }),
    [file]
  );

  const executeRequest = () => {
    if (!file) {
      return;
    }

    query(file).then((data) => {
      if (data) {
        if (!responseData) {
          toast({
            status: 'success',
            title: t('common:SuccessQuery'),
          });
        }

        setResponseData(data);
      }
    });
  };

  const takePhotoViaWebcam = useCallback(
    ({ newFile, newImageSrc }: TTakePhotoViaWebcam) => {
      resetData();
      setImageSrc(newImageSrc);
      setFile(newFile);
    },
    [file]
  );

  useEffect(() => {
    if (file) {
      executeRequest();
    }
  }, [file, settings]);

  useEffect(() => {
    if (error) {
      toast({
        status: 'error',
        title: t(`errors.${ERRORS_KEYS[error] ?? 'SomeError'}`),
      });
    }
  }, [error]);

  return {
    imageSrc,
    file,
    responseData,
    loading,
    resetData,
    setImage,
    takePhotoViaWebcam,
  };
}
