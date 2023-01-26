import { Button, Input, Icon } from '@chakra-ui/react';
import { Upload } from 'phosphor-react';
import { useRef } from 'react';
import { useFilesDragAndDropLogic } from '../hooks';

type TSelectFileButton = {
  isDisabled?: boolean;
  selectFileAction: (files: FileList) => void;
  text?: string;
};

export function SelectFileButton({
  isDisabled = false,
  selectFileAction,
  text,
}: TSelectFileButton): JSX.Element {
  const selectFileRef = useRef<HTMLInputElement>(null);
  const { handleFileUpload } = useFilesDragAndDropLogic({
    onFileAction: selectFileAction,
    isLoading: isDisabled,
  });

  const selectFile = () => {
    if (!selectFileRef.current) {
      return;
    }

    selectFileRef.current.click();
  };
  return (
    <>
      <Button
        flexGrow={1}
        leftIcon={<Icon as={Upload} boxSize={{ base: 4, lg: 6 }} />}
        onClick={selectFile}
        aria-label="Select photo for load"
        fontSize={{ base: 'sm', sm: 'md' }}
        height={{ base: '32px', sm: '40px' }}
        isDisabled={isDisabled}
        fontWeight="normal"
        colorScheme="blue"
        color="textPrimary.100"
      >
        {text}
      </Button>

      <Input
        ref={selectFileRef}
        type="file"
        display="none"
        accept="image/*"
        onChange={handleFileUpload}
        multiple={false}
        w={0}
        h={0}
        position="absolute"
        top="-99999"
        left="-99999"
      />
    </>
  );
}
