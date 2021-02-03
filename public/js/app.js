const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msgOne = document.querySelector("#msg-1");
const msgTwo = document.querySelector("#msg-2");

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const location = search.value

    msgOne.textContent = "Please wait...";
    msgTwo.textContent = "";

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(msgOne.textContent = data.error)
            } else {
                console.log(msgOne.textContent = data.location)
            }
        })
    })

});