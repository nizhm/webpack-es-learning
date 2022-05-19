let source = 'http://192.169.1.150:3000/users/getList';
let options = {
  method: 'GET'
};
fetch(source, options).then(response => {
  console.log('response:');
  console.log(response);

  if (!response.ok) throw response

  return response.json();

}).then(data => {
  console.log('data:');
  console.log(data);
}).catch(error => {
  console.error('error:');
  console.error(error);
})

