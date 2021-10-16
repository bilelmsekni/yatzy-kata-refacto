import { RollResult } from "./RollResult";

export class Yatzy {

  static chance(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return RollResult.init(d1, d2, d3, d4, d5).sum();
  }

  static yatzy(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const hasAValueAppearedFiveTimes = RollResult.init(d1, d2, d3, d4, d5).hasAValueAppearedFiveTimes();
    return hasAValueAppearedFiveTimes ? 50 : 0;
  }

  static ones(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return RollResult
      .init(d1, d2, d3, d4, d5)
      .filterNumbersBy(1)
      .sum();
  }

  static twos(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return RollResult
      .init(d1, d2, d3, d4, d5)
      .filterNumbersBy(2)
      .sum();
  }

  static threes(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return RollResult
      .init(d1, d2, d3, d4, d5)
      .filterNumbersBy(3)
      .sum();
  }

  static fours(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return RollResult
      .init(d1, d2, d3, d4, d5)
      .filterNumbersBy(4)
      .sum();
  }

  static fives(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return RollResult
      .init(d1, d2, d3, d4, d5)
      .filterNumbersBy(5)
      .sum();
  }

  static sixes(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return RollResult
      .init(d1, d2, d3, d4, d5)
      .filterNumbersBy(6)
      .sum();
  }

  static pair(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const [highestPair,] = RollResult.init(d1, d2, d3, d4, d5).findHighestPairs();
    return highestPair ? highestPair * 2 : 0;
  }

  static twoPairs(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const highestPairs = RollResult.init(d1, d2, d3, d4, d5).findHighestPairs();
    if (highestPairs.length >= 2) {
      const [firstPair, secondPair,] = highestPairs;
      return firstPair * 2 + secondPair * 2;
    }
    return 0;
  }

  static threeOfAKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const threeOfAKindValue = RollResult.init(d1, d2, d3, d4, d5).findValueWithAtLeastThreeAppearances();
    return threeOfAKindValue ? threeOfAKindValue * 3 : 0;
  }

  static fourOfAKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const fourOfAKindKey = RollResult.init(d1, d2, d3, d4, d5).findValueWithAtLeastFourAppearances();
    return fourOfAKindKey ? fourOfAKindKey * 4 : 0;
  }

  static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const isSmallStraight = RollResult
      .init(d1, d2, d3, d4, d5)
      .sortValues()
      .isEqualTo([1, 2, 3, 4, 5]);
    return isSmallStraight ? 15 : 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const isLargeStraight = RollResult
      .init(d1, d2, d3, d4, d5)
      .sortValues()
      .isEqualTo([2, 3, 4, 5, 6]);
    return isLargeStraight ? 20 : 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const rollResult = RollResult.init(d1, d2, d3, d4, d5);
    const diceValuesAppearedTwice = rollResult.findValueWithTwoAppearances();
    const diceValuesAppearedThrice = rollResult.findValueWithAtLeastThreeAppearances();
    if (diceValuesAppearedTwice && diceValuesAppearedThrice && diceValuesAppearedTwice != diceValuesAppearedThrice) {
      return diceValuesAppearedTwice * 2 + diceValuesAppearedThrice * 3;
    }
    return 0;
  }
}
