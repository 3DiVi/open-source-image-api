import { TExeQualityAssessmentResult } from '@3divi/shared/src/domains';
import { VStack, Flex, Show, Hide, Box } from '@chakra-ui/react';
import QualityInfoTable from './quality-info-table.component';

type TQualityInfo = {
  buttons?: JSX.Element;
  data: TExeQualityAssessmentResult;
};

function QualityInfo({ buttons, data }: TQualityInfo): JSX.Element {
  return (
    <VStack w="full" py={{ base: 2, lg: '0' }} spacing={2}>
      {buttons && (
        <Flex w={{ base: '300px', lg: 'full' }} gap={2}>
          {buttons}
        </Flex>
      )}

      <Show below="lg">
        <Box w={['280px', '400px', '450px', null, '512px']}>
          <QualityInfoTable data={data} />
        </Box>
      </Show>

      <Hide below="lg">
        <QualityInfoTable data={data} />
      </Hide>
    </VStack>
  );
}

export default QualityInfo;
