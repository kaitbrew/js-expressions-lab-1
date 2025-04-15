    // Temperature Data
    const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
    const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

    // Data Conversions
    const celsiusTempsToFahrenheit = celsiusTemps.map(temp => ((temp * 9 / 5) + 32));

    // Data in one format, full list
    const allTempsInFahrenheit = fahrenheitTemps.concat(celsiusTempsToFahrenheit)

    // Calculate the total temperatures
    const temperature_in_fahrenheit = allTempsInFahrenheit.reduce((sum, temp) => sum + temp, 0);
    const temperature_in_celsius = (temperature_in_fahrenheit -32) * 5 / 9;
    
    // Calculate mean of temperatures
    const meanCelsius = temperature_in_celsius / allTempsInFahrenheit.length;
    const meanFahrenheit = temperature_in_fahrenheit / allTempsInFahrenheit.length;
console.log(meanCelsius)