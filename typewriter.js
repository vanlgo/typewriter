const example = "hello there from lighthouse labs";

const typewriter = ((sentence) => {
  let i = 0;
  let timer = 0;
  let wait = sentence.length;
  for (const char of sentence) {
    i++;
    timer += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, timer)
    if (i === wait) {
      setTimeout(() => {
        process.stdout.write(`\n`)
      }, timer)
    }
  }
})

typewriter(example)