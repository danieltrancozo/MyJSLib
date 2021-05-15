function myMath(selector,string){
    var temp = string;
    switch(selector){
        case 'res':
            res(temp);
            break;
        case 'clean':
            clean(temp);
            break;
        case 'back':
            back(temp);
            break;
        case 'factorial':
            factorial(temp);
            break;
        case 'root':
            root(temp);
            break;
        case 'fat':
            fat(temp);
            break;
        default:
            window.alert('Function not found!')
    }
    function res(a){
        a = eval(a);
        return a;
    }
    function clean(a){
        a = '';
        return a;
    }
    function back(a){
        a = a.substring(0, a.length -1);
        return(a);
    }
    function root(a){
        a = Number(eval(a));
        a = Math.sqrt(a);
        return (a);
    }
    function factorial(a){
        a = Number(eval(a));
        if (a < 52){
            let res = 1;
            while(a > 1){
                res *= a;
                a--;
            }
            return (res);
        }
    }
    function fat(a){
        a = Number(eval(a));
        let c = 1;
        while(a > 1){
            a /= c;
            c++;
        }
        return (c-1);
    }
}
export default myMath;