import { createStandaloneToast } from '@chakra-ui/react';
import { t } from 'i18next';
import { Dispatch, SetStateAction } from 'react';
import { convertImageTo64Base } from './convert-image-to-base64.helper';
import { filterFilesByType } from './filter-files-by-type.helper';
import { validateUploadImage } from './validate-image.helper';

type TSelectFileAction = {
  fileList: FileList;
  resetData: () => void;
  setImageSrc: Dispatch<SetStateAction<string | undefined>>;
  setFile: Dispatch<SetStateAction<File | undefined>>;
};

export const selectImage = ({
  fileList,
  resetData,
  setImageSrc,
  setFile,
}: TSelectFileAction) => {
  // Проверка на отмену выбора файла
  if (!fileList.length) {
    return;
  }

  const images = filterFilesByType({ files: fileList });
  const toast = createStandaloneToast();

  if (!images.length) {
    toast.toast({
      title: t<string>(`components:errors.OnlyImage`),
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'top',
    });

    return;
  }

  const validateError = validateUploadImage(images[0]!);
  if (validateError) {
    toast.toast({
      title: t<string>(`components:errors.${validateError}`),
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'top',
    });

    return;
  }

  if (images.length > 1) {
    toast.toast({
      title: t<string>(`components:errors.MoreOneFiles`),
      status: 'info',
      duration: 5000,
      isClosable: true,
      position: 'top',
    });
  }

  if (images[0]) {
    resetData();
    convertImageTo64Base(images[0]).then((imageBase64) => {
      setImageSrc(`data:image/jpeg;base64,${imageBase64}`);
    });

    setFile(images[0]);
  }
};
