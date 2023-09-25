import { arabicToRoman } from "../utils/romanConverter";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./features/romanConverter.feature");

let arabicNumber: number;
let romanNumeral: string;

defineFeature(feature, (test) => {
  test("Convert Arabic number to Roman numeral", ({ given, when, then }) => {
    given(/^I have the Arabic number (\d+)$/, (number: number) => {
      arabicNumber = number;
    });

    when("I convert it to a Roman numeral", () => {
      romanNumeral = arabicToRoman(arabicNumber);
    });

    then(/^(.*) should get "I"$/, (expectedRomanNumeral: string) => {
      expect(romanNumeral).toBe(expectedRomanNumeral);
    });
  });
});
