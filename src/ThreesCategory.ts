import { RollResult } from "./RollResult";

export function threes(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return RollResult
        .init(d1, d2, d3, d4, d5)
        .filterNumbersBy(3)
        .sum();
}