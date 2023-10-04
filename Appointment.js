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
    childEle.textContent= details.name + ' - ' + 
                          details.email + ' - ' + 
                          details.phone + ' - ' + 
                          details.date + ' - ' + 
                          details.time ;
    deleteB.className="button del";
    deleteB.id = `${details.email}`;
    deleteB.textContent="Delete";
    parentEle.appendChild(childEle);
    parentEle.appendChild(deleteB);
   }
  
    const deleteB = document.querySelector('.del')
    parentEle.addEventListener('click', DeleteRow);
    console.log(parentEle)
  
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
 /* let myObj = JSON.stringify(details)
  localStorage.setItem('Details', myObj);
  let myObj1 = JSON.parse(localStorage.getItem("Details"));
  console.log(myObj1);
  //showUserOnScreen(myObj); */


/*var name = document.getElementById("fname").value;
var email = document.getElementById("e-mail").value;
var phone = document.getElementById("pnumber").value;
var date = document.getElementById("date").value;
var time = document.getElementById("tcall").value;

if(name.value =='' || email.value =='' || phone.value =='' ||date.value==''||time.value=='')
{
    console.log("Please Enter all details");
}
else{
    console.log("Successfully Register")
}

localStorage.setItem('is_full_Name', name);
localStorage.setItem('is_valid_Email', email);
localStorage.setItem('is_valid_Number', phone);
localStorage.setItem('Date', date);
localStorage.setItem('Time_for_call', time); */
