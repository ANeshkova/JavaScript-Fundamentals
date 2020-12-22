function reverseAnArrayOfNumbers2(num, arrayOfNumbers) {

    num = Number(num);
    let newArray = [];
    let printString = "";

    for (let i = 0; i < num; i++) {
        newArray[num - 1 - i] = arrayOfNumbers[i];
    }

    for (let i = 0; i < newArray.length; i++) {
        printString += `${newArray[i]} `;
    }

    console.log(printString);

}

reverseAnArrayOfNumbers2(3, [10, 20, 30, 40, 50]);
