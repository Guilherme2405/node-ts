process.stdin //process.stdin === entrada
    .pipe(process.stdout); //process.stdout === salida
import { Readable, Writable, Transform } from "node:stream";
// Importa a classe Readable e writable do módulo 'stream' do Node.js
class oneToHundredStream extends Readable {
    constructor() {
        super(...arguments);
        // cria um classe extendendo Readable do Node.js
        this.index = 1;
    }
    _read() {
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
        }, 100);
    }
}
class MultiplyByTenStrem extends Writable {
    // cria uma classe extendendo Writable do Node.js
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10);
        callback();
    }
}
class inverseNumberStream extends Transform {
    // cria uma classe extendendo Transform do Node.js
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1;
        callback(null, String(transformed));
    }
}
new oneToHundredStream()
    .pipe(new inverseNumberStream())
    .pipe(new MultiplyByTenStrem());
//# sourceMappingURL=fundamentals.js.map
//# sourceMappingURL=fundamentals.js.map