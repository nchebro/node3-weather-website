const form=document.querySelector("form");
const search=document.querySelector("input");

console.log('in client side java application');
form.addEventListener('submit', (e) => {
    console.log('Fomr submission');
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
           console.log(data);
           messageOne.textContent = "temperature"+data.temperature
        })
        })
    })
