import dayjs from "dayjs";

export const formatAsMonthYear = (dateObj) => {
    if (!dateObj || !dateObj.year) return null;

    if (!dateObj.month) 
        return dayjs()
            .year(dateObj.year)
            .format("YYYY");

    return dayjs()
        .month(dateObj.month - 1)
        .year(dateObj.year)
        .format("MMM YYYY");
}