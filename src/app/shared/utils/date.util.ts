export function convertDateToUTC(date: Date) {
    return new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
}
