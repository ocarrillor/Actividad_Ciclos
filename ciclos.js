function isOdd(number){
    if(number % 2 != 0){
        return true;
    }else{
        return false;
    }
}

function serieS(limit){
    let result=4, cont=1;
    for(let i = 3; i <= limit; i++){
        if(isOdd(i)){
            if(isOdd(cont)){
                result -= (4/i);
            }else{
                result += (4/i);
            }
            cont++;
        }
    }
    return result;
}

function factorial(num){
    let fact=num;
    for(let i = num; i > 1; i--){
        fact *= i-1;
    }

    return fact;
}

function serieE(limit){
    result=1;
    for(let i = 1; i <= limit; i++){
        result += 1 / factorial(i);
    }
    return result;
}

console.log(serieS(9));
console.log(serieE(3));