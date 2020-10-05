const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodeArr = [];
    for (let i = 0; i < expr.length; i += 10) {
        decodeArr.push(expr.slice(i, i + 10)); //slice 10 items from main string and push it in arr
    }

    decodeArr = decodeArr.map(item => item.slice(item.indexOf(1))) //slice everything to the first 1 0011101110(11101110)
        .map(item => item.replace(/11/g, '-')) //use regexp and change all 11 in every item to "-" 11101110(-10-10)
        .map(item => item.replace(/10/g, '.')) //use regexp and change all 10 ein every item to "." 11101110(-10-10)(-.-.)
        .map(item => item.replace('*', ' ')) //change * to ' '
        .map(item => (item === ' ') ? ' ' : MORSE_TABLE[item]) //change our items to ' ' (if str is empty) or get value from object MORSE_TABLE
        .join(''); //make str

    return decodeArr;
}

module.exports = {
    decode
}