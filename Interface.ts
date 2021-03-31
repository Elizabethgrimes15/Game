const customConsole = require('prompt-sync')();

export interface Interface {
    prompt?: string;
    action() : void;
    win: string;
    loose: string;
    }

    export class chapter implements Interface{

        prompt: string = "";
        constructor(
           public message: string,
        ) {

        }
        action() : void {
            console.log(this.message);

            this.prompt = customConsole ('Ваш вариант ответа:');
        }
