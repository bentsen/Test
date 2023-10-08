import { capitalizeString } from "../utils/capitalizeString";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./features/romanConverter.feature");

let normalString: string;
let capitalizedString: string;

defineFeature(feature, (test) => {
  test("Convert string to capitalized string", ({ given, when, then }) => {
    given(/^Given I have a string (.+)$/, (string: string) => {
      normalString = string;
    });

    when("When I convert it to be capitalized", () => {
      capitalizedString = capitalizeString(normalString);
    });

    then(/^Then I should get (.+)$/, (expectedCapitalizedString: string) => {
      expect(capitalizedString).toBe(expectedCapitalizedString);
    });
  });
});
