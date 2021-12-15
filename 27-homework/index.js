function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let k = 0; k < nums.length; k++) {
            if (nums[i] === nums[k] && i !== k) {
                return true
            }
            
        }
        return false
    }
}
console.log(containsDuplicate([1,2,3,4]));