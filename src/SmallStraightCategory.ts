import { RollResult } from "./RollResult";

export function smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const isSmallStraight = RollResult
        .init(d1, d2, d3, d4, d5)
        .sortValues()
        .isEqualTo([1, 2, 3, 4, 5]);
    return isSmallStraight ? 15 : 0;
}