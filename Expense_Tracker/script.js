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
          axios.post("https://crudcrud.com/api/45e59f8b6b4a481cb7221fa890645e78/ExpenseTracker", details)
          .then((response)=>{
            console.log(response)
          })
          .catch((err)=>{
            document.body.innerHTML= document.body.innerHTML+"<h4> Something Went Wrong </h4>"
            console.log(err)
          })
    
        

       
      const tr = document.createElement("tr");
      const htmlData = `<tr> 
                        <td>${category}</td>
                        <td>${amount}</td>
                        <td>${description}</td>
                        <td><button id = "${id}" class = "e-btn">Edit</button></td>
                        <td><button id = "${id}" class = "d-btn">Delete</button></td>
                        </tr>`;
       tr.innerHTML= htmlData;
       console.log(tr);
       placeHolder.appendChild(tr);
     response.data+=htmlData;
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

























