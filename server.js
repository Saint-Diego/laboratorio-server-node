import chalk from "chalk";
import http from "http";
const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  res.write("Diego Lopez\n");
  res.end(JSON.stringify({ msg: "Usuario conectado" }));
});

server.listen(port, host, () => {
  console.log(
    `Server running at     > ${chalk.green(`http://${host}:${port}`)}`
  );
});
