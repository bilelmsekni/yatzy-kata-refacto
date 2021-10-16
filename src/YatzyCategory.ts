import { RollResult } from "./RollResult";

export function yatzy(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const hasAValueAppearedFiveTimes = RollResult.init(d1, d2, d3, d4, d5).hasAValueAppearedFiveTimes();
    return hasAValueAppearedFiveTimes ? 50 : 0;
}