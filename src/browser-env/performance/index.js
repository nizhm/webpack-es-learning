const data = [];
for(let i = 100000; i > 0; i--) {
  data.push({ value: i });
}
let startTimeStamp = 0;
let endTimeStamp = 0;
let result = 0;
const RecordArray = [];
const ContainerArray = [];

function averageRecord(arr = []) {
  const len = arr.length;
  let totalTime = 0;
  arr.forEach(item => totalTime += item);
  return totalTime / len;
}

// for(let i = 100; i > 0; i--) {
//   startTimeStamp = Date.now()
//   for(let j = 0, len = RecordArray.length; j < len; j++) {
//     const el = RecordArray[j].value;
//     const elString = String(el);
//     const elObject = {
//       number: el,
//       string: elString
//     };
//     ContainerArray.push(elObject);
//   }
//   endTimeStamp = Date.now()
//   RecordArray.push(endTimeStamp - startTimeStamp)
// }
//
// result = averageRecord(RecordArray);
// RecordArray.length = 0;
// ContainerArray.length = 0;
// console.log('fori:', `${result}ms`);

// for(let i = 100; i > 0; i--) {
//   startTimeStamp = Date.now()
//   data.forEach(item => {
//     const el = item.value;
//     const elString = String(el);
//     const elObject = {
//       number: el,
//       string: elString
//     };
//     ContainerArray.push(elObject);
//   });
//   endTimeStamp = Date.now()
//   RecordArray.push(endTimeStamp - startTimeStamp)
// }
//
// result = averageRecord(RecordArray);
// RecordArray.length = 0;
// ContainerArray.length = 0;
// console.log('forEach:', `${result}ms`);

for(let i = 100; i > 0; i--) {
  startTimeStamp = Date.now()
  data.map(item => {
    const el = item.value;
    const elString = String(el);
    const elObject = {
      number: el,
      string: elString
    };
    ContainerArray.push(elObject);
  });
  endTimeStamp = Date.now()
  RecordArray.push(endTimeStamp - startTimeStamp)
}

result = averageRecord(RecordArray);
RecordArray.length = 0;
ContainerArray.length = 0;
console.log('map:', `${result}ms`);
