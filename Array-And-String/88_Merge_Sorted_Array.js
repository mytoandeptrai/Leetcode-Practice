/**
 * [1,2,3,0,0,0]
 * [2,5,6]
 */

function insertNumToArray(x, a, m) {
   let isHasCharacter = false;
   for (let k = 0; k < m; k++) {
      if (a[k] > x) {
         isHasCharacter = true;

         for (let i = m - 1; i >= k; i--) {
            a[i + 1] = a[i];
         }

         a[k] = x;
         break;
      }
   }

   if (!isHasCharacter) {
      a[m] = x;
   }
}

var merge = function (nums1, m, nums2, n) {
   nums2.forEach((num) => {
      insertNumToArray(num, nums1, m);
      m++;
   });

   return nums1;
};

var mergeTwoPointer = function (nums1, m, nums2, n) {
   let k = m + n - 1; /** get the last element in nums1 */
   let i = m - 1;
   let j = n - 1;

   while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
         nums1[k] = nums1[i];
         k--;
         i--;
      } else {
         nums1[k] = nums2[j];
         k--;
         j--;
      }
   }

   while (j >= 0) {
      nums1[k] = nums2[j];
      k--;
      j--;
   }

   while (i >= 0) {
      nums1[k] = nums1[i];
      k--;
      i--;
   }

   return nums1;
};

mergeTwoPointer(
   (nums1 = [1, 2, 3, 0, 0, 0]),
   (m = 3),
   (nums2 = [2, 5, 6]),
   (n = 3)
);

merge((nums1 = [2, 3, 4, 5, 0, 0, 0]), (m = 4), (nums2 = [0, 3, 6]), (n = 3));
