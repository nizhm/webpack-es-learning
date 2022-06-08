async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2')
  queueMicrotask(() => {
    console.log('before 2 return');
  });
  return Promise.resolve(2);
  // return new Promise(resolve => resolve(2));
}

console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
});

async1();

queueMicrotask(() => {
  console.log('after 2 return');
});

new Promise(resolve => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
})

console.log('script end');
