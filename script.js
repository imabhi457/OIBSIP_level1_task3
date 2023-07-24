function convertCelsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheitResult = document.getElementById("fahrenheitResult");
  
    var fahrenheit = (celsiusInput * 9/5) + 32;
    fahrenheitResult.textContent = "Result: " + fahrenheit.toFixed(2) + " °F";
  }
  
  function convertFahrenheitToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;
    var celsiusResult = document.getElementById("celsiusResult");
  
    var celsius = (fahrenheitInput - 32) * 5/9;
    celsiusResult.textContent = "Result: " + celsius.toFixed(2) + " °C";
  }
  
 