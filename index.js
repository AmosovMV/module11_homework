function countDown(n) {
	let arr = []; 
	 if (n < 0) {
		 arr = 'Отрицательное число';
	 } else {
		 if (typeof (n) != "number") {
			 arr = 'Не число';
		 } else {
				 
					 let l = 0;
			 for (let i = n; i >= 1; i--) {
				 arr[l++] = i;
			 }
			 console.log(arr);
			 
		 }
	 }
	 return arr; 
 }

module.exports = countDown;