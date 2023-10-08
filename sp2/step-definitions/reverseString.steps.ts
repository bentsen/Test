import { reverseString } from "../utils/reverseString";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./features/romanConverter.feature");

let normalString: string;
let reversedString: string;

defineFeature(feature, (test) => {
  test("Convert string to reverse", ({ given, when, then }) => {
    given(/^I have a string (.+)$/, (string: string) => {
      normalString = string;
    });

    when("When I convert it to be reversed", () => {
      reversedString = reverseString(normalString);
    });

    then(/^Then I should get (.+)$/, (expectedCapitalizedString: string) => {
      expect(reversedString).toBe(expectedCapitalizedString);
    });
  });
});
