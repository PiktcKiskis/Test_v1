getCountries = () => {
    let searchTerm = document.getElementById(`searchTerm`).value
    fetch(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
    .then(res => res.json())
    .then(formattedResult => {
        console.log(formattedResult);
    })
    .catch(err => alert(`Erroor: ${err}`))
}