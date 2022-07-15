console.log('Hoisted foo:', foo);
console.log('Hoisted bar:', bar);
function foo() {
  console.log('Top-level foo');
}
var bar; // cause duplicated identifier error;
{
  function bar() {
    console.log('Non-top-level bar');
  }
  var bar; // cause duplicated identifier error;
  var m = 333;
  var m = 555; // ok, finally m is 555;
}
console.log('foo:', foo);
console.log('bar:', bar);
console.log('window.foo:', window.foo);
console.log('window.bar:', window.bar);
