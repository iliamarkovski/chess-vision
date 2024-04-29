import { notation } from '@/constants/notation';

const findByAxis = (x: number, y: number) => {
  return notation.find((item) => item.x === x && item.y === y)!.name;
};

export const possibleMoves = (move: string) => {
  const moves: string[] = [];

  const { x, y } = notation.find((item) => item.name === move?.toLowerCase())!;

  let possibleMove;

  if (x + 2 <= 8 && y + 1 <= 8) {
    possibleMove = findByAxis(x + 2, y + 1);
    moves.push(possibleMove);
  }

  if (x - 2 >= 1 && y + 1 <= 8) {
    possibleMove = findByAxis(x - 2, y + 1);
    moves.push(possibleMove);
  }

  if (x + 1 <= 8 && y + 2 <= 8) {
    possibleMove = findByAxis(x + 1, y + 2);
    moves.push(possibleMove);
  }

  if (x - 1 >= 1 && y + 2 <= 8) {
    possibleMove = findByAxis(x - 1, y + 2);
    moves.push(possibleMove);
  }

  if (x + 2 <= 8 && y - 1 >= 1) {
    possibleMove = findByAxis(x + 2, y - 1);
    moves.push(possibleMove);
  }

  if (x - 2 >= 1 && y - 1 >= 1) {
    possibleMove = findByAxis(x - 2, y - 1);
    moves.push(possibleMove);
  }

  if (x + 1 <= 8 && y - 2 >= 1) {
    possibleMove = findByAxis(x + 1, y - 2);
    moves.push(possibleMove);
  }

  if (x - 1 >= 1 && y - 2 >= 1) {
    possibleMove = findByAxis(x - 1, y - 2);
    moves.push(possibleMove);
  }

  return moves.sort();
};
