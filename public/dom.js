const SubmitI = document.querySelector(".SubmitI");
const emailInput = document.querySelector(".emailInput");


SubmitI.addEventListener('click', () => {
    fetch(`/submit:${emailInput.value}`, {
    }).then(result => result.json())
        .then(result => showResult(result));
});

const showResult = (data) => {
    if (data.valid === false || data.desposable === true){
        console.log(data);
        const massageElement = document.createElement("p");
        const massageText = document.createTextNode(`Email is invalid!`);
        massageElement.appendChild(massageText);
        massageElement.classList.add('massageElement')
        const originalElement = document.getElementById('originalElement');
        originalElement.setAttribute('class','newClass')
        console.log(massageElement);
        console.log(originalElement);
        const parentElement = document.getElementById('parentElement')
        parentElement.appendChild(massageElement);


    } else{
        console.log('here the user will be directed to the new page with masage ');
    }
    
    
    
    // console.log(data);
    // if (data.valid === false) {
    //     console.log("hi");
    // } else {
    //     console.log('its working');
    // }
}
