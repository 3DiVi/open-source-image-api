import { Section } from '@3divi/shared/src/components';
import { TExeQualityAssessmentResult } from '@3divi/shared/src/domains';
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  Image,
} from '@chakra-ui/react';
import { CaretUp, X } from 'phosphor-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import QualityInfoTable from './quality-info-table.component';

type TMobileQualityinfo = {
  data: TExeQualityAssessmentResult;
};

function MobileQualityinfo({ data }: TMobileQualityinfo): JSX.Element {
  const { t } = useTranslation('pages');
  const [isFullCard, setIsFullCard] = useState(false);

  return (
    <Box w="300px" position="relative" minH="90px">
      {isFullCard ? (
        <VStack position="absolute" w="full" bottom={1} left={0} spacing={2}>
          <Box
            w="300px"
            maxH="80vh"
            overflowY="auto"
            border="1px"
            borderColor="textPrimary.100"
            borderRadius="lg"
          >
            <QualityInfoTable data={data} />
          </Box>

          <IconButton
            size="lg"
            colorScheme="blue"
            icon={<Icon as={X} />}
            aria-label="Close full card info"
            onClick={() => {
              setIsFullCard(false);
            }}
          />
        </VStack>
      ) : (
        <Section>
          <Flex alignItems="stretch" py={1} px={1} gap={2}>
            <Image
              flexShrink={0}
              boxSizing="content-box"
              src={data.$image}
              h="77px"
              w="72px"
              objectFit="cover"
              borderRadius="lg"
              border="2px"
              borderColor="yellow"
            />

            <Stat>
              <StatLabel fontSize={{ base: 'xl', lg: 'xl' }}>
                {t('Quality.Result.totalScore')}
              </StatLabel>
              <StatNumber
                fontSize={{ base: '2xl', lg: '5xl' }}
                fontWeight={200}
              >
                {`${data.objects[0].quality.qaa.totalScore}/100`}
              </StatNumber>
            </Stat>

            <IconButton
              h="81px"
              minW="32px"
              maxW="32px"
              colorScheme="blue"
              icon={<Icon as={CaretUp} />}
              aria-label="Show data for next face"
              onClick={() => {
                setIsFullCard(true);
              }}
            />
          </Flex>
        </Section>
      )}
    </Box>
  );
}

export default MobileQualityinfo;
