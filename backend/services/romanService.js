/**
 * Converts an integer to its Roman numeral representation.
 * @param {number} num - The number to convert (1-3999).
 * @returns {string} Roman numeral string.
 */
async function toRoman(num) {
    if (typeof num !== 'number' || num < 1 || num > 3999) {
        throw new Error('Input must be a number between 1 and 3999');
    }

    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900,  symbol: 'CM' },
        { value: 500,  symbol: 'D' },
        { value: 400,  symbol: 'CD' },
        { value: 100,  symbol: 'C' },
        { value: 90,   symbol: 'XC' },
        { value: 50,   symbol: 'L' },
        { value: 40,   symbol: 'XL' },
        { value: 10,   symbol: 'X' },
        { value: 9,    symbol: 'IX' },
        { value: 5,    symbol: 'V' },
        { value: 4,    symbol: 'IV' },
        { value: 1,    symbol: 'I' }
    ];

    let result = '';
    for (const { value, symbol } of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 201) + 100));
    return result;
}

module.exports = {
    toRoman
};