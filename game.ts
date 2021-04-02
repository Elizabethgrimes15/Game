//Команда для ввода в консоль
const customConsole = require('prompt-sync')();

//import {  Interface } from "./interface"
//import {  chapter } from "./interface"


interface Interface {
    prompt?: string;
    action() : void;
    win: string;
    loose: string;
    }

    export class gameLevels implements Interface{

        prompt: string = "";
        constructor(
           public message: string,
        ) {

        }
        action() : void {
            console.log(this.message);

            this.prompt = customConsole ('Ваш вариант ответа:');
        }

//Задание основных переменных

export let continuation: any;
export let progress: boolean = true;
export let result: boolean = true;
export let prompt =customConsole;



//Сообщения при выигрыше/проигрыше
export class greetings {
win: any = "Молодец! Ты правильно отгадал все загадки, можешь ступать своей дорогой!";
loose: any = "На первый взгляд ты казался умнее! Ты проиграл, уходи с глаз моих долой!";
};


export class gameLevels {
    public chapter1: string;
    public chapter2: string;
    public chapter3: string;

     constructor(first: string, second: string, third: string,) {
            this.chapter1 = first;
            this.chapter2 = second;
            this.chapter3 = third;   
     };
    }

//Первая глава 
export let chapter1 = new chapter(
   "Ты заблудился и оказался в магическом лесу, перед тобой стоит древний маг. Если хочешь пройти дальше, то необходимо отгадать все загадки. Нажми 1 - Если готов начать игру, Нажми 2 - Если хочешь выйти из игры"
);
chapter1.action = function(){

    //this.prompt =customConsole();

    if(this.prompt == '1'){
           console.log(`Ну что же, путешественник, давай начнем игру!`);
           progress = true;
           continuation = chapter2;
       }
    else if(this.prompt == '2'){
           console.log(`Ты сделал свой выбор, игра окончена!`);
           progress = false;
           result = false;
       }
}       
  //Вторая глава     
       export let chapter2 = new chapter(
        "Угадай загадку: Всё худела и худела, Неужели заболела? Солнце ласково печёт, Из неё слеза течёт. Нажми 1 - Если это Лук, нажми 2 - Если это Сосулька, Нажми 3 - Если это Вилка "
     );
     chapter2.action = function(){
     if(this.prompt == '2'){
        console.log(`Молодец, правильный ответ! А ты хорош`);
        progress = true;
        continuation = chapter3;
    }
    else if(this.prompt == '1'){
        console.log(`Ответ неверный, глупый чипполино! `);
        progress = false;
        result =false;
        
    }
    else if(this.prompt == '3'){
        console.log(`Получи вилкой в глаз! Ответ неверный!`);
        progress = false;
        result = false;
        
    }
}
//Третья глава
    export let chapter3 = new chapter(
        "Угадай другую загадку: Она прячется от солнца под кустом в глубокой норке,Бурая - не мишка,В норке - но не мышка. Нажми 1 - Если это Картошка, нажми 2 - Если это Ветчина, Нажми 3 - Если это Камень "
     );
     chapter3.action = function(){
     if(this.prompt == '1'){
        console.log(`Правильный ответ! Никогда бы не подумал, что ты такой гений! `);
        progress = true;
        //continuation = chapter1;
    }

    else if(this.prompt == '2'){
        console.log(`Неправильный ответ! И как можно было вообще додуматься до такого?`);
        progress = false;
        result =false;
        //continuation = chapter1;
    }
    else if(this.prompt == '3'){
        console.log(`Камень выбрал камень... Что ж, ты проиграл!`);
        progress = false;
        result = false;
        //continuation = chapter1;
    }
}
