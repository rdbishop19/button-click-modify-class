// check status of enabled/disabled powers and disable buttons accordingly
const buttonHandlerFunction = () => {
    let powerStatus = document.getElementsByClassName("power")
    let disabledCount = 0
    let enabledCount = 0
    for (let i = 0; i < powerStatus.length; i++){
        powerStatus[i].classList.forEach(function(className){
            if (className === "disabled"){
                disabledCount++
            }
            if (className === "enabled"){
                enabledCount++
            }
        })
        if (enabledCount === powerStatus.length){
            document.getElementById("activate-all").disabled = true;
        }
        else {
            document.getElementById("activate-all").disabled = false;            
        }
        if (disabledCount === powerStatus.length) {
            document.getElementById("deactivate-all").disabled = true;
        }
        else {
            document.getElementById("deactivate-all").disabled = false;
        }
    }
}

// toggle individual power on/off
const powerHandlerFunction = () => {
    let sectionClassNames = event.target.id.split('-');
    let powerClassNames = document.querySelector(`#${sectionClassNames[1]}`).classList;
    powerClassNames.toggle('disabled');
	powerClassNames.toggle('enabled');
};

// add event listeners for individual power buttons
document.querySelector('#activate-flight').addEventListener('click', powerHandlerFunction);
document.querySelector('#activate-mindreading').addEventListener('click', powerHandlerFunction);
document.querySelector('#activate-xray').addEventListener('click', powerHandlerFunction);

// refactor deactivateAllPowers() and activateAllPowers() into one function
const toggleAllPowers = () => {
    console.log(event.target.id.split('-')[0]);
    let buttonClicked = event.target.id.split('-')[0];
    let powerList = document.querySelectorAll(".power");
    for (let i = 0; i < powerList.length; i++){
        if (buttonClicked === "activate") {
            powerList[i].classList.remove('disabled');
            powerList[i].classList.add('enabled');
        }
        else if (buttonClicked === "deactivate"){
            powerList[i].classList.add('disabled');
            powerList[i].classList.remove('enabled');
        }
    }
}

// listen for 'activate/deactive all' button clicks
document.querySelector('#deactivate-all').addEventListener('click', toggleAllPowers);
document.querySelector('#activate-all').addEventListener('click', toggleAllPowers);

// check load state of powers enabled/disabled
window.onload = buttonHandlerFunction;
// check power state after each button click
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener('click', buttonHandlerFunction)
};