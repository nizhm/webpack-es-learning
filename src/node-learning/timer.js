let startTime = 0;
let endTime = 0;
function timer() {
  startTime = Date.now();
  setTimeout(() => {
    endTime = Date.now();
  }, 1000);
  for(let i = 0; i <= 1000000; i++) {
    console.log('loop: ', i);
  }
}
timer();
setTimeout(() => {
  console.log(`endTime(${ endTime }) - startTime(${ startTime }): ${ endTime - startTime }`);
  console.log(`System waiting time: ${ endTime - startTime - 1000 }ms`);
}, 1500);
