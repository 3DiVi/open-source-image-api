import { Button, useDisclosure, Icon } from '@chakra-ui/react';
import { Camera } from 'phosphor-react';
import { TTakePhotoViaWebcam } from '../hooks';
import { WebcamModal } from '../webcam-modal.component';

type TOpenWebcamModalButton = {
  takePhotoViaWebcam: ({ newFile, newImageSrc }: TTakePhotoViaWebcam) => void;
  isDisabled?: boolean;
  text?: string;
};

export function OpenWebcamModalButton({
  takePhotoViaWebcam,
  isDisabled = false,
  text,
}: TOpenWebcamModalButton): JSX.Element {
  const { onClose, onOpen, isOpen } = useDisclosure();

  return (
    <>
      <Button
        flexGrow={1}
        leftIcon={<Icon as={Camera} boxSize={{ base: 4, lg: 6 }} />}
        onClick={onOpen}
        aria-label="Take a photo via webcam for load"
        colorScheme="blue"
        isDisabled={isDisabled}
        fontSize={{ base: 'sm', sm: 'md' }}
        height={{ base: '32px', sm: '40px' }}
        fontWeight="normal"
        color="textPrimary.100"
      >
        {text}
      </Button>

      <WebcamModal
        onClose={onClose}
        isOpen={isOpen}
        takePhotoViaWebcam={takePhotoViaWebcam}
      />
    </>
  );
}
