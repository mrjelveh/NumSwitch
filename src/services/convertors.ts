// using factory pattern to create different converters to have less code changes when adding new converters
// Converter interface
interface Converter {
    convert(num: number): string;
}

export enum ConverterKey {
    DECIMAL2ROMAN = 'decimalToRoman'
    // TODO: add more converters here
}

// decimal to roman number converter
class DecimalToRomanConverter implements Converter {
    convert(num: number): string {
        const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let romanNum = "";
    
        for (let i = 0; i < decimal.length; i++) {
        while (decimal[i] <= num) {
            romanNum += roman[i];
            num -= decimal[i];
        }
        }
    
        return romanNum;
    }
}

// Define a map to store the converters
const converters: Record<ConverterKey, Converter> = {
    'decimalToRoman': new DecimalToRomanConverter()
    // TODO: add more converters here
};

// Converter factory
export function createConverter(type: ConverterKey): Converter {
    const converter = converters[type];
    if (!converter) {
        throw new Error('Invalid converter types');
    }
    return converter;
}