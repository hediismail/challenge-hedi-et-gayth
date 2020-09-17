// declaration 
let input=document.getElementById('myInput');
let addBtn= document.querySelector('.addBtn');
let list= document.querySelector('#myUL');


// add function

function addToDo(){
// 1 get the input value
    let text=document.createTextNode(input.value)
    console.log(text);

    //create the li
    let li = document.createElement('li');
  // aad the text to the li
  li.appendChild(text);
  // 4 add the li to the list
  if(input.value){
    list.appendChild(li);
  }else {
    alert("add value to the input")

  }
  
  // 5 clear the input
  input.value="";
// add the remove btn

let removeBtn=document.createElement('button');
// add the remove btn to li
li.appendChild(removeBtn);
// add a valu to the remove btn
removeBtn.innerText= 'x';



// remove btn event
removeBtn.addEventListener('click',function(){
removeBtn.parentElement.remove();
})

// add a class (stlye) to the remove btn

// removeBtn.setAttribute('class','removeBtn')
// //
// removeBtn.classList.add('remove')
// removeBtn.classList.toggle('remove')

li.addEventListener('mouseover', function(){
    li.style.backgroundColor='rgb(173,173,173,173)';

})
li.addEventListener('mouseout', function(){
    li.style.backgroundColor='lightGray';
})


}

addBtn.addEventListener('click',addToDo);