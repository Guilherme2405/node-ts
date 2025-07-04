process.stdin //process.stdin === entrada
.pipe(process.stdout) //process.stdout === salida

import { Readable } from "node:stream"; 
// Importa a classe Readable do módulo 'stream' do Node.js

class oneToHundredStream extends Readable { 
    // cria um classe extendendo Readable do Node.js
    index = 1;

    _read() : void {

        // método _read é chamado quando o fluxo precisa de mais dados
        // é aqui que você gera os dados que serão enviados para o fluxo
        const i = this.index++;


        setTimeout(() => {  
        // simula uma operação assíncrona, como ler de um banco de dados ou arquivo
        // aqui, estamos apenas incrementando o índice a cada 100ms

            if (i > 100) {
                this.push(null);
                // quando o índice é maior que 100, sinaliza o fim do fluxo
            }
            else {
                const buffer = Buffer.from(String(i));
                this.push(buffer);
                /*  explicação do this.push;
                // converte o índice para uma string, cria um buffer e o envia para o fluxo
                // o método push é usado para enviar dados para o fluxo
                //fluxo envia os dados para o consumidor
                // o consumidor pode ser outro fluxo, como process.stdout
                // ou um arquivo, ou qualquer outro destino que suporte fluxos
                // o fluxo continuará chamando _read até que push(null) seja chamado
                // o que indica que não há mais dados a serem enviados
                // isso é útil para gerar dados de forma assíncrona, como ler de um banco de dados
                // ou arquivo, ou qualquer outra fonte de dados que possa ser lida
                */
            } 
        }, 100);
    }
}
new oneToHundredStream()
    .pipe(process.stdout) 
    // cria uma instância do fluxo e o conecta ao process.stdout
    // isso significa que os dados gerados pelo fluxo serão enviados para a saída padrão