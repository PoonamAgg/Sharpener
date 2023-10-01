function myfunct(event)
{
    event.preventDefault();

    
var name = document.getElementById("fname").value;
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
localStorage.setItem('Time_for_call', time);

}