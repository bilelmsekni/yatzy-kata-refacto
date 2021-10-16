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

  static two_pair(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1 - 1]++;
    counts[d2 - 1]++;
    counts[d3 - 1]++;
    counts[d4 - 1]++;
    counts[d5 - 1]++;
    var n = 0;
    var score = 0;
    for (let i = 0; i < 6; i += 1)
      if (counts[6 - i - 1] >= 2) {
        n++;
        score += 6 - i;
      }
    if (n == 2) return score * 2;
    else return 0;
  }

  static four_of_a_kind(_1: number, _2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[_1 - 1]++;
    tallies[_2 - 1]++;
    tallies[d3 - 1]++;
    tallies[d4 - 1]++;
    tallies[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
    return 0;
  }

  static three_of_a_kind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var t;
    t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    t[d1 - 1]++;
    t[d2 - 1]++;
    t[d3 - 1]++;
    t[d4 - 1]++;
    t[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (t[i] >= 3) return (i + 1) * 3;
    return 0;
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
