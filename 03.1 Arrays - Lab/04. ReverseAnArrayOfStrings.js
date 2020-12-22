function reverseAnArrayOfStrings(arrayOfStrings) {

    let reversedStrings = "";
    for (let i = arrayOfStrings.length - 1; i >= 0; i--) {
        reversedStrings += `${arrayOfStrings[i]} `;
    }

    console.log(reversedStrings);
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
