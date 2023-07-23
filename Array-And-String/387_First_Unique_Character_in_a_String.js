var firstUniqChar = function (s) {
   const hashMap = {};
   let count = -1;

   for (let index = 0; index < s.length; index++) {
      const char = s[index];
      if (!hashMap[char]) {
         hashMap[char] = {
            index,
            count: 1,
         };
      } else {
         hashMap[char] = {
            index,
            count: hashMap[char].count + 1,
         };
      }
   }

   for (let index = 0; index < Object.values(hashMap).length; index++) {
      const element = Object.values(hashMap)[index];
      if (element.count === 1) {
         count = element.index;
         break;
      }
   }

   return count;
};

function firstUniqCharV2(s) {
   for (let index = 0; index < s.length; index++) {
      const char = s[index];
      if (s.indexOf(char) === s.lastIndexOf(char)) {
         return index;
      }
   }
   return -1;
}

firstUniqChar('loveleetcode');
firstUniqCharV2('loveleetcode');
