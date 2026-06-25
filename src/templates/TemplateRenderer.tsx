import type { ComponentType } from 'react';
import type { CV, CVTemplate } from '../types/cv.types';

import StandardCV from './StandardCV';
import HarvardCV from './HarvardCV';
import EuropassCV from './EuropassCV';
import ModernCV from './ModernCV';
import MinimalistCV  from './MinimalistCV';
import AcademicCV from './AcademicCV';

const TEMPLATE_COMPONENTS: Record<CVTemplate, ComponentType<{ cv: CV }>> = {
  standard: StandardCV,
  harvard: HarvardCV,
  europass: EuropassCV,
  modern: ModernCV,
  minimalist: MinimalistCV,
  academic: AcademicCV,
};

interface Props {
  cv: CV;
}

export default function TemplateRenderer({ cv }: Props) {

  const Template =
    TEMPLATE_COMPONENTS[cv.template] ??
    StandardCV;

  return <Template cv={cv} />;

}
