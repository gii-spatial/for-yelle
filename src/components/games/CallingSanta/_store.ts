import { atom } from "jotai";
import type { Ninang } from "./_interface";
import { RecordPrizeMoney } from "./_constants";

/**
 * Prize resolver
 */
const getPrize = (num: number): number => {
  return RecordPrizeMoney[num] || 0;
};

/**
 * ---- Store ----
 */
const playerAtom = atom<string>("");
const selectedNumberAtom = atom<number | null>(null);
const sendToAtom = atom<Ninang | null>(null);

const selectedPriceAtom = atom<number | null>((get) => {
  const num = get(selectedNumberAtom);
  if (num === null) return null;
  return getPrize(num);
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
