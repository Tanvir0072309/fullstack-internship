function getfullname(firstName,lastName){
	return `${firstName} ${lastName}`.trim();
};

function isEven(number){
	return Number.isInteger(number) && number % 2 === 0;
};

console.log(getfullname("Tanvir","khan"));
console.log(isEven(2));
console.log(isEven(7));
