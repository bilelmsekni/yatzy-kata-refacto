export class RollResult {
    private static rollResult: number[];

    static init(d1: number, d2: number, d3: number, d4: number, d5: number): typeof RollResult {
        this.rollResult = [d1, d2, d3, d4, d5];
        return this;
    }

    static filterNumbersBy(filter: number): typeof RollResult {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        this.rollResult = this.rollResult.filter(n => n === filter);
        return this;
    }

    static hasAValueAppearedFiveTimes(): boolean {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        const appearancesByDiceValues = this.countAppearancesByDiceValue(this.rollResult);
        return Object.values(appearancesByDiceValues).includes(5);
    }

    static findValueWithTwoAppearances(): number | undefined {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        return this.findValueWithAppearanceCountCondition(appearances => appearances == 2, this.rollResult);
    }

    static findValueWithThreeAppearances(): number | undefined {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        return this.findValueWithAppearanceCountCondition(appearances => appearances == 3, this.rollResult);
    }

    static findValueWithAtLeastThreeAppearances(): number | undefined {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        return this.findValueWithAppearanceCountCondition(appearances => appearances >= 3, this.rollResult);
    }

    static findValueWithAtLeastFourAppearances(): number | undefined {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        return this.findValueWithAppearanceCountCondition(appearances => appearances >= 4, this.rollResult);
    }

    static findHighestPairs(): number[] {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        const appearancesByDiceValues = this.countAppearancesByDiceValue(this.rollResult);
        return Object.keys(appearancesByDiceValues)
            .map(key => +key)
            .filter(key => appearancesByDiceValues[key] >= 2)
            .sort((a, b) => b - a);
    }

    static sortValues(): typeof RollResult {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        this.rollResult = this.rollResult.sort();
        return this;
    }

    static isEqualTo(array: number[]): boolean {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        return this.rollResult.length === array?.length && !this.rollResult.some((rr, i) => rr !== array[i]);
    }

    static sum(): number {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        return this.rollResult
            .reduce((acc, curr) => acc += curr, 0);
    }

    private static findValueWithAppearanceCountCondition(countConditionFn: (appearances: number) => boolean, array: number[]): number | undefined {
        const appearancesByDiceValues = this.countAppearancesByDiceValue(array);
        return Object.keys(appearancesByDiceValues)
            .map(key => +key)
            .filter(key => countConditionFn(appearancesByDiceValues[key]))
            .shift();
    }

    private static countAppearancesByDiceValue(array: number[]): { [key: number]: number } {
        const appearancesByDiceValues = array.reduce((acc: { [key: number]: number }, curr: number) => {
            if (acc[curr]) {
                acc[curr]++;
            } else {
                acc[curr] = 1;
            }
            return acc;
        }, {});;
        return appearancesByDiceValues;
    }
}