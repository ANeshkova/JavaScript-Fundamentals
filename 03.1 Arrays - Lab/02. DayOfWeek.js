function dayOfWeek(number) {

    let numberOfDay = Number(number);

    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (1 <= numberOfDay && numberOfDay <= 7) {
        console.log(days[numberOfDay - 1]);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek('3');
