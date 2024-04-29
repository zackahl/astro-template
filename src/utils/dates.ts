type yearFormat = "numeric" | "2-digit"
type monthFormat = "numeric" | "2-digit" | "long" | "short" | "narrow"
type dayFormat = "numeric" | "2-digit"

export const getFormattedDate = (date:Date, yearFormat?:yearFormat, monthFormat?:monthFormat, dayFormat?:dayFormat) => {
    return (
        date
        ? new Date(date).toLocaleDateString("en-au", {
            year: yearFormat || "numeric",
            month: monthFormat || "short",
            day: dayFormat || "numeric"
        })
        : ""
    )
}

export const getOrdinal = (n:number) => {
    return (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}