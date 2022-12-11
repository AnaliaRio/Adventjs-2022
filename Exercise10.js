/*
Create a program that checks if Santa's sleigh makes a parabola jump between cities. You receive a number array that represents the height at which the sleigh is at each moment.

For the parabola to be correct, the sleigh's trip must be ascending at the beginning and descending at the end. It cannot go up again once it has gone down, nor can it start the trip going down. Let's see some examples:

const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true

/*
It's `true`.
The jump goes up-down.

    8 (highest point)
   ↗ ↘
  3   5
 ↗     ↘
1       2


const heights = [1, 7, 3, 5]
checkJump(heights) // false


It's `false`.
It goes up-down-up.

  7   5 
 ↗ ↘ ↗
1   3

We need the program to return a boolean that indicates whether the sleigh makes a parabola or not.

Things to keep in mind:

- The jump is valid if it goes up once and down once. If the sleigh stays at the same height between two positions, the parabola continues.
- It is not necessary for the starting and ending points to be the same (cities can be at different heights).
*/
function checkJump(heights) {
  let r = heights.reverse().findIndex((val, i) => val > heights[i + 1]);
  let l = heights.reverse().findIndex((val, i) => val > heights[i + 1]);
  r = heights.length - r - 1;
  return l !== -1 && r !== -1 && r <= l;
}

const heights = [1, 3, 8, 5, 2];
checkJump(heights); // true

const heights = [1, 7, 3, 5];
checkJump(heights); // false

/*
SECOND SOLUTION

function checkJump(heights) {
  const maxVal = Math.max(...heights);
  const indexValue = heights.indexOf(maxVal);
  const major = heights.slice(0, indexValue);
  const minor = heights.slice(indexValue + 1);
  const minorEval = minor.slice(1).every((item, idx) => item <= minor[idx]);
  const majorEval = major.slice(1).every((item, idx) => item >= major[idx]);
  return major.length > 0 && minor.length > 0 && minorEval && majorEval;
}

THIRD SOLUTION

function checkJump(heights) {
  const dict = { '0': '', '-1': 'd', '1': 'u' };
  const str = heights
    .slice(1)
    .reduce((acc, h, i) => acc + dict[Math.sign(h - heights[i])], '');
  return !!str.match(/^[u]+[d]+$/g);
}

FOURTH SOLUTION

function checkJump(heights) {
  return /^N[1-9]+0*(\-)+$/.test(
    heights
      .filter((val, indx, arr) => indx === 0 || val !== arr[indx - 1])
      .map((val, indx, arr) => (val - arr[indx - 1]).toString()[0])
      .join("")
  );
}
*/
