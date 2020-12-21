function reverseAnArrayOfNumbers(num, arrayOfNumbers) {

    num = Number(num);
    let newArray = [];

    for (let i = 0; i < num; i++) {
        newArray[num - 1 - i] = arrayOfNumbers[i];
    }

    console.log(newArray.join(" "));

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
