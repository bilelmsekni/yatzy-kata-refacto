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
    return this.filterNumbersByThenCalculateSum(1, d1, d2, d3, d4, d5)
  }

  static twos(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return this.filterNumbersByThenCalculateSum(2, d1, d2, d3, d4, d5)
  }

  static threes(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return this.filterNumbersByThenCalculateSum(3, d1, d2, d3, d4, d5)
  }

  static fours(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return this.filterNumbersByThenCalculateSum(4, d1, d2, d3, d4, d5)
  }

  static fives(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return this.filterNumbersByThenCalculateSum(5, d1, d2, d3, d4, d5)
  }

  static sixes(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return this.filterNumbersByThenCalculateSum(6, d1, d2, d3, d4, d5)
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
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1) return 15;
    return 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) return 20;
    return 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    var _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    else return 0;
  }

  private static filterNumbersByThenCalculateSum(filter: number, d1: number, d2: number, d3: number, d4: number, d5: number): number {
    return [d1, d2, d3, d4, d5]
      .filter(n => n === filter)
      .reduce((acc, curr) => acc += curr, 0);
  }
}
