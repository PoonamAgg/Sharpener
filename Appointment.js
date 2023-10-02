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
  let myObj = JSON.stringify(details)
  localStorage.setItem('Details', myObj);
  let myObj1 = JSON.parse(localStorage.getItem("Details"));
  console.log(myObj1);
  //showUserOnScreen(myObj);


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

}