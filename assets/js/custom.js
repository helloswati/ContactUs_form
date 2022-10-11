const scriptURL = 'https://script.google.com/macros/s/AKfycbxmOuDVowJE67I3IqUxST0w5dQGOTlX-oX1HXAohNr1zFuzY6m2ZCiEGOixU1t3gPr8/exec'
const form = document.querySelector("#form1")
const backbtn = document.querySelector("#back-btn")
form.addEventListener('submit', e => {
    e.preventDefault()
    // Loader
    var loader = document.querySelector(".loader-backdrop")
    loader.style.display = "";
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Show Success Message
            // Hide Loader
            form.style.display = "none";
            loader.style.display = "none";
            document.querySelector("#success").style.display = ""
        })
        .catch(error => {
            // Hide Loader
            loader.style.display = "none";
            alert("Something went wrong!")
        })
    form.style.display = "none"
})
backbtn.addEventListener("click", function () {
    form.reset()
    form.style.display = "";
    document.querySelector("#success").style.display = "none"
})
