import { Box } from '@chakra-ui/react';
import { TBbox } from '../domains';

type TBoundedBoxes = {
  bbox: TBbox;
  color: string;
};

export function BoundedBoxes({ bbox, color }: TBoundedBoxes) {
  return (
    <Box
      position="absolute"
      left={`${bbox[0]}px`}
      top={`${bbox[1]}px`}
      width={`${bbox[2] - bbox[0]}px`}
      height={`${bbox[3] - bbox[1]}px`}
      borderColor={color}
      borderWidth={2}
    />
  );
}
