nums = [0,1,2,3,4,5,6,7,8,9,10]

nums.sort(function (a, b) { return a - b; })

for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
        nums.splice(i, 1)
    }
}

return nums[nums.length - 2] //Sondan bir öncekini verir.
