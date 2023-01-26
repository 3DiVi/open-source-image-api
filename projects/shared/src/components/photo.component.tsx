import { Box, Center, Flex, Image, Spinner } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { TImageCoef, TImageResolution } from "./types";

type TPhoto = {
  imageSrc?: string;
  width?: string | Array<string | number | null>;
  isLoading?: boolean;
  resetButton?: JSX.Element;
  // Функция, для отображения боксов, точек и др. поверх изображения
  renderComponets?:
    | (({ imageWidth, imageHeight }: TImageResolution) => JSX.Element | null)
    | (({
        imageWidth,
        imageHeight,
        widthCoef,
        heightCoef,
      }: TImageResolution & TImageCoef) => JSX.Element | null);
};

export function Photo({
  imageSrc,
  renderComponets,
  width = "100px",
  isLoading = false,
  resetButton,
}: TPhoto) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageWidth, setImageWidth] = useState<number>(Number(width) ?? 0);
  const [imageHeight, setImageHeight] = useState<number>(Number(width) ?? 0);
  const [widthCoef, setWidthCoef] = useState<number>(1);
  const [heightCoef, setHeightCoef] = useState<number>(1);

  useEffect(() => {
    const debounceUpdateSize = debounce(() => {
      const currentImage = imageRef.current;
      if (
        currentImage &&
        currentImage.width &&
        currentImage.naturalWidth &&
        currentImage.height &&
        currentImage.naturalHeight
      ) {
        setImageWidth(currentImage.width ?? 0);
        setImageHeight(currentImage.height ?? 0);
        setWidthCoef(currentImage.width / currentImage.naturalWidth);
        setHeightCoef(currentImage.height / currentImage.naturalHeight);
      }
    }, 16);

    window.addEventListener("resize", debounceUpdateSize);

    return () => window.removeEventListener("resize", debounceUpdateSize);
  }, [imageSrc]);

  return imageSrc ? (
    <Flex direction="column" gap={2} flexGrow={0} alignItems="center">
      {resetButton}
      <Flex w={width} justifyContent="center">
        <Box maxW={width} position="relative">
          <Image
            ref={imageRef}
            src={imageSrc}
            maxW={width}
            maxH={width}
            onLoad={(e) => {
              setImageHeight(e.currentTarget.height);
              setImageWidth(e.currentTarget.width);

              setWidthCoef(
                e.currentTarget.width / e.currentTarget.naturalWidth
              );
              setHeightCoef(
                e.currentTarget.height / e.currentTarget.naturalHeight
              );
            }}
          />

          {isLoading && (
            <Center
              w="full"
              h="full"
              top={0}
              left={0}
              position="absolute"
              bg="blackAlpha.500"
            >
              <Spinner
                thickness="6px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          )}

          {renderComponets &&
            renderComponets({
              imageWidth,
              imageHeight,
              widthCoef,
              heightCoef,
            })}
        </Box>
      </Flex>
    </Flex>
  ) : null;
}
