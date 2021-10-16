import { RollResult } from "./RollResult";


export function largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const isLargeStraight = RollResult
        .init(d1, d2, d3, d4, d5)
        .sortValues()
        .isEqualTo([2, 3, 4, 5, 6]);
    return isLargeStraight ? 20 : 0;
}