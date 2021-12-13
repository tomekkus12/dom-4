submitForm = (event) => {

    event.preventDefault();

    console.log("OK");

    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');

    console.log(`Imię: ${firstName.value}, nazwisko: ${lastName.value}`);

}


let form = document.getElementById("form");

form.addEventListener("submit", submitForm);