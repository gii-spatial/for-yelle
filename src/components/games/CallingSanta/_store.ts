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
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
};

/**
 * Prize resolver
 */
const getPrize = (num: number): number => {
  // Fixed prizes for 1–5
  if (num >= 1 && num <= 5) {
    return RecordPrizeMoney[num];
  }

  // Randomized prizes for 0, 6–9
  if (num === 0 || (num >= 6 && num <= 9)) {
    return PrizeMoney[Math.floor(Math.random() * PrizeMoney.length)];
  }

  throw new Error(`Invalid number: ${num}`);
};

/**
 * ---- Store ----
 */

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
  selectedNumber: selectedNumberAtom,
  selectedPrice: selectedPriceAtom,
};

export default CSGameStore;
