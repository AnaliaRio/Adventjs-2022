/*
A company that manufactures Christmas lights has asked us to help them.

They have led strips that are like an Array. Each position is a led and can be on (1) or off (0).

Every 7 seconds, the leds change state in this way:

- If the led is off, it turns on if the led on its left (index - 1) was on before.
- If the led is on, it remains on.

They asked us for a program that tells us how many seconds it takes for all the leds to turn on. The seconds are expressed as an integer. For example:

const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

Keep in mind:

- The array will always have at least one led on.
- The array can have any length.
- If all the leds are on, the time is 0.
*/

const leds = [0, 1, 1, 0, 1];
countTime(leds); // 7

countTime([0, 0, 0, 1]); // 21

countTime([0, 0, 1, 0, 0]); // 28

function countTime(leds) {
  const ledsNotOn = leds.join("").split("1");
  const firstAndLastLength =
    ledsNotOn[0].length + ledsNotOn[ledsNotOn.length - 1].length;
  return (
    Math.max(...ledsNotOn.map((led) => led.length), firstAndLastLength) * 7
  );
}

/*
SECOND SOLUTION

function countTime(leds) {
  const lowLeds = leds
    .join('')
    .split('1')
    .map((led) => led.length)
  lowLeds[0] += lowLeds.at(-1)
  const sortLed = lowLeds.sort((a, b) => b - a)
  return sortLed[0] * 7
}

THIRD SOLUTION

function countTime(leds) {
  return leds.join('').repeat(2).split('1').sort().pop().length * 7
}

FOURTH SOLUTION

function countTime(leds) {
  const zeros = leds
    .join('')
    .split('1')
    .map(z => z.length)
  zeros[0] += zeros.pop()
  return Math.max(...zeros) * 7
}

FIFTH SOLUTION

function countTime(leds) {
  const doubleStrip = leds.join('').repeat(2);
  const zeros = doubleStrip.split('1')
  return zeros.reduce (( max, str ) => Math.max ( max, str.length ), 0) * 7;
}

SIXTH SOLUTION 

function countTime(leds) {
  const joined = leds.join('').split('1')
  joined[0] += joined.pop()
  joined.sort((a, b) => b.length - a.length);
  return joined[0].length * 7
}

*/
