import { RollResult } from "./RollResult";

export function fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const rollResult = RollResult.init(d1, d2, d3, d4, d5);
    const diceValuesAppearedTwice = rollResult.findValueWithTwoAppearances();
    const diceValuesAppearedThrice = rollResult.findValueWithThreeAppearances();
    if (diceValuesAppearedTwice && diceValuesAppearedThrice && diceValuesAppearedTwice != diceValuesAppearedThrice) {
        return diceValuesAppearedTwice * 2 + diceValuesAppearedThrice * 3;
    }
    return 0;
}