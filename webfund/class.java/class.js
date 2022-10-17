var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0]; 
    
// your code here!
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index]>0) {
        countPositives +=1;
    }
    
}
console.log("there are " + countPositives + " positive values");