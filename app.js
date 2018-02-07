const fs = require("fs");
const rs = require("readline-sync");
const pi = fs.readFileSync(__dirname + "/pi.txt").toString();
const yourBirthDay = rs.question("Kiedy masz urodziny ?  ");
if (pi.includes(yourBirthDay) == true) {
    console.log("Twoja data zwiera się w liczbie PI HURA !!!");
}
else {
    console.log("Trzeba dodać więcej liczby XD ");
}
