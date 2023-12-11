var add = document.getElementById('addbtn');
var input_task = document.getElementById('task_input');
// var Description = document.getElementById("des_input");
var toDoContainer = document.getElementById('toDoContainer');
add.addEventListener('click', addItem);
input_task.addEventListener('keypress', function(e){
    if(e.key=="Enter"){
        addItem();
    }
});

function addItem(e){
    let item_value = input_task.value;
    console.log(item_value);
}