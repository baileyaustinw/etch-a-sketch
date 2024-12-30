function sumOfTripledEvens(array) {
    let initialValue = 0;
    let evenNums = array.filter((num) =>  num % 2 == 0 );
    console.log("Even numbers:" + evenNums);

    let tripledEvenNums = evenNums.map((num) => num * 3);
    console.log("Even numbers tripled:" + tripledEvenNums);

    let sum = tripledEvenNums.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log("Sum of even tripled numbers:" + sum);

    return sum;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
sumOfTripledEvens(arr);