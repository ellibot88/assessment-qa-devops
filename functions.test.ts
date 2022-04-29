const { shuffleArray } = require("./utils");
const { bot } = require("./data");

describe("shuffleArray should", () => {
  test("should be type array", () => {
    expect(typeof shuffleArray).toBe("function");
  });

  test("output array is same length as input array", () => {
    const input = bot.length;
    const output = shuffleArray(bot).length;
    expect(input).toEqual(output);
  });
});
