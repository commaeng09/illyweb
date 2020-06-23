


// function getUpcomingSunday() {
//     var date = new Date();
//     var today = date.getDate();
//     var dayOfTheWeek = date.getDay();
//     var newDate = date.setDate(today - dayOfTheWeek + 6);
//     return new Date(newDate);
// }

function getUpcomingSunday() {
    var date = new Date();
    var today = date.getDate();
    var dayOfTheWeek = Math.abs(date.getDay() - 6);
    var dayValnewData = date.setDate(today + dayOfTheWeek);
    return new Date(dayValnewData);
}



if (Date.prototype.yyyymmdd === undefined) {
    Date.prototype.yyyymmdd = function () {
        var mm = this.getMonth() + 1; // getMonth() is zero-based
        var dd = this.getDate();
        return [this.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('');
    };
}

function loopDateFromToday(yyyy, mm, dd, callback) {
    var arr = [];
    var cnt = 1;
    var curr = new Date(yyyy, mm - 1, dd);
    var end = new Date();
    var betweenDay = (end.getTime() - curr.getTime()) / 1000 / 60 / 60 / 24;
    while (betweenDay > -6) {
        betweenDay--;
        if (curr.getDay() == 6) arr.push({
            date: curr.yyyymmdd(),
            count: cnt++
        });
        curr.setDate(curr.getDate() + 1);
    }
    callback(arr);
}

loopDateFromToday(2002, 12, 7, function (array) {
    var nl = array.length;
    document.getElementById("labs").innerHTML = nl;
});

var currentDay = new Date();  
var theYear = currentDay.getFullYear();
var theMonth = currentDay.getMonth();
var theDate  = currentDay.getDate();
var theDayOfWeek = currentDay.getDay();
 
var thisWeek = [];
 
for(var i=0; i<7; i++) {
  var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
  var yyyy = resultDay.getFullYear();
  var mm = Number(resultDay.getMonth()) + 1;
  var dd = resultDay.getDate();
 
  mm = String(mm).length === 1 ? '0' + mm : mm;
  dd = String(dd).length === 1 ? '0' + dd : dd;
 
  thisWeek[i] = yyyy + '년' + mm + '월' + dd + '일';
}
 
document.getElementById('yearby').innerHTML=thisWeek[6];