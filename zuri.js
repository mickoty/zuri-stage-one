"use strict";
const weekValue = document.querySelector(".weekvalue");
const timeValue = document.querySelector(".timevalue");

const date = new Date();
const newDate = date.toLocaleString();
console.log(date);
console.log(newDate);

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};
const formatter = new Intl.DateTimeFormat(navigator.language, options);
const formattedDate = formatter.format(date).split(" ");
console.log(formattedDate);

weekValue.textContent = formattedDate[0].slice(0, -1);
timeValue.textContent = `${formattedDate[5].slice(0, -3)} ${formattedDate[6]} `;
