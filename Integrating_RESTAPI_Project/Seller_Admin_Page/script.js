const  formInput = document.getElementById('forminput');
const priceInbox = formInput.querySelector('#price-input');
const proInbox = formInput.querySelector('#product-input');
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
        const price = priceInbox.value;
       const product = proInbox.value;
        const details ={
            id:new Date().getTime(),
            price,
            product,
            
          }
          const id = new Date().getTime();
          axios.post("https://sheet.best/api/sheets/4dc804e9-45ce-4449-908b-fd1a7a768908", details)
          .then((response)=>{

            priceInbox.value = '';
            proInbox.value = '';
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
    axios.get("https://sheet.best/api/sheets/4dc804e9-45ce-4449-908b-fd1a7a768908")
    .then((response)=>{
        placeHolder.innerHTML="";
        let total = 0;
        response.data.forEach((ele)=>{
            total+=Number(ele.price)
            const tr = document.createElement("tr");
            const htmlData = `<tr> 
                              <td>${ele.price}</td>
                              <td>${ele.product}</td>
                              <td><button id = "${ele.id}" class = "e-btn">Edit</button></td>
                              <td><button id = "${ele.id}" class = "d-btn">Delete</button></td>
                              </tr>`;
              tr.innerHTML= htmlData;
              placeHolder.appendChild(tr);

        })
        total_amount.innerHTML=`Total Value of the Products Rs ${total}`;
        
   
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
        axios.get(`https://sheet.best/api/sheets/4dc804e9-45ce-4449-908b-fd1a7a768908/id/${id}`)
        .then((response)=>{
            const data = response.data;
            priceInbox.value = data[0].price;
            proInbox.value = data[0].product;
            e.target.parentElement.parentElement.remove();
            axios.delete(`https://sheet.best/api/sheets/4dc804e9-45ce-4449-908b-fd1a7a768908/id/${id}`)
            .then((response)=>{
                
            })
            .catch((error)=>{
                console.log(error)
            })
        })
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
        axios.delete(`https://sheet.best/api/sheets/4dc804e9-45ce-4449-908b-fd1a7a768908/id/${id}`)
        .then((response)=>{
            ShowData();
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
        } catch (error) {
    console.log(error);
                         }
}