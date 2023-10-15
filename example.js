console.log("Welcome to FunJS 🤩");

const content = await fun.fetch(
  "https://example.org",
);

console.log(content.slice(0, 20));
