import { lowercaseString } from "../utils/lowercaseString";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./stringUtility/features/lowercaseString.feature");

let normalString: string;
let lowercasedString: string;

defineFeature(feature, (test) => {
  test("Convert string to lowercase", ({ given, when, then }) => {
    given(/^I have a string (.+)$/, (string: string) => {
      normalString = string;
    });

    when("I convert it to be lowercase", () => {
      lowercasedString = lowercaseString(normalString);
    });

    then(/^I should get (.+)$/, (expectedCapitalizedString: string) => {
      expect(lowercasedString).toBe(expectedCapitalizedString);
    });
  });
});
