/*
A couple of Christmas enthusiasts have created a Christmas decoration company. The first decoration they want to manufacture is a cube that is placed on the trees.

The problem is that they have to program the machine and they don't know how to do it. They have asked us for help to achieve it.

To create the cubes, a number with the desired size is passed to the program and it returns a string with the design of that size. For example, if we pass a 3, the program must return a cube of 3x3x3:

const cube = createCube(3)

// output:
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
As you can see, the cube has three faces visually. The symbols used to build the cube faces are: /, \, _. In order to make the cube, some spaces are needed. Also, each line is separated by a new line character \n.

Other examples of cubes:

const cubeOfOne = createCube(1)

// output:

/\_\
\/_/

const cubeOfTwo = createCube(2)

// output:

 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/

Take into account:

Pay attention to the spaces in the cube.
The cube has to be symmetrical.
Make sure you use the correct symbols.
Each line must be separated by a new line character \n except for the last one.
Based on this Codewars kata


*/

function createCube(size) {
  const up = [],
    down = [];
  for (let i = 1; i <= size; i++) {
    up.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size));
    down.push(
      " ".repeat(i - 1) + "\\/".repeat(size - i + 1) + "_/".repeat(size)
    );
  }
  return up.concat(down).join("\n");
}

/*

SECOND SOLUTION

function createCube(size) {
  let cube = [];
  for (let x = size; x >= 1; x--) {
    cube.unshift(" ".repeat(size - x) + "/\\".repeat(x) + "_\\".repeat(size));
    cube.push(" ".repeat(size - x) + "\\/".repeat(x) + "_/".repeat(size));
  }
  return cube.join("\n");
}

THIRD SOLUTION

function createCube(size) {
  let up = "", down = "";

  for(let i=1; i <= size; i++) {
    up += (`/\\`).repeat(i).padStart(size+i);
    up += (`_\\`).repeat(size) + `\n`;
    down += (`\\/`).repeat(size-i+1).padStart(size+(size-i+1));
    down += (`_/`).repeat(size) + `\n`;
  }

  return up + down.slice(0, -1);
}

*/
