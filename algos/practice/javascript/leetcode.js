var once = function(fn) {
    let status = false;
    let result;
    return function(...args){
        if(!status){
            result = fn(...args)
            status = true;
            return result
        }
        else{
            return undefined
        }
    }
};


let fn = (a,b,c) => (a + b + c);
let onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // logs 6
