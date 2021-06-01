const sentence = "hello there from lighthouse labs\n";
let s = 1000;

for (const char of sentence) {
  setTimeout(()=> {
    process.stdout.write(char);
  }, s)
  s += 500;
}