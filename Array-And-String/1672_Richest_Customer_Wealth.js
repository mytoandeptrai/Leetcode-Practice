function calculateSum(array) {
   let sum = 0;
   for (let index = 0; index < array.length; index++) {
      const element = array[index];
      sum += element;
   }

   return sum;
}

var maximumWealth = function (accounts) {
   let max = 0;

   for (let index = 0; index < accounts.length; index++) {
      const account = accounts[index];
      max = Math.max(max, calculateSum(account));
   }

   return max;
};

maximumWealth([
   [1, 5],
   [7, 3],
   [3, 5],
]);
