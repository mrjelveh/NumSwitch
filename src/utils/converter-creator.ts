// using factory pattern to create different converters to have less code changes when adding new converters

import { BinaryToRomanConverter, DecimalToRomanConverter } from "./convert-to-roman";


// Converter interface
export interface Converter {
    convert(num: number): string;
}

export enum ConverterKey {
    DECIMAL2ROMAN = 'decimal-to-roman',
    BINARY2ROMAN = 'binary-to-roman'
}


// Define a map to store the converters
const converters: Record<ConverterKey, Converter> = {
    'decimal-to-roman': DecimalToRomanConverter(),
    'binary-to-roman': BinaryToRomanConverter()
};

// Converter factory
export function createConverter(type: ConverterKey): Converter {
    console.log(type)
    const converter = converters[type];
    if (!converter) {
        throw new Error('Invalid converter types');
    }
    return converter;
}