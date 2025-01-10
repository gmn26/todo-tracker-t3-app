export function TimeStampToDate(timeStamp: Date) {
    const date = timeStamp.toDateString();
    const res = date.split(" ");
    return res[2] + " " + res[1] + " " + res[3];
}