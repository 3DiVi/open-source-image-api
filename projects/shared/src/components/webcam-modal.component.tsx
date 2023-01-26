import {
  Button,
  Center,
  CloseButton,
  Flex,
  Icon,
  Spinner,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import { Camera } from 'phosphor-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Webcam from 'react-webcam';
import { ERRORS_KEYS } from '../domains';
import { TTakePhotoViaWebcam } from './hooks/use-base-logic.hook';

type TWebcamModal = {
  onClose: () => void;
  isOpen: boolean;
  takePhotoViaWebcam: ({ newFile, newImageSrc }: TTakePhotoViaWebcam) => void;
};

export function WebcamModal({
  onClose,
  isOpen,
  takePhotoViaWebcam,
}: TWebcamModal): JSX.Element | null {
  const [isPortraitOrientation] = useMediaQuery('(orientation: portrait)');
  const { t } = useTranslation('components');
  const toast = useToast();
  const webcamRef = useRef<Webcam>(null);
  const [isWebcamActive, setIsWebcamActive] = useState<boolean>(false);

  const modalCloseHandler = () => {
    onClose();
    setIsWebcamActive(false);
  };

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc: string | null = webcamRef.current.getScreenshot();

      if (!imageSrc) return;

      fetch(imageSrc)
        .then((res) => res.blob())
        .then((blob) => {
          takePhotoViaWebcam({
            newFile: new File([blob], 'File.jpeg', { type: 'image/jpeg' }),
            newImageSrc: imageSrc,
          });
        })
        .finally(() => {
          modalCloseHandler();
        });
    }
  }, [webcamRef, onClose]);

  useEffect(() => {
    if (isOpen) {
      navigator.mediaDevices
        .getUserMedia({ audio: false, video: true })
        .then((data) => {
          setIsWebcamActive(data.active);
          data.getTracks().forEach((track) => track.stop());
        })
        .catch((err: DOMException) => {
          toast({
            title: t(`errors.${ERRORS_KEYS[err.message] ?? 'SomeError'}`),
            status: 'error',
            duration: 5000,
            position: 'top',
            isClosable: true,
          });

          onClose();
        });
    }
  }, [isOpen]);

  let units = 'vh';
  const webcamWidth = window.screen.width * 0.8;
  const webcamHeight = window.screen.height * 0.8;
  let size = webcamHeight;

  if (isPortraitOrientation) {
    units = 'vw';
    size = webcamWidth;
  }

  return isOpen ? (
    <Center
      position="fixed"
      top={0}
      left={0}
      w="full"
      h="full"
      bg="blackAlpha.700"
      zIndex={2}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        w={`80${units}`}
        position="relative"
        flexGrow={0}
        bg="gray.800"
      >
        {isWebcamActive ? (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              minScreenshotHeight={720}
              minScreenshotWidth={1080}
              width={size}
              height={size}
              videoConstraints={{
                width: size,
                height: size,
                facingMode: 'user',
              }}
            />
            <CloseButton
              size="lg"
              position="absolute"
              right={2}
              top={2}
              color="gray.300"
              onClick={modalCloseHandler}
            />
            <Button
              w="full"
              position="absolute"
              onClick={capture}
              cursor="pointer"
              variant="solid"
              colorScheme="blue"
              size="md"
              bottom={0}
              left={0}
              borderRadius={0}
              leftIcon={<Icon as={Camera} boxSize={6} />}
            >
              {t('common:TakePhoto')}
            </Button>
          </>
        ) : (
          <Center minH={`65${units}`} w="full" bg="gray.800">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        )}
      </Flex>
    </Center>
  ) : null;
}
