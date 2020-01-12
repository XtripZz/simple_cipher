// getting html elements:
// h1
let h1 = document.createElement('h1');
h1.innerHTML += 'Cipher';
h1.style.margin = '0 0 0 45%';
document.querySelector('.container').appendChild(h1);

// p
let enterText = document.createElement('p');
enterText.innerHTML += 'Enter text:';
enterText.classList.add('enterText');
document.querySelector('.container').appendChild(enterText);

// div
let div = document.createElement('div');
document.querySelector('.container').appendChild(div);

// input
let textInput = document.createElement('input');
textInput.classList.add('text-input');
document.querySelector('.container>div').appendChild(textInput);

// btn1, btn2, btn3
let btn1 = document.createElement('button');
btn1.innerHTML += 'Encrypt1';
document.querySelector('.container>div').appendChild(btn1);
let btn2 = document.createElement('button');
btn2.innerHTML += 'Encrypt2';
document.querySelector('.container>div').appendChild(btn2);
let btn3 = document.createElement('button');
btn3.innerHTML += 'Decrypt';
document.querySelector('.container>div').appendChild(btn3);

// out's & encrypt's/decrypt
let encrypt1 = document.createElement('p');
encrypt1.innerHTML += 'Encript1:';
encrypt1.classList.add('encrypt1');
document.querySelector('.container').appendChild(encrypt1);
let out1 = document.createElement('p');
out1.classList.add('out1');
document.querySelector('.container').appendChild(out1);
let encrypt2 = document.createElement('p');
encrypt2.innerHTML += 'Encrypt2:';
encrypt2.classList.add('encrypt2');
document.querySelector('.container').appendChild(encrypt2);
let out2 = document.createElement('p');
out2.classList.add('out2');
document.querySelector('.container').appendChild(out2);
let decrypt = document.createElement('p');
decrypt.classList.add('decrypt');
decrypt.innerHTML += 'Decrypt:'
document.querySelector('.container').appendChild(decrypt);
let out3 = document.createElement('p');
out3.classList.add('out3');
document.querySelector('.container').appendChild(out3);

// 1st encrypt
let key = {

    // lowerCase end
    'a': 'w',
    'b': 'g',
    'c': 'S',
    'd': 'a',
    'e': 'X',
    'f': 'x',
    'g': 'z',
    'h': 'Z',
    'i': '1',
    'j': 'f',
    'k': 'j',
    'l': 'E',
    'm': 'l',
    'n': 'L',
    'o': 'U',
    'p': '{',
    'q': '1',
    'r': '3',
    's': 'P',
    't': ':',
    'u': 'H',
    'v': '8',
    'w': 'L',
    'x': 'I',
    'y': 'Y',
    'z': 't',

    // upperCase eng
    'A': '7',
    'B': '2',
    'C': 'w',
    'D': 'L',
    'E': 'R',
    'F': 'E',
    'G': 'U',
    'H': 'j',
    'I': '3',
    'J': '2',
    'K': '1',
    'L': ':',
    'M': 'S',
    'N': 's',
    'O': 'C',
    'P': 'b',
    'Q': 'J',
    'R': 'K',
    'S': 'k',
    'T': '3',
    'U': '1',
    'V': '5',
    'W': 'q',
    'X': 'Q',
    'Y': 'W',
    'Z': 'e',

    // lowerCase ru
    'а': 'ц',
    'б': 'Й',
    'в': 'У',
    'г': 'у',
    'д': 'й',
    'е': 'Ы',
    'ё': 'Ж',
    'ж': 'ж',
    'з': 'х',
    'и': 'й',
    'й': 'ш',
    'к': 'о',
    'л': 'ь',
    'м': 'э',
    'н': 'Ж',
    'о': 'ш',
    'п': 'г',
    'р': 'Г',
    'с': 'О',
    'т': 'Т',
    'у': 'Г',
    'ф': 'Н',
    'х': 'о',
    'ц': 'ы',
    'ч': 'Ц',
    'ш': 'ф',
    'щ': 'Ф',
    'ъ': 'д',
    'ь': 'щ',
    'ы': 'Ш',
    'э': 'х',
    'ю': 'Ъ',
    'я': 'ц',

    // upperCase ru
    'А': 'Ц',
    'Б': 'Ы',
    'В': 'й',
    'Г': 'в',
    'Д': 'Ч',
    'Е': '3',
    'Ё': '2',
    'Ж': '1',
    'З': 'ц',
    'И': 'Ж',
    'Й': 'Т',
    'К': 'З',
    'Л': 'Ъ',
    'М': 'Ц',
    'Н': 'Щ',
    'О': 'П',
    'П': 'Э',
    'Р': 'Ц',
    'С': '1',
    'Т': '3',
    'У': 'Щ',
    'Ф': 'у',
    'Х': 'й',
    'Ц': 'ч',
    'Ч': 'р',
    'Ш': 'о',
    'Щ': 'л',
    'Ъ': 'б',
    'Ы': 'т',
    'Ь': 'м',
    'Э': 'с',
    'Ю': 'ч',
    'Я': 'г',

    // numbers
    1: 1,
    2: 5,
    3: 1,
    4: 2,
    5: 3,
    6: 8,
    7: 6,
    8: 7,
    9: 0,
    0: 9
};
btn1.onclick = function () {
    out1.innerHTML = '';
    let str = textInput.value;
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (key[str[i]]) {
            str2 += key[str[i]];
        } else {
            str2 += str[i];
        }
    }
    out1.innerHTML += str2;
}

// 2nd encrypt
let key2 = {

    // lowerCase eng
    'a': '*',
    'b': '*',
    'c': '*',
    'd': '*',
    'e': '*',
    'f': '*',
    'g': '*',
    'h': '*',
    'i': '*',
    'j': '*',
    'k': '*',
    'l': '*',
    'm': '*',
    'n': '*',
    'o': '*',
    'p': '*',
    'q': '*',
    'r': '*',
    's': '*',
    't': '*',
    'u': '*',
    'v': '*',
    'w': '*',
    'x': '*',
    'y': '*',
    'z': '*',

    // upperCase eng
    'A': '*',
    'B': '*',
    'C': '*',
    'D': '*',
    'E': '*',
    'F': '*',
    'G': '*',
    'H': '*',
    'I': '*',
    'J': '*',
    'K': '*',
    'L': '*',
    'M': '*',
    'N': '*',
    'O': '*',
    'P': '*',
    'Q': '*',
    'R': '*',
    'S': '*',
    'T': '*',
    'U': '*',
    'V': '*',
    'W': '*',
    'X': '*',
    'Y': '*',
    'Z': '*',

    // lowerCase ru
    'а': '*',
    'б': '*',
    'в': '*',
    'г': '*',
    'д': '*',
    'е': '*',
    'ё': '*',
    'ж': '*',
    'з': '*',
    'и': '*',
    'й': '*',
    'к': '*',
    'л': '*',
    'м': '*',
    'н': '*',
    'о': '*',
    'п': '*',
    'р': '*',
    'с': '*',
    'т': '*',
    'у': '*',
    'ф': '*',
    'х': '*',
    'ц': '*',
    'ч': '*',
    'ш': '*',
    'щ': '*',
    'ъ': '*',
    'ь': '*',
    'ы': '*',
    'э': '*',
    'ю': '*',
    'я': '*',

    // upperCase ru
    'А': '*',
    'Б': '*',
    'В': '*',
    'Г': '*',
    'Д': '*',
    'Е': '*',
    'Ё': '*',
    'Ж': '*',
    'З': '*',
    'И': '*',
    'Й': '*',
    'К': '*',
    'Л': '*',
    'М': '*',
    'Н': '*',
    'О': '*',
    'П': '*',
    'Р': '*',
    'С': '*',
    'Т': '*',
    'У': '*',
    'Ф': '*',
    'Х': '*',
    'Ц': '*',
    'Ч': '*',
    'Ш': '*',
    'Щ': '*',
    'Ъ': '*',
    'Ы': '*',
    'Ь': '*',
    'Э': '*',
    'Ю': '*',
    'Я': '*',

    // numbers
    1: 1,
    2: '*',
    3: '*',
    4: '*',
    5: '*',
    6: '*',
    7: '*',
    8: '*',
    9: '*',
    0: '*'
}
btn2.onclick = function () {
    out2.innerHTML = '';
    let str = textInput.value;
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (key2[str[i]]) {
            str2 += key2[str[i]];
        } else {
            str2 += str[i];
        }
    }
    out2.innerHTML += str2;
}

// decrypt
let key3 = {

    // lowerCase eng
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z',

    // upperCase eng
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',

    // lowerCase ru
    'а': 'а',
    'б': 'б',
    'в': 'в',
    'г': 'г',
    'д': 'д',
    'е': 'е',
    'ё': 'ё',
    'ж': 'ж',
    'з': 'з',
    'и': 'и',
    'й': 'й',
    'к': 'к',
    'л': 'л',
    'м': 'м',
    'н': 'н',
    'о': 'о',
    'п': 'п',
    'р': 'р',
    'с': 'с',
    'т': 'т',
    'у': 'у',
    'ф': 'ф',
    'х': 'х',
    'ц': 'ц',
    'ч': 'ч',
    'ш': 'ш',
    'щ': 'щ',
    'ъ': 'ъ',
    'ь': 'ь',
    'ы': 'ы',
    'э': 'э',
    'ю': 'ю',
    'я': 'я',

    // upperCase ru
    'А': 'А',
    'Б': 'Б',
    'В': 'В',
    'Г': 'Г',
    'Д': 'Д',
    'Е': 'Е',
    'Ё': 'Ё',
    'Ж': 'Ж',
    'З': 'З',
    'И': 'И',
    'Й': 'Й',
    'К': 'К',
    'Л': 'Л',
    'М': 'М',
    'Н': 'Н',
    'О': 'О',
    'П': 'П',
    'Р': 'Р',
    'С': 'С',
    'Т': 'Т',
    'У': 'У',
    'Ф': 'Ф',
    'Х': 'Х',
    'Ц': 'Ц',
    'Ч': 'Ч',
    'Ш': 'Ш',
    'Щ': 'Щ',
    'Ъ': 'Ъ',
    'Ы': 'Ы',
    'Ь': 'Ь',
    'Э': 'Э',
    'Ю': 'Ю',
    'Я': 'Я',

    // numbers
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    0: 1
};
btn3.onclick = function () {
    out3.innerHTML = '';
    let str = textInput.value;
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (key3[str[i]]) {
            str2 += key3[str[i]];
        } else {
            str2 += str[i];
        }
    }
    out3.innerHTML += str2;
}