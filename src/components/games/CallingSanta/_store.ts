import { atom } from "jotai";
import type { Ninang } from "./_interface";
import { PrizePool } from "./_constants";

/**
 * Prize resolver
 * @deprecated
 */
// const getPrize = (num: number): number => {
//   return RecordPrizeMoney[num] || 0;
// };

/**
 * ---- Store ----
 */
const playerAtom = atom<string>("");
const selectedNumberAtom = atom<number | null>(null);
const sendToAtom = atom<Ninang | null>(null);

const selectedPriceAtom = atom<number | null>((get) => {
  const num = get(selectedNumberAtom);
  if (num === null) return null;

  // Randomly select a prize from the prize pool
  const randomPrize = PrizePool[Math.floor(Math.random() * PrizePool.length)];
  return randomPrize;
});

/**
 * Exported store
 */
const CSGameStore = {
  player: playerAtom,
  sendTo: sendToAtom,
  selectedNumber: selectedNumberAtom,
  selectedPrice: selectedPriceAtom,
};

export default CSGameStore;
