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
const server = createServer(async (req, res) => {
    const bufffers = [];
    for await (const chunk of req) {
        bufffers.push(chunk);
    }
    const fulllBody = Buffer.concat(bufffers).toString();
    console.log(fulllBody + "dados recebidos");
    return res.end(fulllBody);
});
server.listen(3333);
//# sourceMappingURL=stream-http-server.js.map