export function getDatesList(content: String) {
    const dates = content.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);
    if (dates) {
        return dates.join(", ");
    }
    return "";
}

export function formatDate(date: Date) {
    let day = date.getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August" ,"September", "October", "November", "December"];
    const month = date.getMonth();

    const year = date.getFullYear();

    return `${months[month]} ${day < 10 ? `0${day}` : day}, ${year}`;
}

