console.log('Todo list:');
var old_todo = JSON.parse(localStorage.getItem('Todos')); 
console.log(old_todo);

function save(){
  

var inptodo = document.getElementById('name').value;



if (localStorage.getItem('Todos') == null) {
  localStorage.setItem('Todos','[]');
}


  var old_todo = JSON.parse(localStorage.getItem('Todos')); 
old_todo.push(inptodo);

  localStorage.setItem('Todos', JSON.stringify(old_todo));
  location.reload();
  function prevent(evt) {
    evt.preventDefault();

  console.log('Adicionaste',inptodo);
}
  
};











 