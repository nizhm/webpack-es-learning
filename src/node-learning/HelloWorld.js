import readline from 'readline';
const printHelloWorld = function (num) {
  for(let i = 0; i < num; i++){
    if(i === 0) {
      console.log("Let's start:");
    }
    console.log(i+': Hello World, Javascript!');
    if(i === 9) {
      console.log("Have finished!");
    }
  }
}
const readliner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
readliner.question('Enter a number:', num => {
  readliner.close();
  printHelloWorld(Number(num));
  //console.error(new Error('error message'));
});