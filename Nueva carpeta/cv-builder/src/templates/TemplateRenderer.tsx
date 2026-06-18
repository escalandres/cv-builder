import type { CV } from '../data/cv.model';
import StandardCV from './StandardCV';
import HarvardCV  from './HarvardCV';
import EuropassCV from './EuropassCV';

const TEMPLATE_COMPONENTS: Record<string, React.ComponentType<{ cv: CV }>> = {
  standard: StandardCV,
  harvard:  HarvardCV,
  europass: EuropassCV,
};

interface Props {
  cv: CV;
}

export default function TemplateRenderer({ cv }: Props) {
  const Template = TEMPLATE_COMPONENTS[cv.template] ?? StandardCV;
  return <Template cv={cv} />;
}
