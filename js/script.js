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

// months are zero indexed so May is 4, not 5
function getDay(y, m, d) {
    var days = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    var d = new Date(y, --m, d);
    return d && days[d.getDay()];
}
alert("You were born on a:  " + getDay(Year, mm, DD));