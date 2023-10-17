const amountBox = document.getElementById('amount-input');
const descriptionBox = document.getElementById('descrip-input');
const categoryBox = document.getElementById('categ-input');
const listContainer1 = document.getElementById('users');

function AddExpense(e)
{
    e.preventDefault();
    const userData ={
        amountBox,
        descriptionBox,
        categoryBox
    }
    //Adding element to the local storage
    localStorage.setItem(userData.amountBox, JSON.stringify(userData));

    if(amountBox.value === '' || descriptionBox.value === "Select" || categoryBox === "Select")
    {
        alert("Please fill the given details carefully");
    }
    else{
        //Adding element to the browser
        const li = document.createElement(`li`);
        // li.className=;
        li.innerText = `${amountBox.value} - ${descriptionBox.value} - ${categoryBox.value}`


        // Edit button
        const editbtn = document.createElement('button');
        //editbtn.className = ;
        editbtn.setAttribute("type","Submit");
        editbtn.setAttribute("id", `${userDataString}`);
        editbtn.innerHTML= `Edit`;

        // Delete button
        const delbtn = document.createElement('button');
        //delbtn.className = ;
        delbtn.setAttribute("type","Submit");
        delbtn.setAttribute("id", `${userDataString}`);
        delbtn.innerHTML= `Delete`;

        //Appending
        li.appendChild(editbtn);
        li.appendChild(delbtn);
        listContainer1.append(li);

        //Reinitialize to blank
        amountBox.value = ' ';
        descriptionBox.value = "Select";
        categoryBox.value = "Select";
    }
    
 }

 //Create Delete Function
 listContainer1.addEventListener('click', onDelete());

function onDelete(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delbtn')){
    //remove from browser
    const btnId = JSON.parse(e.target.id).amountBox;
    localStorage.removeItem(`${btnId}`);
    //Delete value from browser
    e.target.parentElement.remove();
}
}

function showData()
{
listContainer1.innerHTML = localStorage.getItem("data");
}
showData();