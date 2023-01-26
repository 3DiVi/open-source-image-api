import { Flex, Text } from "@chakra-ui/react";

type TSectionTitle = {
  text?: string;
  subtext?: string;
};

export function SectiontTitle({ text, subtext }: TSectionTitle): JSX.Element {
  return (
    <Flex
      gap={4}
      px={2}
      pb={2}
      justifyContent="space-between"
      alignContent="center"
      textTransform="uppercase"
      color="textSecondary.100"
      fontSize="xs"
      letterSpacing="1px"
      fontWeight="500"
      flexShrink={0}
    >
      {text && <Text>{text}</Text>}
      {subtext && <Text>{subtext}</Text>}
    </Flex>
  );
}
