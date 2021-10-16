import assert from 'assert';

import { Yatzy } from '../src/Yatzy';

describe('Chance category', () => {
  it('should score sum of all dice when player chooses chance category', () => {
    assert.strictEqual(15, Yatzy.chance(2, 3, 4, 5, 1));
    assert.strictEqual(16, Yatzy.chance(3, 3, 4, 5, 1));
  });
});

describe('Yatzy category', () => {
  it('should score 50 when all number are the same', () => {
    assert.strictEqual(50, Yatzy.yatzy(4, 4, 4, 4, 4));
    assert.strictEqual(50, Yatzy.yatzy(6, 6, 6, 6, 6));
  });

  it('should score 0 when all number are not the same', () => {
    assert.strictEqual(0, Yatzy.yatzy(6, 6, 6, 6, 3));
  });
});

describe('Ones category', () => {
  it('should score the sum of ones when player chooses ones category', () => {
    assert.strictEqual(1, Yatzy.ones(1, 2, 3, 4, 5));
    assert.strictEqual(2, Yatzy.ones(1, 2, 1, 4, 5));
    assert.strictEqual(4, Yatzy.ones(1, 2, 1, 1, 1));
  });

  it('should score 0 when player chooses ones category but no ones appear', () => {
    assert.strictEqual(0, Yatzy.ones(6, 2, 2, 4, 5));
  });
});

describe('Twos category', () => {
  it('should score the sum of twos when player chooses twos category', () => {
    assert.strictEqual(4, Yatzy.twos(1, 2, 3, 2, 6));
    assert.strictEqual(10, Yatzy.twos(2, 2, 2, 2, 2));
  });
  it('should score 0 when player chooses ones category but no twos appear', () => {
    assert.strictEqual(0, Yatzy.twos(6, 1, 1, 4, 5));
  });
});

describe('Threes category', () => {
  it('should score the sum of threes when player chooses threes category', () => {
    assert.strictEqual(6, Yatzy.threes(1, 2, 3, 2, 3));
    assert.strictEqual(12, Yatzy.threes(2, 3, 3, 3, 3));
  });

  it('should score 0 when player chooses threes category but no threes appear', () => {
    assert.strictEqual(0, Yatzy.threes(1, 2, 5, 2, 5));
  });
});

describe('Fours category', () => {
  it('should score the sum of fours when player chooses fours category', () => {
    assert.strictEqual(12, Yatzy.fours(4, 4, 4, 5, 5));
    assert.strictEqual(8, Yatzy.fours(4, 4, 5, 5, 5));
    assert.strictEqual(4, Yatzy.fours(4, 5, 5, 5, 5));
  });
  it('should score 0 when player chooses fours category but no fours appear', () => {
    assert.strictEqual(0, Yatzy.fours(6, 2, 1, 5, 5));
  });
});

describe('Fives category', () => {
  it('should score the sum of fives when player chooses fives category', () => {
    assert.strictEqual(10, Yatzy.fives(4, 4, 4, 5, 5));
    assert.strictEqual(15, Yatzy.fives(4, 4, 5, 5, 5));
    assert.strictEqual(20, Yatzy.fives(4, 5, 5, 5, 5));
  });

  it('should score 0 when player chooses fives category but no fives appear', () => {
    assert.strictEqual(0, Yatzy.fives(4, 4, 4, 3, 2));
  });
});

describe('Sixes category', () => {
  it('should score the sum of sixes when player chooses sixes category', () => {
    assert.strictEqual(6, Yatzy.sixes(4, 4, 6, 5, 5));
    assert.strictEqual(18, Yatzy.sixes(6, 5, 6, 6, 5));
  });
  it('should score 0 when player chooses sixes category but no sixes appear', () => {
    assert.strictEqual(0, Yatzy.sixes(4, 4, 4, 5, 5));
  });
});

describe('Pair category', () => {
  it('should score the sum of the highest pair when user chooses pair category', () => {
    assert.strictEqual(6, Yatzy.pair(3, 4, 3, 5, 6));
    assert.strictEqual(10, Yatzy.pair(5, 3, 3, 3, 5));
    assert.strictEqual(12, Yatzy.pair(5, 3, 6, 6, 5));
  });
  it('should scores 0 when user chooses pair category but no pair appears', () => {
    assert.strictEqual(0, Yatzy.pair(3, 4, 1, 5, 6));
  });
});

describe('Two pairs category', () => {
  it('should score the sum of the two pairs when player chooses two pairs category', () => {
    assert.strictEqual(16, Yatzy.twoPairs(3, 3, 5, 4, 5));
    assert.strictEqual(16, Yatzy.twoPairs(3, 3, 5, 5, 5));

  });
  it('should score 0 when player chooses two pairs category but no two pairs appear', () => {
    assert.strictEqual(0, Yatzy.twoPairs(3, 1, 5, 4, 5));
    assert.strictEqual(0, Yatzy.twoPairs(3, 2, 6, 4, 5));
    assert.strictEqual(0, Yatzy.twoPairs(3, 3, 3, 3, 5));
  });
});

describe('Three of a kind category', () => {
  it('should score the sum of the three of a kind when player chooses three of a kind', () => {
    assert.strictEqual(9, Yatzy.threeOfAKind(3, 3, 3, 4, 5));
    assert.strictEqual(15, Yatzy.threeOfAKind(5, 3, 5, 4, 5));
    assert.strictEqual(9, Yatzy.threeOfAKind(3, 3, 3, 3, 5));
  });
  it('should score 0 when player chooses three of a kind but no three of a kind appear', () => {
    assert.strictEqual(0, Yatzy.threeOfAKind(3, 2, 3, 4, 5));
  });
});

describe('Four of a kind category', () => {
  it('should score the sum of the four of a kind when player chooses four of a kind', () => {
    assert.strictEqual(12, Yatzy.fourOfAKind(3, 3, 3, 3, 5));
    assert.strictEqual(20, Yatzy.fourOfAKind(5, 5, 5, 4, 5));
    assert.strictEqual(9, Yatzy.threeOfAKind(3, 3, 3, 3, 3));
  });
  it('should score 0 of a kind when player chooses four of a kind but no four of a kind appear', () => {
    assert.strictEqual(0, Yatzy.fourOfAKind(3, 1, 3, 3, 5));
    assert.strictEqual(0, Yatzy.fourOfAKind(5, 2, 2, 4, 5));
    assert.strictEqual(0, Yatzy.threeOfAKind(3, 2, 1, 4, 5));
  });
});

describe('Small straight category', () => {
  it('should score 15 when player chooses small straight category', () => {
    assert.strictEqual(15, Yatzy.smallStraight(1, 2, 3, 4, 5));
    assert.strictEqual(15, Yatzy.smallStraight(2, 3, 4, 5, 1));
  });
  it('should score 0 when player chooses small straight category but no small straight appear', () => {
    assert.strictEqual(0, Yatzy.smallStraight(1, 2, 2, 4, 5));
    assert.strictEqual(0, Yatzy.smallStraight(2, 3, 4, 5, 6));
  });
});

describe('Large straight category', () => {
  it('should score 20 when player chooses large straight category', () => {
    assert.strictEqual(20, Yatzy.largeStraight(6, 2, 3, 4, 5));
    assert.strictEqual(20, Yatzy.largeStraight(2, 3, 4, 5, 6));
  });
  it('should score 0 when player chooses large straight category but no large straight appear', () => {
    assert.strictEqual(0, Yatzy.largeStraight(1, 2, 2, 4, 5));
  });
});

describe('Full house category', () => {
  it('should score the sum of the full house when player chooses full house category', () => {
    assert.strictEqual(18, Yatzy.fullHouse(6, 2, 2, 2, 6));
    assert.strictEqual(18, Yatzy.fullHouse(2, 2, 2, 6, 6));
  });
  it('should score the sum of the full house when player chooses full house category but no full house appears', () => {
    assert.strictEqual(0, Yatzy.fullHouse(2, 3, 4, 5, 6));
    assert.strictEqual(0, Yatzy.fullHouse(2, 6, 4, 5, 6));
    assert.strictEqual(0, Yatzy.fullHouse(2, 6, 4, 6, 6));
    assert.strictEqual(0, Yatzy.fullHouse(6, 6, 6, 5, 6));
    assert.strictEqual(0, Yatzy.fullHouse(6, 6, 6, 6, 6));
  });
});
