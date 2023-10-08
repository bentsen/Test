import { capitalizeString } from "../utils/capitalizeString";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./stringUtility/features/capitalizeString.feature"
);

let normalString: string;
let capitalizedString: string;

defineFeature(feature, (test) => {
  test("Convert string to capitalized string", ({ given, when, then }) => {
    given(/^I have a string (.+)$/, (string: string) => {
      normalString = string;
    });

    when("I convert it to be capitalized", () => {
      capitalizedString = capitalizeString(normalString);
    });

    then(/^I should get (.+)$/, (expectedCapitalizedString: string) => {
      expect(capitalizedString).toBe(expectedCapitalizedString);
    });
  });
});
