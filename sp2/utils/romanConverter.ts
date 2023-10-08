export function arabicToRoman(arabic: number): string {
  if (arabic <= 0 || arabic >= 4000) {
    throw new Error("Input out of range. Supported range: 1-3999");
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  let remaining = arabic;

  for (const numeral of romanNumerals) {
    while (remaining >= numeral.value) {
      result += numeral.numeral;
      remaining -= numeral.value;
    }
  }

  return result;
}
