var once = function (fn) {
    let status = false;
    let result;
    return function (...args) {
        if (!status) {
            result = fn(...args)
            status = true;
            return result
        }
        else {
            return undefined
        }
    }
};


let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // logs 6

var createCounter = function (init) {
    let original = init
    return {
        increment: function () {
            init++
            return init
        },
        decrement: function () {
            init--
            return init
        },
        reset: function () {
            init = original
            return init
        }
    }
};

var map = function (arr, fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i))
    }
    return res
};

var filter = function (arr, fn) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i])
        }
    }
    return res
};

var reduce = function (nums, fn, init) {
    if (nums.length == 0) {
        return init
    }
    let accum = init
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        accum = fn(accum, curr)
    }
    return accum
};

var compose = function (functions) {
    let res = 0
    return function (x) {
        res = functions.reduceRight(x)
    }
};

var filter = function (arr, fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i])
        }
    }
    return res
};

Array.prototype.last = function () {
    if (this.length === 0) {
        return -1
    } else {
        return this[this.length - 1]
    }
};

var ArrayWrapper = function (nums) {
    this.nums = nums
};

ArrayWrapper.prototype.valueOf = function () {
    let total
    if (this.nums.length === 0) {
        return 0
    }
    else {
        for (let i = 0; i < this.nums.length; i++) {
            total = this.nums.reduce(function (a, c) {
                return a + c;
            }, 0);

        }
        return total
    }
}

ArrayWrapper.prototype.toString = function () {
    let res = JSON.stringify(this.nums)
    return res
}

var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b)
    console.log(arr)
    let difference = arr[arr.length - 1] - arr[arr.length - 2]
    let current = arr[arr.length - 2]
    for (let i = arr.length - 3; i >= 0; i--) {
        if (current - arr[i] !== difference) {
            return false
        } else {
            current = arr[i]
        }
    }
    return true
};

var equalPairs = function (grid) {
    let col = []
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        let newArr = []
        for (let j = 0; j < grid[i].length; j++) {
            newArr.push(grid[j][i])
        }
        col.push(newArr)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < col.length; j++) {
            if (JSON.stringify(grid[i]) === JSON.stringify(col[j])) {
                count++
            }
        }
    }
    return count
};

var maximizeSum = function (nums, k) {
    let most = Math.max(...nums)
    let ans = 0
    for (let i = 0; i < k; i++) {
        ans += most
        most++
    }
    return ans
};

var maximum69Number = function (num) {
    let arr = [num];
    let str = num.toString().split(""); // Convert the string to an array of characters
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "9") {
            str[i] = "6";
        } else {
            str[i] = "9";
        }
        arr.push(parseInt(str.join("")));
        str = num.toString().split(""); // Convert the array back to a string and parse it as an integer
    }
    console.log(arr)
    return Math.max(...arr);
};

var countKDifference = function (nums, k) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                count++
            };
        }
    }
    return count
};

var diagonalSum = function (mat) {
    let res = 0
    let place = 0
    for (let i = 0; i < mat.length; i++) {
        res += mat[i][i]
    }
    for (let i = mat.length - 1; i >= 0; i--) {
        res += mat[place][i]
        place++
    }
    if (mat.length % 2 !== 0) {
        let mid = Math.floor(mat.length / 2)
        res -= mat[mid][mid]
    }
    return res
};

var toLowerCase = function (s) {
    return s.toLowerCase()
};

