const  formInput = document.getElementById('forminput');
const nameInbox = formInput.querySelector('#name-input');
const DesInbox = formInput.querySelector('#des-input');
const priceInbox = formInput.querySelector('#price-input');
const quantInbox = formInput.querySelector('#quant-input');

const SubmitBtn = formInput.querySelector('#add-btn');
const placeHolder = document.getElementById('placeholder');

SubmitBtn.addEventListener('click', AddCandy);
placeHolder.addEventListener('click', buyChocolates);

function AddCandy(e){
   try {
    if(e.target && formInput.checkValidity())
    {
        e.preventDefault();
        const Name = nameInbox.value;
       const Description = DesInbox.value;
       const price = priceInbox.value;
       const quantity = quantInbox.value;
        const details ={
            id:new Date().getTime(),
            Name,
            Description,
            price,
            quantity
          }
          const id = new Date().getTime();
          axios.post("https://sheet.best/api/sheets/24888e69-6484-46ca-bf7d-8860a0d60fcd", details)
          .then((response)=>{
            nameInbox.value ='';
            DesInbox.value = '';
            priceInbox.value = '';
            quantInbox.value = '';
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
    axios.get("https://sheet.best/api/sheets/24888e69-6484-46ca-bf7d-8860a0d60fcd")
    .then((response)=>{
        placeHolder.innerHTML="";
        response.data.forEach((ele)=>{
            const tr = document.createElement("tr");
            const htmlData = `<tr> 
                              <td>${ele.Name}</td>
                              <td>${ele.Description}</td>
                              <td>${ele.price}</td>
                              <td>${ele.quantity}</td>
                              <td><button id = "${ele.id}" class = "e-btn" value="1">Buy 1</button></td>
                              <td><button id = "${ele.id}" class = "e-btn" value="2">Buy 2</button></td>
                              <td><button id = "${ele.id}" class = "e-btn" value="3">Buy 3</button></td>
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

function buyChocolates(e)
{
try {
    if(e.target && e.target.classList.contains('e-btn'))
    {
        e.preventDefault();
        const id = e.target.id;
        const val = e.target.value;
        axios.get(`https://sheet.best/api/sheets/24888e69-6484-46ca-bf7d-8860a0d60fcd/id/${id}`)
        .then((response)=>{
            const data = response.data;
            let quantity = data[0].quantity;
            quantity=quantity-val;
            
            if(quantity>=0)
            {
               if (quantity == 0)
               {
                data[0].quantity= '0';
               
               }
               else{
                data[0].quantity= quantity;
               }
               axios.put(`https://sheet.best/api/sheets/24888e69-6484-46ca-bf7d-8860a0d60fcd/id/${id}`, data[0])
               .then((response)=>{
                ShowData();
               })
               .catch((error)=>{
                   console.log(error)
               })
            }
            else{
               alert('Insuffient Quantity')
            }
        })
    }
} 
catch (error) {
    console.log(error)
                }
}
