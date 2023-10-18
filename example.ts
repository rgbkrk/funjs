console.log("Welcome to FunJS 🤩");

interface Cat {
  name: string;
  age: number;
}

let content: string;

content = await fun.fetch(
  "https://example.org",
);

console.log(content.slice(0, 20));
