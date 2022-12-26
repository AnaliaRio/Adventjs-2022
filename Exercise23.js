/*
We are testing a new CPU for the Santa Claus' sleigh. But we still have to program the software that will run on it.

The CPU has available 8 registers, which are named V00..V07. At the start of the program, all the registers contain 0. The CPU supports the following instructions:

MOV Vxx,Vyy: copies the value from register Vxx to register Vyy; MOV n,Vxx: assign the numeric constant n to register Vxx (overwrite if already has a value); ADD Vxx,Vyy: calculates (Vxx + Ryy) and stores the result in Vxx; DEC Vxx: decrements Vxx value by 1. INC Vxx: increments Vxx value by 1. JMP i: jumps to instruction number i if V00 is different to 0. i is guaranteed to be a valid instruction number and 0 would be the first command.

As the CPU is 8-bit, the number it could represent goes from 0 to 255. If you increment the number 255 causes overflow and results in 0. And if you decrement 0, it results in 255. Keep in mind then that number 280 is the same as 24 (280 - 256 = 24).

After the last instruction has been executed, you should return an array with the result for every register. From V00 to V07. Examples:

executeCommands([
  'MOV 5,V00',  // V00 is 5
  'MOV 10,V01', // V01 is 10
  'DEC V00',    // V00 is now 4
  'ADD V00,V01', // V00 = V00 + V01 = 14
])

// Output: [14, 10, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 255,V00', // V00 is 255
  'INC V00',     // V00 is 256, overflows to 0
  'DEC V01',     // V01 is -1, overflows to 255
  'DEC V01'      // V01 is 254
])
// Output: [0, 254, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 10,V00', // V00 is 10
  'DEC V00',    // decrement V00 by 1  <---┐
  'INC V01',    // increment V01 by 1      |
  'JMP 1',      // loop until V00 is 0 ----┘
  'INC V06'     // increment V06 by 1
])

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
All the commands provided are already validated and guaranteed to be correct.


Based on SpaceX technical interview from CodeSignal
*/

function executeCommands(commands) {
  const MAX_VALUE = 256;

  const run = (action, i) => {
    const [command, args] = action.split(" ");
    const commandArgs = args
      .split(",")
      .map((a) => a.replace(/V(\d+)/, (_, p1) => `V0${p1 % 8}`));
    actions[command](...commandArgs, i);
  };

  const registries = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0,
  };
  const actions = {
    MOV: (value, id) => {
      let r = +value;
      registries[id] = r;
      value[0] === "V" && (registries[id] = registries[value]);
    },
    ADD: (value1, value2) => {
      registries[value1] =
        (registries[value1] + registries[value2]) % MAX_VALUE;
    },
    DEC: (value1) => {
      registries[value1] = (registries[value1] - 1 + MAX_VALUE) % MAX_VALUE;
    },
    INC: (value1) => {
      registries[value1] = (registries[value1] + 1) % MAX_VALUE;
    },
    JMP: (i, idx) => {
      registries.V00 > 0 &&
        commands.slice(i, idx + 1).forEach((c) => run(c, idx));
    },
  };

  commands.forEach(run);

  return Object.values(registries);
}
