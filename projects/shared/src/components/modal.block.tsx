import {
  As,
  Heading,
  HStack,
  Icon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  icon: As<any>;
  title: string;
  children: ReactNode;
  size?: string;
};

export function ModalBlock({
  isOpen,
  onClose,
  icon,
  title,
  children,
  size = "md",
}: TModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent borderRadius="lg">
        <ModalCloseButton right="2" />
        <Stack spacing="4" py="6" px="10">
          <HStack spacing="2" py="2">
            <Icon as={icon} w="7" h="7" />
            <Heading fontSize="xl" fontWeight="medium">
              {title}
            </Heading>
          </HStack>
          {children}
        </Stack>
      </ModalContent>
    </Modal>
  );
}
