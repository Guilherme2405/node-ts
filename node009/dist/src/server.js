const users = [];
import { createServer } from "http";
console.log('Starting server...');
const server = createServer((req, res) => {
    const { method, url } = req;
    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-Type', 'application/json')
            .end(users ? JSON.stringify(users) : '[]');
    }
    if (method === 'POST' && url === '/users') {
        users.push({ name: 'guiga kirin', email: "guiga@email.com" });
        return res.writeHead(201).end('<h1>Created</h1>');
    }
    return res.writeHead(404).end(TypeError('Not dwqdw').message);
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=server.js.map