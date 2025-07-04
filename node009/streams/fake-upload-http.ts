import { Readable } from "stream";

// Extende RequestInit para incluir 'duplex'
declare global {
  interface RequestInit {
    duplex?: string;
  }
}

class OneToHundredStream extends Readable { 
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
            } 
        }, 50);
    }
}

fetch('http://localhost:3333', {
    method: 'POST',
    body: new OneToHundredStream() as any,
    duplex: 'half'
}).then(response => {
    return response.text()
}).then(data => {
    console.log("texto escrito por  execução em promise do proprio fetch" + data);
});