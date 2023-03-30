const SubmitI = document.querySelector(".SubmitI");
const emailInput = document.querySelector(".emailInput");


SubmitI.addEventListener('click', () => {
    fetch(`/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: `${emailInput.value}` })
    })
        .then(result => result.json())
        .then(result => showResult(result));
});

const showResult = (data) => {
    console.log(data);
    if (data.valid === false) {
        console.log(data);
        const massageElement = document.createElement("p");
        const massageText = document.createTextNode(`Email is invalid! try  again`);
        massageElement.appendChild(massageText);
        massageElement.classList.add('massageElement')
        const originalElement = document.getElementById('originalElement');
        originalElement.setAttribute('class', 'newClass')
        console.log(massageElement);
        console.log(originalElement);
        const parentElement = document.getElementById('parentElement')
        parentElement.appendChild(massageElement);



    } else {
        const massageElement = document.createElement("p");
        const massageText = document.createTextNode(`Email is valid!`);
        massageElement.appendChild(massageText);
        massageElement.classList.add('successEle')
        const originalElement = document.getElementById('originalElement');
        originalElement.setAttribute('class', 'success')
        console.log(massageElement);
        console.log(originalElement);
        const parentElement = document.getElementById('parentElement')
        parentElement.appendChild(massageElement);
    }


}
