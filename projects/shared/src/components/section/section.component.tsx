import { Box } from "@chakra-ui/react";
import { SectiontTitle } from "./section-title.component";

type TSection = {
  children: JSX.Element;
  text?: string;
  subtext?: string;
  isRoundBorder?: boolean;
};

export function Section({
  children,
  text,
  subtext,
  isRoundBorder = true,
}: TSection): JSX.Element | null {
  return (
    <Box w="full">
      {(text || subtext) && <SectiontTitle text={text} subtext={subtext} />}

      <Box
        bg="bgSecondary.100"
        borderRadius={isRoundBorder ? "lg" : "none"}
        color="textPrimary.100"
        w="full"
      >
        {children}
      </Box>
    </Box>
  );
}
