function scheduleA(event) {
    var fromCurrency1 = document.getElementById("fromFormat").value;
    var toCurrency = document.getElementById("toFormat").value;
    var val = document.getElementById("fromCurrency").value;
    var api = 'https://api.fixer.io/latest?base=';
    var apipart2 = '&symbols=';
    var url = api + fromCurrency1 + apipart2 + toCurrency;
    console.log ("val = " + val);
    fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
                var myObj =JSON.parse(responseText);
                console.log(myObj.rates[toCurrency]);
                document.getElementById("toCurrency").value = val * myObj.rates[toCurrency];
                console.log("converted value" + val * myObj.rates[toCurrency]);
})

}