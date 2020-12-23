function equalArrays(firstArr, secondArr) {

    let sum = 0;
    let areIdentical = true;

    if (firstArr.length >= secondArr.length) {
        for (let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] !== secondArr[i]) {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                areIdentical = false;
                break;
            }

            sum += Number(firstArr[i]);
        }

    } else {
        for (let i = 0; i < secondArr.length; i++) {
            if (firstArr[i] !== secondArr[i]) {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                break;
            }
        }
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '21', '30'], ['10', '20', '30']);
