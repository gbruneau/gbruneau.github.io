function makeArray()
{
for (i = 0; i<makeArray.arguments.length; i++)
    this[i] = makeArray.arguments[i];
}

function getFullYear(d) {
    var y = d.getYear();
    if (y < 1000) {y += 1900};
    if (y < 2000) {y += 100};
    return y;
}

function DateFrancaise(t)
{
var days = new makeArray("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
var months = new makeArray("Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre");
var Day = t.getDay();
var Date = t.getDate();
var Month = t.getMonth();
var Year = getFullYear(t);
timeString = " ";
timeString += days[Day];
timeString += " ";
timeString += Date;
timeString += " ";
timeString += months[Month];
timeString += " ";
timeString += Year;
return timeString;
}

function DateMAJ()
{
var moddate = new Date();
moddate.setTime(Date.parse(document.lastModified));
return DateFrancaise(moddate);
//return DateFrancaise(now);
}



