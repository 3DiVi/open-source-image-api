import { useTranslation } from 'react-i18next';
import { Flex } from '@chakra-ui/react';
import {
  useBaseLogic,
  PageContentLayout,
  DragAndDropBox,
  SelectFileButton,
  OpenWebcamModalButton,
  Photo,
} from '@3divi/shared/src/components';
import { TExeQualityAssessmentResult } from '@3divi/shared/src/domains';
import QualityInfo from './quality-info.component';
import { useQualityAssessment } from './use-quality-assessment.hook';
import useQualityMarkup from './use-quality-markup.hook';

export function QualityPage(): JSX.Element {
  const { t } = useTranslation('pages');
  const { getQualityAssessment, loading, error } = useQualityAssessment();
  const {
    imageSrc,
    setImage,
    takePhotoViaWebcam,
    loading: qualityLoading,
    responseData,
  } = useBaseLogic<TExeQualityAssessmentResult>({
    query: getQualityAssessment,
    loading,
    error,
  });

  const { showQuaityMarkup } = useQualityMarkup({
    data: responseData,
  });

  const width = ['280px', '400px', '450px', null, '512px'];

  return (
    <PageContentLayout
      mainContent={
        <DragAndDropBox
          loading={loading}
          width={width}
          onFileAction={setImage}
          buttons={
            <Flex w="full" justifyContent="center" gap={2}>
              <SelectFileButton
                isDisabled={loading}
                selectFileAction={setImage}
                text={t('common:Upload')}
              />

              <OpenWebcamModalButton
                isDisabled={loading}
                takePhotoViaWebcam={takePhotoViaWebcam}
                text={t('components:DragAndDropImage.TakePhoto')}
              />
            </Flex>
          }
        >
          {imageSrc ? (
            <Photo
              width={width}
              imageSrc={imageSrc}
              isLoading={qualityLoading}
              renderComponets={showQuaityMarkup}
            />
          ) : undefined}
        </DragAndDropBox>
      }
      resultSection={
        responseData ? <QualityInfo data={responseData} /> : undefined
      }
    />
  );
}
