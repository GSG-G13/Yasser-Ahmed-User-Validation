const SubmitI = document.querySelector(".SubmitI");
const emailInput = document.querySelector(".emailInput");



SubmitI.addEventListener('click', () => {
    fetch('/submit', {
        method: 'POST',
        body: `${emailInput.value}`,
        headers: {
            "Content-Type": "text/plain"
        }
    })
});

