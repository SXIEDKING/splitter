"use strict"

function split4(e){

    if (e.shiftKey){
    //If Shift key is pressed - Do the unsplitting
        this.parentNode.addEventListener("click", split4)
        this.parentNode.innerHTML = ''
}else{
   //If not then clicking will split a div into 4 by adding 4 quarters
   addQuarter(this)
   addQuarter(this)
   addQuarter(this)
   addQuarter(this)

}

// Event 'capturing and bubbling' 
    e.stopPropagation() //stop the event from firing again on all the ancestor divs
}


function addQuarter(intoDiv){
    let q = document.createElement("div") //Creates a div element held by the variable 'q'
    q.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    //Adds two classes to the div element
    q.classList.add("flexy")
    q.classList.add("quarter")

    q.addEventListener("click", split4) //Whenever we click, it splits into 4 sections
    intoDiv.appendChild(q)
}

document.body.addEventListener("click", split4)
