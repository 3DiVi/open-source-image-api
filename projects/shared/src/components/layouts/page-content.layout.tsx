import { Box, Center, Flex, Hide, Show, VStack } from "@chakra-ui/react";

type TPageContentLayout = {
  mainContent: JSX.Element;
  resultSection?: JSX.Element;
};

function PageContentLayout({
  mainContent,
  resultSection,
}: TPageContentLayout): JSX.Element {
  return (
    <>
      <Show below="lg">
        <Flex w="full" h="full" direction="column" flexGrow={1}>
          <Center w="full" p={4} position="relative" flexGrow={1}>
            {mainContent}
          </Center>

          {resultSection && (
            <Flex flexGrow={1} w="full" alignItems="flex-end">
              {resultSection}
            </Flex>
          )}
        </Flex>
      </Show>

      <Hide below="lg">
        <Flex
          w="full"
          h="full"
          direction="row"
          overflowY="hidden"
          p={4}
          flexGrow={1}
        >
          <Box flexGrow={1} w="full" maxW="280px" />

          <Center w="full" p={4} position="relative" flexGrow={1}>
            {mainContent}
          </Center>

          <VStack flexShrink={0} overflowY="auto" w="280px" spacing={4} px={2}>
            {resultSection}
          </VStack>
        </Flex>
      </Hide>
    </>
  );
}

export default PageContentLayout;
