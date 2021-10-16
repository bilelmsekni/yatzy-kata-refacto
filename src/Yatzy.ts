import { chance } from "./ChanceCategory";
import { fives } from "./FivesCategory";
import { fourOfAKind } from "./FourOfAKindCategory";
import { fours } from "./FoursCategory";
import { fullHouse } from "./FullHouseCategory";
import { largeStraight } from "./LargeStraightCategory";
import { ones } from "./OnesCategory";
import { pair } from "./PairCategory";
import { sixes } from "./SixesCategory";
import { smallStraight } from "./SmallStraightCategory";
import { threeOfAKind } from "./ThreeOfAKindCategory";
import { threes } from "./ThreesCategory";
import { twoPairs } from "./TwoPairsCategory";
import { twos } from "./TwosCategory";
import { yatzy } from "./YatzyCategory";

export const enum CategoryEnum {
  Chance = 'chance',
  Yatzy = 'yatzy',
  Ones = 'ones',
  Twos = 'twos',
  Threes = 'threes',
  Fours = 'fours',
  Fives = 'fives',
  Sixes = 'sixes',
  Pair = 'pair',
  TwoPairs = 'twoPairs',
  ThreeOfAKind = 'threeOfAKind',
  fourOfAKind = 'fourOfAKind',
  smallStraight = 'smallStraight',
  largeStraight = 'largeStraight',
  fullHouse = 'fullHouse'
}

export class Yatzy {

  private static categoryDictionary: { [key in CategoryEnum]: (d1: number, d2: number, d3: number, d4: number, d5: number) => number } = {
    [CategoryEnum.Chance]: chance,
    [CategoryEnum.Yatzy]: yatzy,
    [CategoryEnum.Ones]: ones,
    [CategoryEnum.Twos]: twos,
    [CategoryEnum.Threes]: threes,
    [CategoryEnum.Fours]: fours,
    [CategoryEnum.Fives]: fives,
    [CategoryEnum.Sixes]: sixes,
    [CategoryEnum.Pair]: pair,
    [CategoryEnum.TwoPairs]: twoPairs,
    [CategoryEnum.ThreeOfAKind]: threeOfAKind,
    [CategoryEnum.fourOfAKind]: fourOfAKind,
    [CategoryEnum.smallStraight]: smallStraight,
    [CategoryEnum.largeStraight]: largeStraight,
    [CategoryEnum.fullHouse]: fullHouse,
  }

  static exec(category: CategoryEnum): (d1: number, d2: number, d3: number, d4: number, d5: number) => number {
    const categoryFn = this.categoryDictionary[category];
    if (categoryFn) {
      return categoryFn;
    }
    throw new Error(`unknown category: ${category})`);
  }
}
