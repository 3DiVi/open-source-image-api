import { Box, Divider as ChakraDivider } from "@chakra-ui/react";

type TCustomDivider = {
  py?: string | number;
};

export function CustomDivider({ py = 1.5 }: TCustomDivider): JSX.Element {
  return (
    <Box py={py}>
      <ChakraDivider w="full" borderColor="textSecondary.100" />
    </Box>
  );
}
