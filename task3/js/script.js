function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('temperatureInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let convertedTemp;

    // Validate if the input is a number
    
    if (isNaN(inputTemp)) {
        document.getElementById('temperatureOutput').innerText = "Please enter a valid number.";
        return;
    }


    // Check if both units are the same
    
    if (fromUnit === toUnit) {
        convertedTemp = inputTemp;
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        convertedTemp = (inputTemp * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        convertedTemp = inputTemp + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        convertedTemp = (inputTemp - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        convertedTemp = (inputTemp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        convertedTemp = inputTemp - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        convertedTemp = (inputTemp - 273.15) * 9/5 + 32;
    }

    document.getElementById('temperatureOutput').innerText = `${convertedTemp.toFixed(2)} ${toUnit}`;
}
