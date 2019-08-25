function writeCards(name, eventName) {
  let wc = [];
  for (let i = 0; i < name.length; i++) {
    wc.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
  }
  return wc;
}

function countdown(number) {
  let count = 0;
  while (count <= number) {
    console.log(count++);
  }
}
