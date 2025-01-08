function convert() {
    // Get the select element
    var selectElement = document.querySelector('select[name="options"]');

    // Get the value of the selected option
    var selectedValue = selectElement.value;

    // Get the user input
    var userInput = document.getElementById('userInput').value;

    var result;
    if (selectedValue === 'milesKilometer') {
        // Convert miles to kilometers
        result = userInput * 1.60934;

    } else if (selectedValue === 'KilometerMiles') {
        // Convert kilometers to miles
        result = userInput / 1.60934;
    }

    // Convert result to number and round to 2 decimal places
    result = Math.round(parseFloat(result) * 100) / 100;  // lo trasformo in float  

    // Display the result
    document.getElementById('converted').innerHTML = result;
}