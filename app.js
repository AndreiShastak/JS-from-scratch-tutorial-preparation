
const name ='Shastak';
let age=26;
const isProgrammer=true;
const lastName=prompt('wwedite familiju')
let year=prompt('wwedite god rozdenija')
//console.log('familija: '+lastName+' a wozrast:'+ age)
function calculateAge(year){
    return 2021-year
}
function logInfoAbout(lastName,year) {
    const age= calculateAge(year)
    console.log('czelowek po imeni '+lastName+' imeet wozrast '+ age)
}
logInfoAbout(lastName,year);