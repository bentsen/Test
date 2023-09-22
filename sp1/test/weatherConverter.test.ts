import {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} from "../utils/weatherConverter";

describe("Fahrenheit to Celsius Converter", () => {
  it("converts 32°F to 0°C", () => {
    expect(fahrenheitToCelsius(32)).toBeCloseTo(0, 2); //using to be close to because of possible float values
  });
});

describe("Celsius to Fahrenheit", () => {
  it("converts 0°C to 32°F", () => {
    expect(celsiusToFahrenheit(0)).toBeCloseTo(32, 2);
  });
});
