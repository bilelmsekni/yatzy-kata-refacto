import { RollResult } from "./RollResult";

export class Yatzy {

  static chance(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return d1 + d2 + d3 + d4 + d5;
  }

  static yatzy(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const appearancesByDiceValues = [d1, d2, d3, d4, d5].reduce((acc: { [key: number]: number }, curr: number) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
    return Object.values(appearancesByDiceValues).includes(5) ? 50 : 0;
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
    const appearancesByDiceValues = [d1, d2, d3, d4, d5].reduce((acc: { [key: number]: number }, curr: number) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {} as { [key: number]: number });

    const highestPair = Object.keys(appearancesByDiceValues)
      .map(key => +key)
      .filter(key => appearancesByDiceValues[key] >= 2)
      .sort((a, b) => b - a)
      .shift()
    return highestPair ? highestPair * 2 : 0;
  }

  static twoPairs(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const appearancesByDiceValues = [d1, d2, d3, d4, d5].reduce((acc: { [key: number]: number }, curr: number) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {} as { [key: number]: number });

    const highestPairs = Object.keys(appearancesByDiceValues)
      .map(key => +key)
      .filter(key => appearancesByDiceValues[key] >= 2)
      .sort((a, b) => b - a);
    if (highestPairs.length >= 2) {
      const [firstPair, secondPair,] = highestPairs;
      return firstPair * 2 + secondPair * 2;
    }
    return 0;
  }

  static threeOfAKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const appearancesByDiceValues = [d1, d2, d3, d4, d5].reduce((acc: { [key: number]: number }, curr: number) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {} as { [key: number]: number });

    const threeOfAKindKey = Object.keys(appearancesByDiceValues)
      .map(key => +key)
      .filter(key => appearancesByDiceValues[key] >= 3)
      .shift();

    return threeOfAKindKey ? threeOfAKindKey * 3 : 0;
  }

  static fourOfAKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const appearancesByDiceValues = [d1, d2, d3, d4, d5].reduce((acc: { [key: number]: number }, curr: number) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {} as { [key: number]: number });

    const fourOfAKindKey = Object.keys(appearancesByDiceValues)
      .map(key => +key)
      .filter(key => appearancesByDiceValues[key] >= 4)
      .shift();

    return fourOfAKindKey ? fourOfAKindKey * 4 : 0;
  }

  static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const appearancesByDiceValues = [d1, d2, d3, d4, d5].reduce((acc: { [key: number]: number }, curr: number) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {} as { [key: number]: number });
    const areAllValuesAppearedOnce = Object.values(appearancesByDiceValues).every(appearances => appearances === 1);
    const hasSixValueAppeared = Object.keys(appearancesByDiceValues).map(key => +key).includes(6);
    return areAllValuesAppearedOnce && !hasSixValueAppeared ? 15 : 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const appearancesByDiceValues = [d1, d2, d3, d4, d5].reduce((acc: { [key: number]: number }, curr: number) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {} as { [key: number]: number });
    const areAllValuesAppearedOnce = Object.values(appearancesByDiceValues).every(appearances => appearances === 1);
    const hasOneValueAppeared = Object.keys(appearancesByDiceValues).map(key => +key).includes(1);
    return areAllValuesAppearedOnce && !hasOneValueAppeared ? 20 : 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const appearancesByDiceValues = [d1, d2, d3, d4, d5].reduce((acc: { [key: number]: number }, curr: number) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {} as { [key: number]: number });
    const diceValuesAppearedTwice = Object.keys(appearancesByDiceValues).map(key => +key).filter(key => appearancesByDiceValues[key] === 2).shift();
    const diceValuesAppearedThrice = Object.keys(appearancesByDiceValues).map(key => +key).filter(key => appearancesByDiceValues[key] === 3).shift();
    if (diceValuesAppearedTwice && diceValuesAppearedThrice) {
      return diceValuesAppearedTwice * 2 + diceValuesAppearedThrice * 3;
    }
    return 0;
  }
}
