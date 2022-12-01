/*This year the elves have bought a gift wrapping machine. But... it's not programmed! We need to create an algorithm that helps it in the task.

The machine receives an array with the gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the * symbol and to wrap a gift the * symbol is placed so that it completely surrounds the string on all sides. For example:

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)

/* [
  "******\n*book*\n******",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

/*As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

Note:\n is the character that represents a line break.

Watch out!Make sure you put the right number of * to wrap completely the string.

Good luck!
*/

const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);

function wrapping(gifts) {
  return gifts.map((gift) => {
    return (
      "*".repeat(gift.length + 2) +
      "\n" +
      `*${gift}*` +
      "\n" +
      "*".repeat(gift.length + 2)
    );
  });
}
