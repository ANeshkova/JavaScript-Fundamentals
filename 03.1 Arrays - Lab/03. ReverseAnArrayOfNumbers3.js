function reverseAnArrayOfNumbers3(num, arrayOfNumbers) {

    num = Number(num);

    let printString = "";

    for (let i = num - 1; i >= 0; i--) {
        printString += `${arrayOfNumbers[i]} `;
    }

    console.log(printString);

}

reverseAnArrayOfNumbers3(3, [10, 20, 30, 40, 50]);
