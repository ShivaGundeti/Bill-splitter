const billamount = document.getElementById("bill-amount");
const generatebill = document.querySelector(".generate-bill-btn");

const tipamount = document.querySelector(".tip-amount span")
const total = document.querySelector(".total span")
const each_person_bill = document.querySelector(".each-person-bill span")
const tipcontainer = document.querySelector(".tip-container");
const each_person = document.querySelector(".each-person");
const number_of_people = document.querySelector(".number-of-people");
let percentage = 0;
const customtip = document.querySelector(".custom-tip");
const reset = document.querySelector(".reset-btn");
let tippercentage = 0;



tipcontainer.addEventListener('click',(e)=>
{
    if (tipcontainer.classList.contains('disabled')) return
   if(e.target !== tipcontainer)
   {
    [...tipcontainer.children].forEach((child) => {
        child.classList.remove("selected");
    })
    console.log(e.target.innerText);
    e.target.classList.add("selected");
    tippercentage = parseInt(e.target.innerText);
    customtip.value = ""; 
   }
   if (number_of_people.value && tippercentage) {
    generatebill.disabled = false
  } else {
    generatebill.disabled = true
  }
   
})

customtip.addEventListener("input", ()=>{
  
    tippercentage = parseInt(customtip.value);
    [...tipcontainer.children].forEach((child) => {
        child.classList.remove("selected");
    })
    if (number_of_people.value && tippercentage) {
        generatebill.disabled = false
      } else {
        generatebill.disabled = true
      }
}
)

generatebill.addEventListener("click", function () {
   const bill = parseInt(billamount.value);
    const people = parseInt(number_of_people.value);
    // const customtipvalue = parseInt(customtip.value);
    const tip = (bill * tippercentage) / 100;
    tipamount.innerText = `${tip}`;
    total.innerText = `${bill + tip}`;
    each_person_bill.innerText = `${(bill + tip) / people}`;    
    reset.disabled = false
})


reset.addEventListener("click", function () {
    billamount.value = "";
    number_of_people.value = "";
    tipamount.innerText = ``;
    total.innerText = ``;
    each_person_bill.innerText = ``;
    customtip.value = ""; 
    tippercentage = 0;
    [...tipcontainer.children].forEach((child) => {
        child.classList.remove("selected");
    })
    customtip.disabled = true
    number_of_people.disabled = true
    tipcontainer.classList.add("disabled")
    reset.disabled = true
    generatebill.disabled = true;
})


billamount.addEventListener("input", ()=> {
    if (billamount.value) {
        customtip.disabled = false
        tipcontainer.classList.remove("disabled")
        number_of_people.disabled = false
    } else {
        customtip.disabled = true
        number_of_people.disabled = true
        tipcontainer.classList.add("disabled")
    }
})

number_of_people.addEventListener("input", ()=> {
    if(number_of_people.value&& tippercentage) {
        generatebill.disabled = false
    }
    else{
        generatebill.disabled = true;
    }
})

