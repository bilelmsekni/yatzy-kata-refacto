import { RollResult } from "./RollResult";

export function twoPairs(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const highestPairs = RollResult.init(d1, d2, d3, d4, d5).findHighestPairs();
    if (highestPairs.length >= 2) {
        const [firstPair, secondPair,] = highestPairs;
        return firstPair * 2 + secondPair * 2;
    }
    return 0;
}