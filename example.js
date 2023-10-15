console.log("Time for ✨ funjs ✨");

console.error("💥!");

const path = "./log.txt";

try {
  const contents = await runjs.readFile(path);
  console.log("Read from log: ", contents);
} catch (err) {
  console.error("Error reading from log: ", err);
}

await fun.writeFile(path, `Rand: ${Math.random()}`);
const contents = await fun.readFile(path);

console.log("Read from log: ", contents);
console.log("Removing log file");
await fun.removeFile(path);
console.log("Removed log file");
