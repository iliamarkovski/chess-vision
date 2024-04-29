import { Metadata } from 'next';
import KnightMoves from '@/components/KnightMoves/KnightMoves';

export const metadata: Metadata = {
  title: 'Knight Moves',
};

const KnightMovesPage = () => {
  return <KnightMoves />;
};

export default KnightMovesPage;
