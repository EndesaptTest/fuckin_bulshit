let elements=Array.from(document.getElementsByClassName("display_none"));
console.log(elements);
elements.forEach(element => {
    element=[element,false];
});

function show(n){
    if(!elements[n][1]){
        elements[n].classList.remove("display_none");
    }else{
        elements[n].classList.add("display_none");
    }
    elements[n][1]=!elements[n][1];
}

