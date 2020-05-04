var yy = document.myform.year.value;
var mm = document.myform.month.value;
var dd = document.myform.date.value;
var gender = document.myform.gender.value;

// months are zero indexed so May is 4, not 5
function getDay(y, m, d, g) {
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var d = new Date(y, --m, d);
    if (g === 'Female') {
        return d && femaleNames[d.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }
}

function displayName() {
    alert("You Akan name is:  " + getDay(yy, mm, dd, gender));
}