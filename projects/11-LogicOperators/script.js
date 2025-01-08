


function battery() {
    const battery = document.querySelector("#battery");
    const state = document.querySelector("#battery-state");
    battery.src = "img/battery-full.svg";
    state.innerHTML = "full";
    checkBulbState(); // Call the function to check the bulb state
}

function powerButton() {
    const powerButton = document.querySelector("#power-button");
    const state = document.querySelector("#power-state");
    powerButton.src = "img/power-button-power-green.svg";
    state.innerHTML = "Yes";
    checkBulbState(); // Call the function to check the bulb state
}

function checkBulbState() {
    const batteryState = document.querySelector("#battery-state").innerHTML;
    const powerState = document.querySelector("#power-state").innerHTML;
    const bulb = document.querySelector("#bulb-img");
    const bulbState = document.querySelector("#bulb-state");

    if (batteryState === "full" && powerState === "Yes") {
        bulb.src = "img/light-bulb-on.png"; // Change the bulb image to "on" state
        bulbState.innerHTML = "on";
    } else {
        bulb.src = "img/light-bulb-off.png"; // Change the bulb image to "off" state
        bulbState.innerHTML = "off";
    }
}

