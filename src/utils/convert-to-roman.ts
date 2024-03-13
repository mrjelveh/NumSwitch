import { Converter } from "./converter-creator";

// Function to convert a decimal number to a Roman numeral
export function convertToRoman(num: number): string {
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let romanNum = "";

    // Iterate through the decimal and roman arrays
    for (let i = 0; i < decimal.length; i++) {
        // While the current decimal value is less than or equal to the input number
        while (decimal[i] <= num) {
            // Append the corresponding Roman numeral to the result string
            romanNum += roman[i];
            // Subtract the decimal value from the input number
            num -= decimal[i];
        }
    }

    return romanNum;
}
// Function that creates a converter for decimal to Roman conversion
export function DecimalToRomanConverter(): Converter {
    return {
        convert: (num: number) => convertToRoman(num)
    };
}

// Function that creates a converter for binary to Roman conversion
export function BinaryToRomanConverter(): Converter {
    return {
        convert: (number: number) => {
            // Convert the binary number to decimal
            const decimal = parseInt(number.toString(), 2);
            // Convert the decimal number to Roman numeral
            return convertToRoman(decimal);
        }
    };
}

// This link was useful to have general information about Roman numerals: 
// https://www.mathsisfun.com/roman-numerals.html