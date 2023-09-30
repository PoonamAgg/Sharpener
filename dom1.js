/*Traversing the DOM

var itemList = document.querySelector('#items');

// ParentNode
//console.log(itemList.parentNode)
//itemList.parentNode.style.backgroundColor= '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode)

// ParentElement
//console.log(itemList.parentElement.parentElement.parentElement)

//Child Node

//console.log(itemList.childNodes)

//console.log(itemList.children)
// console.log(itemList.children[1])
//itemList.children[1].style.backgroundColor ='red'

/*FirstChild

console.log(itemList.firstChild)

//First element child

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ="Poonam" 

//LastChild

//console.log(itemList.lastChild)

//First element child

//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent ="ravi"

//nextSibling
//console.log(itemList.nextSibling)
//NextElementSibling
//console.log(itemList.nextElementSibling)

//Previous Sibling
//console.log(itemList.previousSibling)
//console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color ='green'

//Create Element

//Create Div
var newDiv = document.createElement('div');
newDiv.className = "hello";
newDiv.id = 'hello1';
console.log(newDiv)
newDiv.setAttribute('title', 'HelloDiv')
var newDivText = document.createTextNode('Hello World')
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
console.log(newDiv)
newDiv.style.fontSize = "30px"
container.insertBefore(newDiv, h1)

var aa = document.getElementById('items');
var bb = document.createElement('li')
bb.className = 'list-group-item';
bb.innerHTML = 'Hellooo'
aa.insertBefore(bb, aa.firstChild); */

var form = document.getElementById('addform');
var itemList = document.getElementById('items').value;

//Form SUbmit event
form.addEventListener('submit', addItem);

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

  /*//Create Del
    var deleteBtn = document.createElement('button')

  //Add class to button
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';

  //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

  //Append button to li
     li.appendChild(deleteBtn);*/

  //Append li to list
 itemList.appendChild('li');
}

