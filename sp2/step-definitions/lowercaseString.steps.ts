import { lowercaseString } from "../utils/lowercaseString";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./features/romanConverter.feature");

let normalString: string;
let lowercasedString: string;

defineFeature(feature, (test) => {
  test("Convert string to lowercase", ({ given, when, then }) => {
    given(/^Given I have a string (.+)$/, (string: string) => {
      normalString = string;
    });

    when("When I convert it to be lowercase", () => {
      lowercasedString = lowercaseString(normalString);
    });

    then(/^Then I should get (.+)$/, (expectedCapitalizedString: string) => {
      expect(lowercasedString).toBe(expectedCapitalizedString);
    });
  });
});
