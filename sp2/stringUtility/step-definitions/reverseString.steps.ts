import { reverseString } from "../utils/reverseString";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./stringUtility/features/reverseString.feature");

let normalString: string;
let reversedString: string;

defineFeature(feature, (test) => {
  test("Convert string to reverse", ({ given, when, then }) => {
    given(/^I have a string (.+)$/, (string: string) => {
      normalString = string;
    });

    when("I convert it to be reversed", () => {
      reversedString = reverseString(normalString);
    });

    then(/^I should get (.+)$/, (expectedCapitalizedString: string) => {
      expect(reversedString).toBe(expectedCapitalizedString);
    });
  });
});
