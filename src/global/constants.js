// Left side keyboard/right side style:
// const KEY_TO_NOTE = {
//     z: 'C4',
//     s: 'Db4',
//     x: 'D4',
//     d: 'Eb4',
//     c: 'E4',

//     w: 'F4',
//     3: 'Gb4',
//     e: 'G4',
//     4: 'Ab4',
//     r: 'A4',
//     5: 'Bb4',
//     t: 'B4',

//     b: 'C5',
//     h: 'Db5',
//     n: 'D5',
//     j: 'Eb5',
//     m: 'E5',

//     y: 'F5',
//     7: 'Gb5',
//     u: 'G5',
//     8: 'Ab5',
//     i: 'A5',
//     9: 'Bb5',
//     o: 'B5'
// }

// const NOTE_TO_KEY = {
//     C4:'z',
//     Db4:'s',
//     D4:'x',
//     Eb4:'d',
//     E4:'c',

//     F4:'w',
//     Gb4:'3',
//     G4:'e',
//     Ab4:'4',
//     A4:'r',
//     Bb4:'5',
//     B4:'t',

//     C5:'b',
//     Db5:'h',
//     D5:'n',
//     Eb5:'j',
//     E5:'m',

//     F5:'y',
//     Gb5:'7',
//     G5:'u',
//     Ab5:'8',
//     A5:'i',
//     Bb5:'9',
//     B5:'o'
// }

// const VALID_BLACK_KEYS = ['s', 'd', '3', '4', '5',  'h', 'j', '7', '8', '9'];
// const VALID_WHITE_KEYS = ['z', 'x', 'c', 'w', 'e', 'r', 't',  'b', 'n', 'm', 'y', 'u', 'i', 'o'];
// const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];

// const NOTES = [
// 'C4',
// 'Db4',
// 'D4',
// 'Eb4',
// 'E4',
// 'F4',
// 'Gb4',
// 'G4',
// 'Ab4',
// 'A4',
// 'Bb4',
// 'B4',

// 'C5',
// 'Db5',
// 'D5',
// 'Eb5',
// 'E5',
// 'F5',
// 'Gb5',
// 'G5',
// 'Ab5',
// 'A5',
// 'Bb5',
// 'B5'
// ]

const NOTES = [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B'
]

const LEFT_KEY_TO_NOTE = {
    z: 'C',
    s: 'Db',
    x: 'D',
    d: 'Eb',
    c: 'E',
    v: 'F',
    g: 'Gb',
    b: 'G',
    h: 'Ab',
    n: 'A',
    j: 'Bb',
    m: 'B'
}

const RIGHT_KEY_TO_NOTE = {
    q: 'C',
    2: 'Db',
    w: 'D',
    3: 'Eb',
    e: 'E',
    r: 'F',
    5: 'Gb',
    t: 'G',
    6: 'Ab',
    y: 'A',
    7: 'Bb',
    u: 'B'
}
    
const LEFT_NOTE_TO_KEY = {
    C:'z',
    Db:'s',
    D:'x',
    Eb:'d',
    E:'c',
    F:'v',
    Gb:'g',
    G:'b',
    Ab:'h',
    A:'n',
    Bb:'j',
    B:'m'
}

const RIGHT_NOTE_TO_KEY = {
    C:'q',
    Db:'2',
    D:'w',
    Eb:'3',
    E:'e',
    F:'r',
    Gb:'5',
    G:'t',
    Ab:'6',
    A:'y',
    Bb:'7',
    B:'u'
}

// const KEY_TO_NOTE = {
//     z: 'C4',
//     s: 'Db4',
//     x: 'D4',
//     d: 'Eb4',
//     c: 'E4',
//     v: 'F4',
//     g: 'Gb4',
//     b: 'G4',
//     h: 'Ab4',
//     n: 'A4',
//     j: 'Bb4',
//     m: 'B4',

//     q: 'C5',
//     2: 'Db5',
//     w: 'D5',
//     3: 'Eb5',
//     e: 'E5',
//     r: 'F5',
//     5: 'Gb5',
//     t: 'G5',
//     6: 'Ab5',
//     y: 'A5',
//     7: 'Bb5',
//     u: 'B5'
// }

// const NOTE_TO_KEY = {
//     C4:'z',
//     Db4:'s',
//     D4:'x',
//     Eb4:'d',
//     E4:'c',
//     F4:'v',
//     Gb4:'g',
//     G4:'b',
//     Ab4:'h',
//     A4:'n',
//     Bb4:'j',
//     B4:'m',

//     C5:'q',
//     Db5:'2',
//     D5:'w',
//     Eb5:'3',
//     E5:'e',
//     F5:'r',
//     Gb5:'5',
//     G5:'t',
//     Ab5:'6',
//     A5:'y',
//     Bb5:'7',
//     B5:'u'
// }

const VALID_BLACK_KEYS = ['s', 'd', 'g', 'h', 'j',  '2', '3', '5', '6', '7'];
const VALID_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm',  'q', 'w', 'e', 'r', 't', 'y', 'u'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];

export {NOTES, LEFT_KEY_TO_NOTE, RIGHT_KEY_TO_NOTE, LEFT_NOTE_TO_KEY, RIGHT_NOTE_TO_KEY, VALID_BLACK_KEYS, VALID_WHITE_KEYS, VALID_KEYS}