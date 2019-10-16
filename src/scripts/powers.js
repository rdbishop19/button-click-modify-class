// Remove 'disabled' class on <section id="flight"> and replace it with a class of 'enabled'.
const flightHandlerFunction = () => {
	console.log('Clicked activate flight button');
    let flightClasses = document.querySelector('#flight');
    flightClasses.classList.toggle('disabled');
	flightClasses.classList.toggle('enabled');
	console.log(flightClasses);
};
/* 
Write two more JavaScript functions, and two more querySelector().addEventListener() statements 
for handling the click event on the other two buttons. 
*/
const mindreadingHandlerFunction = () => {
    let mindreadingClasses = document.querySelector('#mindreading');
    console.log(mindreadingClasses);
    mindreadingClasses.classList.toggle('disabled');
    mindreadingClasses.classList.toggle('enabled');
};

const xrayHandlerFunction = () => {
    let xrayClasses = document.querySelector('#xray');
    console.log(xrayClasses);
    xrayClasses.classList.toggle('disabled');
    xrayClasses.classList.toggle('enabled');
}

document.querySelector('#activate-flight').addEventListener('click', flightHandlerFunction);
document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction);
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

/* 
Write two more event handlers for activating and deactivating all powers 
when the corresponding buttons are clicked. 

You will need to use the document.querySelectorAll() method for these.
 */

const deactivateAllPowers = () => {
    let powerList = document.querySelectorAll("#powerList > section");
    console.log(powerList);
    for (let i = 0; i < powerList.length; i++){
        powerList[i].classList.add('disabled');
        powerList[i].classList.remove('enabled');
    }
}

const activateAllPowers = () => {
    let powerList = document.querySelectorAll("#powerList > section");
    console.log(powerList);
    for (let i = 0; i < powerList.length; i++){
        powerList[i].classList.remove('disabled');
        powerList[i].classList.add('enabled');
    }
}

document.querySelector('#deactivate-all').addEventListener('click', deactivateAllPowers);
document.querySelector('#activate-all').addEventListener('click', activateAllPowers);