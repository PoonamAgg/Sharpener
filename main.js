var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//Form SUbmit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);
//Add Item
function addItem(e)
{
    e.preventDefault();
    
    //Get Input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');

    //Add class 
    li.className = 'list-group-item';

    //add text node
    li.appendChild(document.createTextNode(newItem));

    //Create Del
    var deleteBtn = document.createElement('button')
    //Create Edit
    var EditBtn = document.createElement('button')
    //Add class to button
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';

    //Add class to editButton
    EditBtn.className= 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append text node
    EditBtn.appendChild(document.createTextNode('Edit'));

    //Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(EditBtn);
     //Append li to list
    itemList.appendChild(li);

}
//remove items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
           // console.log(li);
           itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display ='block';
        }else{
            item.style.display = 'none';
        }
    });
}