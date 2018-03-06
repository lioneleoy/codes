var leo_age = 26;
var har_age = 29;
var kan_age = 28;

var loe_ht = 161;
var har_ht = 168;
var kan_ht = 170;

var leo_scr, har_scr, kan_scr;

leo_scr = loe_ht + 5 * leo_age;
har_scr = har_ht + 5 * har_age;
kan_scr = kan_ht + 5 * kan_age;


console.log(leo_scr);
console.log(har_scr);
console.log(kan_scr);

var decision = prompt("yes or no");

if (decision === 'yes'){
    if (leo_scr > har_scr && leo_scr > kan_scr) {
        console.log("Leo");
    }else if (har_scr > leo_scr && har_scr > kan_scr) {
        console.log("Har");
    }else if (leo_scr === har_scr && kan_scr === har_scr && leo_scr == kan_scr) {
        console.log("equal");
    }else {
        console.log("kan");
    }
}

