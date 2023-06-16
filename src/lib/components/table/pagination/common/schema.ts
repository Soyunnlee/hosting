type DetailDateTime = {
	detail_date: string;
	detail_time: string;
};
export type pageRows<T> = DetailDateTime & T;
