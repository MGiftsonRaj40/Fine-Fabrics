const scriptURL = 'https://script.google.com/macros/s/AKfycbw_HdzKJgwUwM7RByRftkRQodkq3Ok7_mtifdypupjwhXzsd581tgvfIx9QJsw2n_Af/exec'
const form = document.forms['sales-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.user_input))
})