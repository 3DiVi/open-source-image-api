import {
  Box,
  Center,
  Input,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFilesDragAndDropLogic } from '../hooks';
import { IconForDragAndDrop } from './icon-for-drag-and-drop.component';

type TDragAndDropBox = {
  width?: string | Array<string | number | null>;
  onFileAction: (file: FileList) => void;
  borderRadius?: string;
  borderRightRadius?: string;
  borderLeftRadius?: string;
  borderTopRadius?: string;
  borderBottomRadius?: string;
  children?: JSX.Element;
  buttons?: JSX.Element;
  loading: boolean;
};

export function DragAndDropBox({
  width = '100px',
  onFileAction,
  borderRadius = '20%',
  borderRightRadius,
  borderLeftRadius,
  borderTopRadius,
  borderBottomRadius,
  children,
  buttons,
  loading,
}: TDragAndDropBox): JSX.Element {
  const { t } = useTranslation('components');
  const [isLargerThan62em] = useMediaQuery('(min-width: 62em)');
  const selectFileRef = useRef<HTMLInputElement>(null);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const {
    isHover: dragFileHover,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleFileUpload,
    handleDrop,
  } = useFilesDragAndDropLogic({ onFileAction, isLoading: loading });

  const color =
    (isLargerThan62em && isMouseHover) || dragFileHover
      ? 'active.100'
      : 'bgSecondary.100';

  const selectImage = () => {
    if (!selectFileRef.current || loading) {
      return;
    }

    selectFileRef.current.click();
  };

  const onMouseEnter = () => {
    setIsMouseHover(true);
  };

  const onMouseLeave = () => {
    setIsMouseHover(false);
  };

  return (
    <VStack spacing={{ base: 2, lg: 4 }} w={width}>
      <Center
        overflow="hidden"
        minH="100px"
        minW="100px"
        w={width}
        h={width}
        borderTopRadius={borderTopRadius ?? borderRadius}
        borderBottomRadius={borderBottomRadius ?? borderRadius}
        borderLeftRadius={borderLeftRadius ?? borderRadius}
        borderRightRadius={borderRightRadius ?? borderRadius}
        borderWidth={3}
        borderColor={color}
        justifyContent="center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={selectImage}
        _active={{
          borderColor: 'active.100',
          zIndex: 2,
        }}
        _hover={{
          zIndex: 2,
          cursor: 'pointer',
        }}
        position="relative"
      >
        {children ? (
          <Box>{children}</Box>
        ) : (
          <>
            <IconForDragAndDrop color={color} />

            <Text
              position="absolute"
              bottom={{ base: 3, lg: 4 }}
              color="textSecondary.100"
              fontSize={{ base: 'xs', lg: 'md' }}
              fontWeight="normal"
              wordBreak="break-word"
              w="75%"
              textAlign="center"
            >
              {isLargerThan62em
                ? t('DragAndDropImage.UserInfo')
                : t('DragAndDropImage.MobileUserInfo')}
            </Text>
          </>
        )}
      </Center>

      {buttons}

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
    </VStack>
  );
}
