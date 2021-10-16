import { RollResult } from "./RollResult";

export function pair(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const [highestPair,] = RollResult.init(d1, d2, d3, d4, d5).findHighestPairs();
    return highestPair ? highestPair * 2 : 0;
}