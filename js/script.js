var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var yy = parseInt(document.getElementById("year").value);
var mm = parseInt(document.getElementById("month").value);
var dd = parseInt(document.getElementById("date").value);
var gender = document.form.gender.value;

// months are zero indexed so May is 4, not 5
function getDay() {
    var day = new Date(yy, --mm, dd);
    var d = day.getDay();

    var akan = "";
    if (gender === 'Female') {
        akan = femaleNames[d];
    } else {
        akan = maleNames[d];
    }
    alert("Your Akan name is: " + akan);
}