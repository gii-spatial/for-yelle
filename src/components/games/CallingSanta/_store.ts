import { atom } from "jotai";

/**
 * Constants
 */

export const DEF_NUMBERS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [null, 0, null],
];

export const PrizeMoney = [100, 200, 300, 400, 500] as const;

export const RecordPrizeMoney: Record<number, number> = {
  1: 50,
  2: 200,
  3: 500,
  4: 50,
  5: 1000,
  6: 100,
  7: 500,
  8: 1000,
  9: 200,
  0: 100,
};

/**
 * Prize resolver
 */
const getPrize = (num: number): number => {
  if (num > 9) throw new Error(`Invalid number: ${num}`);
  return RecordPrizeMoney[num];
};

/**
 * ---- Store ----
 */

const userAtom = atom<string>("");
const selectedNumberAtom = atom<number | null>(null);

const selectedPriceAtom = atom<number | null>((get) => {
  const num = get(selectedNumberAtom);
  if (num === null) return null;
  return getPrize(num);
});

/**
 * Exported store
 */
const CSGameStore = {
  user: userAtom,
  selectedNumber: selectedNumberAtom,
  selectedPrice: selectedPriceAtom,
};

export default CSGameStore;
