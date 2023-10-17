function myfunct(event)
{
    event.preventDefault();
    const name = event.target.fname.value;
    const email = event.target.email.value;
    const phone = event.target.pnumber.value;
    const date = event.target.date.value;
    const time = event.target.tcall.value;

    const details = {
        name,
        email,
        phone,
        date,
        time,
    }; 
    localStorage.setItem(details.email, JSON.stringify(details));
    showUserOnScreen(details);
  
}
    const parentEle = document.getElementById('listOfitems');
    function showUserOnScreen(details)
   {
    const childEle = document.createElement('li');
    const deleteB = document.createElement('button')
    const EditB = document.createElement('button')
    childEle.textContent= details.name + ' - ' + 
                          details.email + ' - ' + 
                          details.phone + ' - ' + 
                          details.date + ' - ' + 
                          details.time ;
    deleteB.className="button del";
    deleteB.id = `${details.email}`;
    deleteB.textContent="Delete";
    EditB.className="button edi";
    EditB.id=`${details.email}`;
    EditB.textContent="EDIT";
    parentEle.appendChild(childEle);
    parentEle.appendChild(deleteB);
    parentEle.appendChild(EditB);
   }
  
    const deleteB = document.querySelector('.del')
    parentEle.addEventListener('click', DeleteRow);
    console.log(parentEle)
  
    const EditB = document.querySelector('.edi');
    parentEle.addEventListener('click', EditData);
    console.log(EditB);

    //Delete Function Call
    function DeleteRow(e){
    e.preventDefault();
    const btnId = e.target.id;
    if(e.target.classList.contains('del'))
    {
        console.log(e.target);
        console.log(e.target.previousSibling)
        e.target.previousSibling.remove();
        e.target.remove();
        localStorage.removeItem(btnId);
    }
   } 

   //Edit Function call
   function EditData(e)
   {
    e.preventDefault();
    const editbtn = e.target.id;
    if(e.target.classList.contains('edi'))
    {
        console.log("Edit Called")
        localStorage.removeItem(`${deleteB}`);

        //Regain the details
        const editDetails = document.querySelector('input');
        editDetails.value=`${editbtn.fname}`;
        const editSelect =document.querySelectorAll('select');
        editSelect[0].value=`${editbtn.fname}`;

        e.target.parentEle.remove()
    }
    
   }

