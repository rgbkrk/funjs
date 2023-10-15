console.log("We RUN the JS");

console.error("Boom!");

const path = "./log.txt";

try {
  const contents = await runjs.readFile(path);
  console.log("Read from log: ", contents);
} catch (err) {
  console.error("Error reading from log: ", err);
}

await runjs.writeFile(path, `Rand: ${Math.random()}`);
const contents = await runjs.readFile(path);

console.log("Read from log: ", contents);
console.log("Removing log file");
await runjs.removeFile(path);
console.log("Removed log file");
