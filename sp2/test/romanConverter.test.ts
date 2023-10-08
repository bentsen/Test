import { arabicToRoman } from "../utils/romanConverter";

describe("Arabic to Roman Numeral Converter", () => {
  it('Converts 1 to "I"', () => {
    expect(arabicToRoman(1)).toBe("I");
  });
});
