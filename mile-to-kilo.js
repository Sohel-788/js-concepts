//Mile from kilometer
function getKiloToMile(kilometers) {
    let miles=kilometers/1.609; //1.609==1 mile
    return miles;
}
const kilometer=100;
const totalMiles=getKiloToMile(kilometer);
const result1=totalMiles.toFixed(2);
console.log(result1,'miles at 100 kilometers')
