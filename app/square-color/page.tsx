import { Metadata } from 'next';
import { ColorGuesser } from '@/components/ColorGuesser/ColorGuesser';

export const metadata: Metadata = {
  title: 'Square Colors',
};

const SquareColorsPage = () => {
  return <ColorGuesser />;
};

export default SquareColorsPage;
