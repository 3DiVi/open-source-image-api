import { Box } from '@chakra-ui/react';
import { TPoint } from '../domains';

type TAntropometricPoints = {
  points: TPoint[];
};

export function AntropometricPoints({ points }: TAntropometricPoints) {
  return (
    <>
      {points.map((item) => (
        <Box
          key={`keypoint-${item.x}-${item.y}`}
          position="absolute"
          top={`${item.y}px`}
          left={`${item.x}px`}
          bgColor="red.400"
          width={1}
          height={1}
          borderRadius="full"
        />
      ))}
    </>
  );
}
