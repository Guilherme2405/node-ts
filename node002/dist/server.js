import { createServer } from "http";

console.log('Starting server...');

const server = createServer((req, res) => {
    const {method, url} = req;

    if(method === 'GET' && url === '/users') {
       return res.end('<h1>Users List</h1>');
    }else if(method === 'post' && url === '/users') {
       return res.end('<h1>User Created</h1>');
    }
    return res.end('<h1></h1>');

});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
