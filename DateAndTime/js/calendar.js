const date = document.querySelector("#date");
const day = document.querySelector("#days");
const month = document.querySelector("#months");
const year = document.querySelector("#years");

const today = new Date();

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const allYear = ["January","February","March" ,"April", "May","June","July","August" ," September", "October","November", "December"]

date.innerHTML = today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allYear[today.getMonth()];
year.innerHTML = today.getFullYear();
