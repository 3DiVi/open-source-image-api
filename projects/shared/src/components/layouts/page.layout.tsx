import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <Flex
      minW="250px"
      h="100vh"
      maxH="100vh"
      overflowY="auto"
      w="100vw"
      bg="page.100"
      direction={{ base: "column", lg: "row" }}
      flexShrink={0}
    >
      <Outlet />
    </Flex>
  );
}

export default PageLayout;
