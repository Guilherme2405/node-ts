import { createServer } from "http";
console.log('Starting server...');
const server = createServer((req, res) => {
    return res.end('<h1>csacasca</h1>');
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=server.js.map