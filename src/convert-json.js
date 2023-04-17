function convert(a){
    let temp = fetch(a)
        .then(response => response.json())
        .catch(error => console.error('Json file not found!'))
        return(temp)
}