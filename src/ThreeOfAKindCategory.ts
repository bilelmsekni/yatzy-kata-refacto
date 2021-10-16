import { RollResult } from "./RollResult";

export function threeOfAKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const threeOfAKindValue = RollResult.init(d1, d2, d3, d4, d5).findValueWithAtLeastThreeAppearances();
    return threeOfAKindValue ? threeOfAKindValue * 3 : 0;
}