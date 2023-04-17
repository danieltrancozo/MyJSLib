function render(element){
    let p = document.querySelector(element.place)
    let e = document.createElement(element.tag)
    if(element.class != ''){
        e.setAttribute('class',element.class)
    }
    if (element.attribute1 != ''){
        e.setAttribute(element.attribute1.name,element.attribute1.value)
    }
    if (element.attribute2 != ''){
        e.setAttribute(element.attribute2.name,element.attribute2.value)
    }
    if (element.value != ''){
        e.value = element.value
    }
    if (element.text != ''){
        e.innerHTML = element.text
    }
    p.appendChild(e)
}