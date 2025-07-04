import { Readable } from "stream";
class OneToHundredStream extends Readable {
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
        }, 1000);
    }
}
fetch('http://localhost:3333', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half'
});
//# sourceMappingURL=fake-upload-http.js.map