const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':      ' ',
};

function decode(expr) {
    let morseSymbol = '',
    str = '';
    for (let i = 10 ; i <= expr.length ; i=i+10){
      morseSymbol = expr.slice(i-10,i);
      morseSymbol = morseSymbol.split('11').join('-');
      morseSymbol = morseSymbol.split('10').join('.');
      morseSymbol = morseSymbol.split('**********').join(' ');
      morseSymbol = morseSymbol.split('0').join('');
      str = str + MORSE_TABLE[`${morseSymbol}`];
    }
    return str;
}

module.exports = {
    decode
}