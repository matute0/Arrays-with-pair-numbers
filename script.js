let myArr = [];
/* for(let i = 0; i <= 8; i += 2){
    array.push(i);
}
console.log(myArr); */

function myArray(x) {
    for(let i = 2; i <= x; i += 2){
        myArr.push(i);
    }
};
myArray(10); // Modify this line
console.log(myArr);
