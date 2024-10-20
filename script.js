// Length Converter
function convertLength() {
    const value = parseFloat(document.getElementById('lengthValue').value);
    const unit = document.getElementById('lengthUnit').value;
    let result = "";

    if (isNaN(value)) {
        result = "Please enter a valid number!";
    } else {
        switch(unit) {
            case 'meters':
                result = `${value} meters = ${(value / 1000).toFixed(4)} kilometers = ${(value * 1.09361).toFixed(4)} yards = ${(value * 3.28084).toFixed(4)} feet = ${(value * 0.000621371).toFixed(4)} miles`;
                break;
            case 'kilometers':
                result = `${value} kilometers = ${(value * 1000).toFixed(4)} meters = ${(value * 1093.61).toFixed(4)} yards = ${(value * 3280.84).toFixed(4)} feet = ${(value * 0.621371).toFixed(4)} miles`;
                break;
            case 'miles':
                result = `${value} miles = ${(value * 1609.34).toFixed(4)} meters = ${(value * 1.60934).toFixed(4)} kilometers = ${(value * 1760).toFixed(4)} yards = ${(value * 5280).toFixed(4)} feet`;
                break;
            case 'yards':
                result = `${value} yards = ${(value * 0.9144).toFixed(4)} meters = ${(value * 0.0009144).toFixed(4)} kilometers = ${(value * 3).toFixed(4)} feet = ${(value * 0.000568182).toFixed(4)} miles`;
                break;
            case 'feet':
                result = `${value} feet = ${(value * 0.3048).toFixed(4)} meters = ${(value * 0.0003048).toFixed(4)} kilometers = ${(value / 3).toFixed(4)} yards = ${(value * 0.000189394).toFixed(4)} miles`;
                break;
        }
    }
    document.getElementById('lengthResult').innerText = result;
}

// Weight Converter
function convertWeight() {
    const value = parseFloat(document.getElementById('weightValue').value);
    const unit = document.getElementById('weightUnit').value;
    let result = "";

    if (isNaN(value)) {
        result = "Please enter a valid number!";
    } else {
        switch(unit) {
            case 'grams':
                result = `${value} grams = ${(value / 1000).toFixed(4)} kilograms = ${(value * 0.00220462).toFixed(4)} pounds = ${(value * 0.035274).toFixed(4)} ounces`;
                break;
            case 'kilograms':
                result = `${value} kilograms = ${(value * 1000).toFixed(4)} grams = ${(value * 2.20462).toFixed(4)} pounds = ${(value * 35.274).toFixed(4)} ounces`;
                break;
            case 'pounds':
                result = `${value} pounds = ${(value * 453.592).toFixed(4)} grams = ${(value * 0.453592).toFixed(4)} kilograms = ${(value * 16).toFixed(4)} ounces`;
                break;
            case 'ounces':
                result = `${value} ounces = ${(value * 28.3495).toFixed(4)} grams = ${(value * 0.0283495).toFixed(4)} kilograms = ${(value / 16).toFixed(4)} pounds`;
                break;
        }
    }
    document.getElementById('weightResult').innerText = result;
}

// Temperature Converter
function convertTemperature() {
    const value = parseFloat(document.getElementById('temperatureValue').value);
    const unit = document.getElementById('temperatureUnit').value;
    let result = "";

    if (isNaN(value)) {
        result = "Please enter a valid number!";
    } else {
        switch(unit) {
            case 'celsius':
                result = `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F = ${(value + 273.15).toFixed(2)}K`;
                break;
            case 'fahrenheit':
                result = `${value}°F = ${((value - 32) * 5/9).toFixed(2)}°C = ${(((value - 32) * 5/9) + 273.15).toFixed(2)}K`;
                break;
            case 'kelvin':
                result = `${value}K = ${(value - 273.15).toFixed(2)}°C = ${((value - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                break;
        }
    }
    document.getElementById('temperatureResult').innerText = result;
}

// Volume Converter
function convertVolume() {
    const value = parseFloat(document.getElementById('volumeValue').value);
    const unit = document.getElementById('volumeUnit').value;
    let result = "";

    if (isNaN(value)) {
        result = "Please enter a valid number!";
    } else {
        switch(unit) {
            case 'liters':
                result = `${value} liters = ${(value * 1000).toFixed(2)} milliliters = ${(value * 0.264172).toFixed(4)} gallons = ${(value * 4.22675).toFixed(4)} cups`;
                break;
            case 'milliliters':
                result = `${value} milliliters = ${(value / 1000).toFixed(4)} liters = ${(value * 0.000264172).toFixed(4)} gallons = ${(value * 0.00422675).toFixed(4)} cups`;
                break;
            case 'gallons':
                result = `${value} gallons = ${(value * 3.78541).toFixed(4)} liters = ${(value * 3785.41).toFixed(4)} milliliters = ${(value * 16).toFixed(4)} cups`;
                break;
            case 'cups':
                result = `${value} cups = ${(value * 0.236588).toFixed(4)} liters = ${(value * 236.588).toFixed(4)} milliliters = ${(value * 0.0625).toFixed(4)} gallons`;
                break;
        }
    }
    document.getElementById('volumeResult').innerText = result;
}

// Currency Converter (Fixed exchange rates for simplicity)
function convertCurrency() {
    const value = parseFloat(document.getElementById('currencyValue').value);
    const fromCurrency = document.getElementById('currencyFrom').value;
    const toCurrency = document.getElementById('currencyTo').value;
    let result = "";
    let exchangeRate = 1;

    // Dummy fixed exchange rates for simplicity (you can use a currency API for real rates)
    const rates = {
        "usd": 1,          // US Dollar
        "eur": 0.85,       // Euro
        "gbp": 0.75,       // British Pound
        "inr": 73.5,       // Indian Rupee
        "jpy": 110         // Japanese Yen
    };

    if (isNaN(value)) {
        result = "Please enter a valid number!";
    } else {
        if (fromCurrency !== toCurrency) {
            exchangeRate = rates[toCurrency] / rates[fromCurrency];
        }
        result = `${value} ${fromCurrency.toUpperCase()} = ${(value * exchangeRate).toFixed(2)} ${toCurrency.toUpperCase()}`;
    }
    document.getElementById('currencyResult').innerText = result;
}
