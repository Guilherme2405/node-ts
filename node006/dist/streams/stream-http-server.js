import { createServer } from "node:http";
import { Transform } from "node:stream";
class inverseNumberStream extends Transform {
    // cria uma classe extendendo Transform do Node.js
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1;
        console.log(transformed);
        callback(null, Buffer.from(String(transformed)));
    }
}
const server = createServer((req, res) => {
    return req.pipe(new inverseNumberStream())
        .pipe(res);
});
server.listen(3333);
//# sourceMappingURL=stream-http-server.js.map