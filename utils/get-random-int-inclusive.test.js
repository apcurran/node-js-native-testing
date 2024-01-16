"use strict";

const { describe, it } = require("node:test");
const assert = require("node:assert");
const { getRandomIntInclusive } = require("../utils/get-random-int-inclusive");

describe("Get random integer function", () => {
    it("should get a value of 5", () => {
        const myTestValue = getRandomIntInclusive(5, 5);
        assert.strictEqual(myTestValue, 5);
    });

    it("should get a value of 10", () => {
        const myTestValue = getRandomIntInclusive(10, 10);
        assert.strictEqual(myTestValue, 10);
    });
});
