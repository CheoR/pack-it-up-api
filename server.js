const jsonServer = require('json-server');
const PORT = process.env.PORT || 3000;

const server = jsonServer.create();
const router = jsonServer.router('database.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log('Server running . . ');
});
