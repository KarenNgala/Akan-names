//Akan names in gender arrays with Sunday=[0]
const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

//get values from form
var Year = document.forms["myform"]["year"].value;
var a = document.forms["myform"]["month"].value;
var mm = a.options[a.selectedIndex].value;
var DD = document.forms["myform"]["date"].value;
var b = document.forms["myform"]["gender"];
var sex = b.options[b.selectedIndex].value;

//split Year into year-part and century-part
var cc = parseInt(Year / 100);
var yy = Year % 100;

//Initialization
var YY;
var MM;
var CC;
var LY;
var day

//Calculating day of week

// year code, YY
YY = [yy + (parseInt(yy / 4))] % 7;
//month code, MM
if (mm == 'January') {
    MM = 0;
} else if (mm == 'February') {
    MM = 3;
} else if (mm == 'March') {
    MM = 3;
} else if (mm == 'April') {
    MM = 6;
} else if (mm == 'May') {
    MM = 1;
} else if (mm == 'June') {
    MM = 4;
} else if (mm == 'July') {
    MM = 6;
} else if (mm == 'August') {
    MM = 2;
} else if (mm == 'September') {
    MM = 5;
} else if (mm == 'October') {
    MM = 0;
} else if (mm == 'November') {
    MM = 3;
} else if (mm == 'December') {
    MM = 5;
} else {
    alert("Choose a month")
}
//century codes, CC
if (year >= 1800 && year <= 1899) {
    CC = 2;
} else if (year >= 1900 && year <= 1999) {
    CC = 0;
} else if (year >= 2000 && year <= 2099) {
    CC = 6;
} else {
    alert("Enter a year between 1900 and 2020")
}
//leap year, LY
if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
    if (mm == 'January' || mm == 'February') {
        day = (YY + MM + CC + DD - 1) % 7;
    }
} else {
    day = (YY + MM + CC + DD) % 7;
}


function getAkanName() {
    if (sex === 'Female')
        alert("Your Akan name is: " + femaleNames[day]);
    else {
        alert("Your Akan name is: " + maleNames[day]);
    }
}