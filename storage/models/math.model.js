function isWeekend() {

    let today = new Date().getDay();
    console.log(new Date().getDay());
    return today == 0 || today == 6 ? true : false;
}

//---------------------------------------------------------------------------------------------------------------------

function isLeapYear() {
    let thisYear = new Date().getFullYear();
    console.log(thisYear);
    return (thisYear % 400) ? ((thisYear % 100) ? ((thisYear % 4) ? false : true) : false) : true;
}

//---------------------------------------------------------------------------------------------------------------------

module.exports = {
    isWeekend,
    isLeapYear,
};