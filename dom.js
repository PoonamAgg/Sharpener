//Examine the document objects
//console.log(document.domain)
//console.log(document.URL)
//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)
// console.dir(document);
// var headertitle = document.getElementById('header-title');
// var mainheader= document.getElementById('main-header');
//console.log(headertitle);
//headertitle.textContent = 'Hello'
// headertitle.innerHTML = "goodBye"
//console.log(headertitle.innerText)
//headertitle.innerHTML = '<h3> hello </h3>'
//mainheader.style.borderBottom = 'solid 3px #000 '
// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1])
//items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// console.log(items[2])
// items[2].textContent = 'Hello 3';
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';
// for(var i =0;i<items.length;i++)
// {
 //    items[i].style.backgroundColor = 'green'
// }
                 //   var li = document.getElementsByTagName('li')
                //    console.log(li)
                //    console.log(li[1])
                //    li[1].textContent = "hii 2";
                //    li[1].style.fontWeight = 'bold';
                //    li[1].style.backgroundColor= "red"
                 //   for(var a =0; a<li.length;a++)
                  //  {
                   //     li[a].style.backgroundColor = 'red'
                   // }

                   /*Query Selector
                   var header = document.querySelector('#main-header')
                   header.style.borderBottom = 'solid 4px yellow'
                   var input = document.querySelector('input')
                   input.value= 'hiii';

                   var submit = document.querySelector('input[type = "submit"]')
                   submit.value= "Goo"

                   var item = document.querySelector('.list-group-item')
                   item.style.color = 'red'
                   item.style.fontWeight = 'bold';

                   var lastitem = document.querySelector('.list-group-item:last-child');
                   lastitem.style.fontWeight = 'bold';
                   lastitem.style.color = 'pink'*/

                   var seconditem = document.querySelector('.list-group-item:nth-child(2)');
                   seconditem.style.fontWeight = 'bold';
                   seconditem.style.backgroundColor = 'green' 

                   var thirditem = document.querySelector('.list-group-item:nth-child(3)');
                  thirditem.style.display = 'none' 

                   //Query Selector All

                  /* var tiltles = document.querySelectorAll('.title');
                   console.log(tiltles)
                 tiltles[0].textContent = 'HIIII';

                 var odd = document.querySelectorAll('li:nth-child(odd)');
                 var even = document.querySelectorAll('li:nth-child(even)');
                 for(var i =0;i<odd.length;i++)
                 {
                    odd[i].style.backgroundColor = "#f4f4f4";
                    even[i].style.backgroundColor = "#ccc";
                } */