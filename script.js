// alert("loading");
function addNewWEField(){
   // console.log("Adding new field");
let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add("mt-2");
newNode.setAttribute('rows',3);
newNode.setAttribute('placeholder','add next Experience here');


let weOb=document.getElementById("we");
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb );

}


function addNewAQField(){
    console.log("Adding new field");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','add next Experience here');
    
    
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode, aqAddButtonOb );

}

//GENERTING CV
function generateCV(){

//console.log("genetating cv")


let nameField=document.getElementById('nameField').value;
let name1=document.getElementById('name1')

nameT1.innerHTML = nameField;
// direct method
document.getElementById('nameT2').innerHTML=nameField;
// contact
document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;
//email
document.getElementById('emailT').innerHTML=document.getElementById("emailField").value;
//addressfield
document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;
//address
document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

//address
document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

//address
document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;





}