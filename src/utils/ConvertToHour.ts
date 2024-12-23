export function TimeStampToHour(timeStamp: Date) {
    const timeStampString = timeStamp.toLocaleTimeString();
    const time = timeStampString.split(" ");

    const timeNum = time[0];
    const timeNumHour = timeNum?.split(":")[0];
    let timeNumHourInt = parseInt(timeNumHour!);
    const timeNumMin = timeNum?.split(":")[1];
    const timeString = time[1]?.slice(-2);

    let res = "";

    if (timeString == "PM") {
        timeNumHourInt += 12;
        res = timeNumHourInt + "." + timeNumMin;
    } else {
        res = "0" + timeNumHourInt + "." + timeNumMin;
    }

    return res;
}