function myMath(selector,string){
    var temp = string;
    switch(selector){
        case 1:
            res(temp);
            break;
        case 2:
            back(temp);
            break;
        case 3:
            factorial(temp);
            break;
        case 4:
            root(temp);
            break;
        case 5:
            fat(temp);
            break;
    }
    function res(a){
        a.innerHTML = eval(a.innerHTML);
    }
    function back(a){
        a.innerHTML = a.innerHTML.substring(0, a.innerHTML.length -1);
    }
    function root(a){
        a.innerHTML = Number(eval(a.innerHTML));
        a.innerHTML = Math.sqrt(a.innerHTML);
    }
    function factorial(a){
        a.innerHTML = Number(eval(a.innerHTML));
        if (a.innerHTML < 52){
            let res = 1;
            for(i = a.innerHTML; i > 1; i--){
                res *= i;
            }
            a.innerHTML = res;
        }
        else {
            alert('Resultado muito grande para computar aqui!')
        }
    }
    function fat(a){
        a.innerHTML = Number(eval(a.innerHTML));
        let c = 1;
        while(a.innerHTML > 1){
            a.innerHTML /= c;
            c++;
        }
        a.innerHTML = c-1;
    }
}