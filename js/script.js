//Akan names in gender arrays with Sunday=[0]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

//get values from form
Year = document.forms.myform.year.value;
mm = document.forms.myform.month.value;
DD = document.forms.myform.date.value;
b = document.forms.myform.gender;
sex = b.options[b.selectedIndex].value;

var Year = parseInt(Year);
var mm = parseInt(mm);
var DD = parseInt(DD);
var sex = toString(sex);

//split Year into year-part and century-part
var cc = parseInt(Year / 100);
var yy = Year % 100;

// year code, YY
var YY = [yy + (parseInt(yy / 4))] % 7;

//month code, MM
var MM = function() {
    if (mm == '1') {
        return MM = 0;
    } else if (mm == '2') {
        return MM = 3;
    } else if (mm == '3') {
        return MM = 3;
    } else if (mm == '4') {
        return MM = 6;
    } else if (mm == '5') {
        return MM = 1;
    } else if (mm == '6') {
        return MM = 4;
    } else if (mm == '7') {
        return MM = 6;
    } else if (mm == '8') {
        return MM = 2;
    } else if (mm == '9') {
        return MM = 5;
    } else if (mm == '10') {
        return MM = 0;
    } else if (mm == '11') {
        return MM = 3;
    } else if (mm == '12') {
        return MM = 5;
    }
}

//century codes, CC
var CC = function() {
    if (Year >= 1800 && Year <= 1899) {
        return CC = 2;
    } else if (Year >= 1900 && Year <= 1999) {
        return CC = 0;
    } else if (Year >= 2000 && Year <= 2099) {
        return CC = 6;
    }
}

//leap year, LY
var LY = function() {
    if (Year % 4 == 0 & Year % 100 != 0) {
        return LY = true;
    } else if (Year % 400 == 0) {
        return LY = true;
    } else {
        return LY = false;
    }
}

//Calculating day of the week
var day = function() {
    if (LY == true & mm == 1 | 2) {
        return day = (YY + MM + CC + DD - 1) % 7;
    } else {
        return day = (YY + MM + CC + DD) % 7;
    }
}

function getAkanName() {
    if (sex === "Female") {
        alert("Your Akan name is: " + femaleNames[day]);
    } else {
        alert("Your Akan name is: " + maleNames[day]);
    }
}