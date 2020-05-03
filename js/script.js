//Akan names in gender arrays with Sunday=[0]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

//get values from form
var Year = document.forms.myform.year.value;
var mm = document.forms.myform.month.value;
var DD = document.forms.myform.date.value;
var b = document.forms.myform.gender;
var sex = b.options[b.selectedIndex].value;

//split Year into year-part and century-part
var cc = parseInt(Year / 100);
var yy = Year % 100;

// year code, YY
var YY = [yy + (parseInt(yy / 4))] % 7;

//month code, MM
var MM = function monthCode() {
    if (mm == '1') {
        MM = 0;
    } else if (mm == '2') {
        MM = 3;
    } else if (mm == '3') {
        MM = 3;
    } else if (mm == '4') {
        MM = 6;
    } else if (mm == '5') {
        MM = 1;
    } else if (mm == '6') {
        MM = 4;
    } else if (mm == '7') {
        MM = 6;
    } else if (mm == '8') {
        MM = 2;
    } else if (mm == '9') {
        MM = 5;
    } else if (mm == '10') {
        MM = 0;
    } else if (mm == '11') {
        MM = 3;
    } else if (mm == '12') {
        MM = 5;
    }
    return MM;
}

//century codes, CC
var CC = function centuryCode() {
    if (year >= 1800 && year <= 1899) {
        CC = 2;
    } else if (year >= 1900 && year <= 1999) {
        CC = 0;
    } else if (year >= 2000 && year <= 2099) {
        CC = 6;
    }
    return CC;
}

//leap year, LY
var LY = function isYearLeap() {
    if (year % 4 == 0 & year % 100 != 0) {
        return LY = true;
    } else if (year % 400 == 0) {
        return LY = true;
    } else {
        return LY = false;
    }
}

var day = function dayOfWeek() {
    //isYearLeap();
    //centuryCode();
    //monthCode();
    if (LY == true & mm == 1 | 2) {
        day = (YY + MM + CC + DD - 1) % 7;
    } else {
        day = (YY + MM + CC + DD) % 7;
    }
    return day;
}

function getAkanName() {
    //dayOfWeek();
    if (sex == 'Female') {
        alert("Your Akan name is: Ama");
    } else {
        alert("Your Akan name is: " + maleNames[day]);
    }
}