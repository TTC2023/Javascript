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

var createCounter = function(init) {
    let original = init
    return {
        increment: function () {
            init++
            return init
        },
        decrement: function (){
            init--
            return init
        },
        reset: function (){
            init = original
            return init
        }
    } 
};

var map = function(arr, fn) {
    let res = []
    for(let i=0; i < arr.length; i++){
        res.push(fn(arr[i], i))
    }
    return res
};

var filter = function(arr, fn) {
    const res = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){
            res.push(arr[i])
        }
    }
    return res
};