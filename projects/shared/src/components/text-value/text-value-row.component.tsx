/* eslint-disable camelcase */
import { Box, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { Info, X } from "phosphor-react";

type TTextValueRow = {
  text: string;
  value: number | boolean | string;
  unit?: string;
  isHighlighted?: boolean;
  px?: string | number;
  py?: string | number;
  fontSize?: string;
  fontWeight?: string | number;
  info?: string;
};

export function TextValueRow({
  text,
  value,
  isHighlighted = false,
  unit = "",
  px = 3,
  py = 1.5,
  fontSize = "sm",
  fontWeight = "normal",
  info,
}: TTextValueRow): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box px={px} py={py}>
      <Flex
        justifyContent="space-between"
        alignContent="center"
        color={isHighlighted ? "lightGreen" : "textPrimary.100"}
        fontSize={fontSize}
        fontWeight={fontWeight}
        gap={4}
        pb={isOpen ? 1 : 0}
      >
        {info ? (
          <Flex
            gap={1}
            color="textPrimary.100"
            _hover={{ cursor: "pointer", color: "active.100" }}
            onClick={onToggle}
          >
            <Text maxW="130px">{text}</Text>
            <Icon as={isOpen ? X : Info} boxSize={5} />
          </Flex>
        ) : (
          <Text>{text}</Text>
        )}
        <Text>{`${value.toString()}${unit}`}</Text>
      </Flex>

      {isOpen && (
        <Text fontSize="sm" fontWeight="light" color="whiteAlpha.700">
          {info}
        </Text>
      )}
    </Box>
  );
}
