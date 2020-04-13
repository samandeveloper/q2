// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

function findSum(array,target){

let array = [1,2,3];
let target = [4,5];
let answer = (array, target)=>{
	for (let i=0; i<array.length; i++){
	for(let j=i+1; j<array.length; j++){
	if (array[i]+array[j]===target){
		alert("hi");
		return [array[i],array[j]];
	}
}
}

}
console.log(answer(array,4));
console.log(answer(array,5));