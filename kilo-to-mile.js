//kilometers from miles 
function getKiloFromMiles(miles){
    let totalMiles=miles*1.609; //1.609==1 miles
    return totalMiles;
}
var mile=5;
const totalKilometer=getKiloFromMiles(mile);
console.log(totalKilometer,'kilometers at 5 miles');
