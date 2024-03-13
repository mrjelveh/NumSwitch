import { convertToRoman } from "./convert-to-roman";


// Test cases for convertToRoman function
describe('convertToRoman', () => {
  it('should convert 1 to "I"', () => {
    const result = convertToRoman(1);
    expect(result).toBe("I");
  });

  it('should convert 4 to "IV"', () => {
    const result = convertToRoman(4);
    expect(result).toBe("IV");
  });

  it('should convert 9 to "IX"', () => {
    const result = convertToRoman(9);
    expect(result).toBe("IX");
  });

  it('should convert 49 to "XLIX"', () => {
    const result = convertToRoman(49);
    expect(result).toBe("XLIX");
  });

  it('should convert 3999 to "MMMCMXCIX"', () => {
    const result = convertToRoman(3999);
    expect(result).toBe("MMMCMXCIX");
  });
});