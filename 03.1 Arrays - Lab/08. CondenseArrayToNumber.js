function condenseArrayToNumber(arrayInput) {

    let array = arrayInput;

    while (array.length > 1) {

        let temporaryArray = [];

        for (let i = 0; i < array.length - 1; i++) {

            temporaryArray.push(array[i] + array[i + 1]);
        }

        array = temporaryArray;
    }

    console.log(`${array}`);
}

condenseArrayToNumber([2, 10, 3]);
