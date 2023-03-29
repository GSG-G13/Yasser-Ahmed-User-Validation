const SubmitI = document.querySelector(".SubmitI");
const emailInput = document.querySelector(".emailInput");



SubmitI.addEventListener('click', () => {
    fetch(`/submit:${emailInput.value}`, {
    }).then(result => result.json())
        .then(result => showResult(result));
});

const showResult = (data) => {
    console.log(data);
    if (data.valid === false) {
        console.log("hi");
    }
}