// you can create a date object to get the exact date and time in mili seconds . ( started in jan 1970)

const myDate= new Date();
console.log(myDate)

// This date is not preety much readable so we can change it to strings'

console.log(myDate.toString());             // gives day--date--time--timeZone
console.log(myDate.toDateString());         // gives only date         
console.log(myDate.toLocaleDateString())    // gives date in mm/dd/yy
console.log(myDate.toLocaleTimeString())    // gives time only (default time zone is UTC(univercal coordinated
                                            // time London GreenWhich UK)
                                            // you can add argument of timezone in this func.
console.log(myDate.toJSON())                // IDK what is this?
console.log(myDate.toISOString())           // same as toJSON
console.log(myDate.toLocaleString())        // date(mm/dd/yy) and time of local area
console.log(myDate.toUTCString())           // Day , date , time of UTC
console.log(myDate.toTimeString())          // time and timezone

// YOU can Create your own date aswell.

const newDate = new Date(2003,11,28)         // yy,mm,dd -----------> month starts from 0 ---> 11
console.log(newDate)
const newDate2 = new Date("2002-05-14")      // here month starts with 1 and format is yy-mm-dd
console.log(newDate2)
const newDate3 = new Date("09-11-2000")      // mm-dd-yy
console.log(newDate3.toLocaleDateString())   // give our created date in local date format


// You can create timeStamp 
console.log(Date.now());                        // gives current time in mili sec
console.log(Math.floor(Date.now()/1000))        // date in seconds
console.log(newDate3.getTime())                 //  you can get time in miliSec of your own created date
console.log(newDate3.getDay())                  // you can eextract any perticular info from your created date,
                                                // like day, year , time , month etc

//you can coustomis your date by using toLocalString func.

console.log(newDate2.toLocaleString('default'{
    weekday: "long",
    era: "long",
    dayPeriod :"long"
}))

// default ----> internationalisation
// { }---------> coustomisation of your date;