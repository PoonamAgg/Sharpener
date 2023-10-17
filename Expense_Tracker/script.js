const  formInput = document.getElementById('forminput');
const amountInbox = formInput.querySelector('#amount-input');
const desInbox = formInput.querySelector('#descrip-input');
const catInbox = formInput.querySelector('#categ-input');
const SubmitBtn = formInput.querySelector('#add-btn');
const placeHolder = document.getElementById('placeholder');

SubmitBtn.addEventListener('click', AddExpenses);
placeHolder.addEventListener('click', editExpenses);
placeHolder.addEventListener('click', deleteExpenses);

function AddExpenses(e){
   try {
    if(e.target && formInput.checkValidity())
    {
        e.preventDefault();
        const amount = amountInbox.value;
       const description = desInbox.value;
       const category = catInbox.value;
        const details ={
            amount,
            description,
            category,
          }
          const id = new Date().getTime();
    
          localStorage.setItem(id,JSON.stringify(details) );

       
      //const tr = document.createElement("tr");
      const htmlData = `<tr> 
                        <td>${category}</td>
                        <td>${amount}</td>
                        <td>${description}</td>
                        <td><button id = "${id}" class = "e-btn">Edit</button></td>
                        <td><button id = "${id}" class = "d-btn">Delete</button></td>
                        </tr>`;
       // tr.innerHTML= htmlData;
       // console.log(tr);
      //  placeHolder.appendChild(tr);
      placeHolder.innerHTML+=htmlData;
      amountInbox.value = '';
      desInbox.value = '';
      catInbox.value = '';
    }
   } catch (error) {
    console.log(error);
   }
   
}

function editExpenses(e)
{
try {
    if(e.target && e.target.classList.contains('e-btn'))
    {
        e.preventDefault();
        const id = e.target.id;
        const data = JSON.parse(localStorage.getItem(id));
        amountInbox.value = data.amount;
        desInbox.value = data.description;
        catInbox.value = data.category;
        e.target.parentElement.parentElement.remove();
        localStorage.removeItem(id);
    }
    
} catch (error) {
    console.log(error)
}
}
function deleteExpenses(e)
{
   try {
    if(e.target && e.target.classList.contains('d-btn'))
    {
        e.preventDefault();
        const id = e.target.id;
        e.target.parentElement.parentElement.remove();
        localStorage.removeItem(id);
    }
   } catch (error) {
    console.log(error);
   }
}









































/*let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category === ' ')
    {
        alert('Please select the category');
        return;
    }
    if(isNaN(amount) || amount<=0)
    {
        alert('Please enter a valid amount');
        return;
    }
    if(date === ' ')
    {
        alert('Please select a category');
        return;
    }
    expenses.push({category, amount, date});
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent= 'Delete';
    deleteBtn.classList.add('delet-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    const expense = expenses[expenses.length-1];
    categoryCell.textContent = expense.category;
    amountCell.textContent= expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
});

for(const expense of expenses)
{
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent= 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount-=expense.amount;
        totalAmountCell.textContent=totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent= expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
    } */