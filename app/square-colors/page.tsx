import { Metadata } from 'next';
import SquareColors from '@/pages/SquareColors';

export const metadata: Metadata = {
  title: 'Square Colors',
};

const SquareColorsPage = () => {
  return <SquareColors />;
};

export default SquareColorsPage;
