





// function cToF(celsius) { var cTemp = celsius; var cToFahr = cTemp * 9 / 5 + 32; var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F'
//farenheit to celsius
function farenheitToCelcius(farenheit) {
    let celsius=(farenheit-32)*5/9+'\xB0C';//'\xB0F'=°F and '\xB0C'=°C keyword
    return celsius;    
}
const celsius=farenheitToCelcius(59);
console.log(celsius,'celsius from 59'+'\xB0F','farenheit');