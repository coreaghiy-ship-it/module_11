function getPercents(percent, number) {
  if (typeof percent !== 'number' || typeof number !== 'number') {
    throw new TypeError('percent and number must be numbers');
  }

  if (Number.isNaN(percent) || Number.isNaN(number)) {
    throw new TypeError('percent and number must be numbers');
  }

  return (percent / 100) * number;
}

module.exports = getPercents;
