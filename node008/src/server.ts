const users : object[] = [];
import { createServer } from "http";
console.log('Starting server...')

const server = createServer(async(req, res) => {
  const { method, url } = req;
  
  const bufffers: Buffer[] = [];

   for await (const chunk of req) {
        bufffers.push(chunk);
    }

    try { 
       req.body = JSON.parse(Buffer.concat(bufffers).toString());
    } catch (error) { 
      body = null;
    }

   
    
  

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-Type', 'application/json')
    .end(users ? JSON.stringify(users) : '[]');
    } 

  if (method === 'POST' && url === '/users') {
    users.push({ name: 'guiga kirin', email: "guiga@email.com"});

    return res.writeHead(201).end('<h1>Created</h1>');
    }


    return res.writeHead(404).end(TypeError('Not found').message);
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});  