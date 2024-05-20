let Temperature= document.querySelector("[name='Temperature']")
let celsius= document.querySelector("[name='celsius']")
let fahrenheit= document.querySelector("[name='fahrenheit]")
let calculate= document.querySelector("[name='calculate']")
let calcbtn= document.querySelector("#calcbtn")


function results() {
   let temp= celsius.value / ( (celsius.value*1.8) +32)
    calculate.value=temp

}

function results() {
    let temp= fahrenheit.value / ( (fahrenheit.value-32) *5/9)
     calculate.value=temp
 
 }



calcbtn.addEventListener("click", results)