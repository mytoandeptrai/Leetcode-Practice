var findNumbers = function (nums) {
   let count = 0;
   for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num.toString().length % 2 === 0) {
         count++;
      }
   }

   return count;
};

findNumbers([12, 345, 2, 6, 7896]);
