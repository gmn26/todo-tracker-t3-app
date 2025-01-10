export function TimeStampToHour(timeStamp: Date) {
    const timeStampISO = timeStamp.toISOString();
    const time = timeStampISO.split("T")[1]?.split(".")[0];

    const res = time?.replace(":", ".");

    return res;
}