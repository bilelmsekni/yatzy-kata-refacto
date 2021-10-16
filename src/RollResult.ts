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

    static sum(): number {
        if (!this.rollResult) throw new Error("RollResult has not been initialized, please use init method to initialize");
        return this.rollResult
            .reduce((acc, curr) => acc += curr, 0);
    }
}