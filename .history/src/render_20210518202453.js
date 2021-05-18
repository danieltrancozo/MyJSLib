function render(element, classe){
    body.innerHTML=body.innerHTML+ '<'+ element +' class ="' + classe +'"></' + element +'>';
}
export default render;