const customConsole = require('prompt-sync')();

import { Greetings } from "./game";


export const win:  Greetings = {
    conversation() {
          console.log('Молодец! Ты правильно отгадал все загадки, можешь ступать своей дорогой!');
    },
}
export const loose : Greetings = {
    conversation() {
        console.log('На первый взгляд ты казался умнее! Ты проиграл, уходи с глаз моих долой!');
    },
}
    