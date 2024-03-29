"use strict";

/**
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomIntInclusive(min, max) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

module.exports = {
    getRandomIntInclusive,
};
