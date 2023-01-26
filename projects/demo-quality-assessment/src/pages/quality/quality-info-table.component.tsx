import {
  CustomDivider,
  Section,
  TextValueRow,
} from '@3divi/shared/src/components';
import { TExeQualityAssessmentResult } from '@3divi/shared/src/domains';
import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

type TQualityInfo = {
  data: TExeQualityAssessmentResult;
};

type TComponents = {
  [key: string]: () => JSX.Element;
};

type TAddElement = {
  value: boolean | number | string;
  text: string;
  unit?: string;
  info?: string;
};

const addElement = (values: TAddElement[]) => (
  <Box>
    <CustomDivider />
    {values.map(({ text, value, unit, info }) => (
      <TextValueRow
        key={text}
        text={text}
        value={value}
        unit={unit}
        info={info}
      />
    ))}
  </Box>
);

function QualityInfoTable({ data }: TQualityInfo): JSX.Element {
  const { t } = useTranslation('pages');

  const Components: TComponents = {
    isSharp: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isSharp.toString()}`
          ),
          text: t('Quality.Result.isSharp'),
        },
        {
          value: `${data.objects[0].quality.qaa.sharpnessScore}/100`,
          text: t('common:Score'),
        },
      ]),
    isNotNoisy: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${(!data.objects[0].quality.qaa
              .isNotNoisy).toString()}`
          ),
          text: t('Quality.Result.isNotNoisy'),
        },
        {
          value: `${data.objects[0].quality.qaa.noiseScore}/100`,
          text: t('common:Score'),
        },
      ]),
    isEvenlyIlluminated: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isEvenlyIlluminated.toString()}`
          ),
          text: t('Quality.Result.isEvenlyIlluminated'),
        },
        {
          value: `${data.objects[0].quality.qaa.illuminationScore}/100`,
          text: t('common:Score'),
        },
      ]),
    noFlare: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${(!data.objects[0].quality.qaa
              .noFlare).toString()}`
          ),
          text: t('Quality.Result.noFlare'),
        },
      ]),
    isLeftEyeOpened: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isLeftEyeOpened.toString()}`
          ),
          text: t('Quality.Result.isLeftEyeOpened'),
        },
        {
          value: `${data.objects[0].quality.qaa.leftEyeOpennessScore}/100`,
          text: t('common:Score'),
        },
      ]),
    isRightEyeOpened: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isRightEyeOpened.toString()}`
          ),
          text: t('Quality.Result.isRightEyeOpened'),
        },
        {
          value: `${data.objects[0].quality.qaa.rightEyeOpennessScore}/100`,
          text: t('common:Score'),
        },
      ]),
    isRotationAcceptable: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isRotationAcceptable.toString()}`
          ),
          text: t('Quality.Result.isRotationAcceptable'),
        },
        {
          value: data.objects[0].quality.qaa.maxRotationDeviation,
          text: t('Quality.Result.maxRotationDeviation'),
          unit: '°',
        },
      ]),
    notMasked: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.notMasked.toString()}`
          ),
          text: t('Quality.Result.notMasked'),
        },
        {
          value: `${data.objects[0].quality.qaa.notMaskedScore}/100`,
          text: t('common:Score'),
        },
      ]),
    isNeutralEmotion: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isNeutralEmotion.toString()}`
          ),
          text: t('Quality.Result.isNeutralEmotion'),
        },
        {
          value: `${data.objects[0].quality.qaa.neutralEmotionScore}/100`,
          text: t('common:Score'),
        },
      ]),
    isEyesDistanceAcceptable: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isEyesDistanceAcceptable.toString()}`
          ),
          text: t('Quality.Result.isEyesDistanceAcceptable'),
        },
        {
          value: data.objects[0].quality.qaa.eyesDistance,
          text: t('Quality.Result.eyesDistance'),
          unit: 'px',
        },
      ]),
    isMarginsAcceptable: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isMarginsAcceptable.toString()}`
          ),
          text: t('Quality.Result.isMarginsAcceptable'),
        },
        {
          value: data.objects[0].quality.qaa.marginInnerDeviation,
          text: t('Quality.Result.marginInnerDeviation'),
          unit: 'px',
        },
        {
          value: data.objects[0].quality.qaa.marginOuterDeviation,
          text: t('Quality.Result.marginOuterDeviation'),
          unit: 'px',
        },
      ]),
    hasWatermark: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.hasWatermark.toString()}`
          ),
          text: t('Quality.Result.hasWatermark'),
        },
        {
          value: `${data.objects[0].quality.qaa.watermarkScore}/100`,
          text: t('common:Score'),
        },
      ]),
    isBackgroundUniform: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isBackgroundUniform.toString()}`
          ),
          text: t('Quality.Result.isBackgroundUniform'),
        },
        {
          value: `${data.objects[0].quality.qaa.backgroundUniformityScore}/100`,
          text: t('common:Score'),
        },
      ]),
    isDynamicRangeAcceptable: () =>
      addElement([
        {
          value: t(
            `Quality.Result.${data.objects[0].quality.qaa.isDynamicRangeAcceptable.toString()}`
          ),
          text: t('Quality.Result.isDynamicRangeAcceptable'),
          info: t('Quality.Result.DynamicRangeInfo'),
        },
        {
          value: data.objects[0].quality.qaa.dynamicRangeScore,
          text: t('common:Score'),
        },
      ]),
  };

  return (
    <Section>
      <Box py={2}>
        <Flex justify="center" py={1.5}>
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
        </Flex>

        <CustomDivider />

        <TextValueRow
          fontSize="lg"
          fontWeight="semibold"
          text={t('Quality.Result.totalScore')}
          value={`${data.objects[0].quality.qaa.totalScore}`}
          unit="/100"
        />

        {Object.keys(Components).map((key) => (
          <React.Fragment key={key}>{Components[key]()}</React.Fragment>
        ))}
      </Box>
    </Section>
  );
}

export default QualityInfoTable;
