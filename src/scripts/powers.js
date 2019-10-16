document.querySelector('#activate-flight').addEventListener('click', () => {
	flightHandlerFunction();
});

// Remove 'disabled' class on <section id="flight"> and replace it with a class of 'enabled'.
const flightHandlerFunction = () => {
	let clickedEl = event.currentTarget.value;
	console.log('Clicked activate flight button');
    let flightClasses = document.querySelector('#flight');
    flightClasses.classList.toggle('disabled');
	flightClasses.classList.toggle('enabled');
	console.log(flightClasses);
};
/* 
Write two more JavaScript functions, and two more querySelector().addEventListener() statements 
for handling the click event on the other two buttons. 
Those event handlers should perform the same step of removing disabled, 
and adding enabled on the corresponding <section> elements

document.querySelector("#activate-mindreading").addEventListener()
document.querySelector("#activate-xray").addEventListener()
 */

 