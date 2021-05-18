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