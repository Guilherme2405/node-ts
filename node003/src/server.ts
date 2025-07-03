const users = [];
import { createServer } from "http";
import { json } from "stream/consumers";

console.log('Starting server...')

const server = createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-Type', 'application/json')
    .end(users ? JSON.stringify(users) : '[]');
    } 
  if (method === 'POST' && url === '/users') {
    users.push({ name: 'John Doe', email: "guiga@email.com"});

    return res.end("<h1>User created</h1>");
    }


    return res.end('<h1>44</h1>');
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});