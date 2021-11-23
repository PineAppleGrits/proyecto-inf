function formatNumber(number) {
  const formattedNumber = number.toLocaleString('en-US', {
    minimumIntegerDigits: 4,
    useGrouping: false,
  });

  return formattedNumber;
}
function generateRandom(min, max, failOn) {
  const ignoreArr = Array.isArray(failOn) ? failOn : [failOn];

  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return ignoreArr.includes(num) ? generateRandom(min, max, ignoreArr) : num;
}

module.exports.formatNumber = formatNumber;
module.exports.generateRandom = generateRandom;
