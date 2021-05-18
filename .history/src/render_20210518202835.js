function render(place,element, classe){
    place.innerHTML=place.innerHTML+ '<'+ element +' class ="' + classe +'"></' + element +'>';
}
export default render;