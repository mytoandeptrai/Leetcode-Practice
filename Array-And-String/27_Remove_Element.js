var removeElement = function (nums, val) {
   let k = 0;
   for (let index = 0; index < nums.length; index++) {
      if (nums[index] !== val) {
         nums[k] = nums[index];
         k++;
      }
   }

   return k;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], (val = 3));
