import dayjs from "dayjs";

export function makeDateTime(stringDate: string, addZero?: boolean) {
	let date = new Date(stringDate);
	let year = date.getFullYear();
	let month: number | string = date.getMonth() + 1;
	let day: number | string = date.getDate();
	let hour: number | string = date.getHours();
	let min: number | string = date.getMinutes();
	let sec: number | string = date.getSeconds();

	if (addZero) {
		month = addNumberZero(month);
		day = addNumberZero(day);
		hour = addNumberZero(hour);
		min = addNumberZero(min);
		sec = addNumberZero(sec);

		return { year, month, day, hour, min, sec };
	} else {
		return { year, month, day, hour, min, sec };
	}
}

function addNumberZero(num: number): string {
	if (num < 10) return `0${num}`;
	return `${num}`;
}

export function initDateRange(): { start: string; end: string };
export function initDateRange(isDate: boolean): { start: Date; end: Date };
export function initDateRange(isDate?: boolean): { start: string | Date; end: string | Date } {
	const today = dayjs().set("hour", 0).set("minute", 0).set("second", 0).toDate();
	const startMonth = today.getMonth();
	const endMonth = startMonth + 1;
	const startDate = today;
	const endDate = dayjs(today).add(1, "day").subtract(1, "second").toDate();
	if (isDate) {
		return { start: startDate, end: endDate };
	}
	return { start: startDate.toISOString(), end: endDate.toISOString() };
}
