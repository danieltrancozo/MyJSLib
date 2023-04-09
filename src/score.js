function score(count,p) {
    let pontos = count + p;
    console.log(pontos);
    let score = document.querySelector('h3.score');
    score.innerHTML = 'Pontua&ccedil&atildeo: ' + pontos;
    return(pontos);
}