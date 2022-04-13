const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strOfNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  const convertedNums = [];
  const splitNums = strOfNums.split(',');

  for (let num of splitNums) {
      if (isNaN(parseInt(num))) {
          throw new BadRequestError(`${num} is not a number`);
      } else {
          convertedNums.push(parseInt(num));
      }
  }
  return convertedNums;
}

module.exports = { convertStrNums };