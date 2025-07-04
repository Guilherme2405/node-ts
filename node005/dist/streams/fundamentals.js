process.stdin //process.stdin === entrada
    .pipe(process.stdout); //process.stdout === salida
import { Readable } from "node:stream";
class oneToHundredStream extends Readable {
    constructor() {
        super(...arguments);
        this.index = 1;
    }
    _read() {
        const i = this.index++;
        setTimeout(() => {
            if (i > 100) {
                this.push(null);
            }
            else {
                const buffer = Buffer.from(String(i));
                this.push(buffer);
            }
        }, 100);
    }
}
new oneToHundredStream()
    .pipe(process.stdout);
//# sourceMappingURL=fundamentals.js.map