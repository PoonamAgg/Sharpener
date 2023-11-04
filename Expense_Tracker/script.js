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
          axios.post("https://crudcrud.com/api/548774194ebe43b8b853c4eda5c98d01/ExpenseTracker", details)
          .then((response)=>{

            amountInbox.value = '';
            desInbox.value = '';
            catInbox.value = '';
            ShowData();
          })
          .catch((err)=>{
            document.body.innerHTML= document.body.innerHTML+"<h4> Something Went Wrong </h4>"
            console.log(err)
          })
    }
   } catch (error) {
    console.log(error);
                    }
}

function ShowData(){
    axios.get("https://crudcrud.com/api/548774194ebe43b8b853c4eda5c98d01/ExpenseTracker")
    .then((response)=>{
        placeHolder.innerHTML="";
        response.data.forEach((ele)=>{
            const tr = document.createElement("tr");
            const htmlData = `<tr> 
                              <td>${ele.category}</td>
                              <td>${ele.amount}</td>
                              <td>${ele.description}</td>
                              <td><button id = "${ele.id}" class = "e-btn">Edit</button></td>
                              <td><button id = "${ele.id}" class = "d-btn">Delete</button></td>
                              </tr>`;
              tr.innerHTML= htmlData;
              placeHolder.appendChild(tr);

        })
        
   
      })
      .catch((err)=>{
        console.log(err)
      })
}
ShowData();

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
} 
catch (error) {
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

























