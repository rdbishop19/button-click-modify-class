const buttonHandlerFunction = () => {
    let powerStatus = document.getElementsByClassName("power")
    let disabledCount = 0
    let enabledCount = 0
    for (let i = 0; i < powerStatus.length; i++){
        // console.log(powerStatus[i].classList)
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

// one function to handle activating a power depending on which button is clicked
const powerHandlerFunction = () => {
    let sectionClasses = event.target.id.split('-');
    let flightClasses = document.querySelector(`#${sectionClasses[1]}`);
    flightClasses.classList.toggle('disabled');
	flightClasses.classList.toggle('enabled');
};

document.querySelector('#activate-flight').addEventListener('click', powerHandlerFunction);
document.querySelector('#activate-mindreading').addEventListener('click', powerHandlerFunction);
document.querySelector('#activate-xray').addEventListener('click', powerHandlerFunction);

/* 
Write two more event handlers for activating and deactivating all powers 
when the corresponding buttons are clicked. 

You will need to use the document.querySelectorAll() method for these.
 */
const deactivateAllPowers = () => {
    let powerList = document.querySelectorAll("#powerList > section");
    // console.log(powerList);
    for (let i = 0; i < powerList.length; i++){
        powerList[i].classList.add('disabled');
        powerList[i].classList.remove('enabled');
    }
}

const activateAllPowers = () => {
    let powerList = document.querySelectorAll("#powerList > section");
    // console.log(powerList);
    for (let i = 0; i < powerList.length; i++){
        powerList[i].classList.remove('disabled');
        powerList[i].classList.add('enabled');
    }
}

document.querySelector('#deactivate-all').addEventListener('click', deactivateAllPowers);
document.querySelector('#activate-all').addEventListener('click', activateAllPowers);
window.onload = buttonHandlerFunction;
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener('click', buttonHandlerFunction)
};