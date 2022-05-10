const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries)
    const countryiesHtml = countries.map(country => getcountryHtml(country));
    // console.log(countryiesHtml[0])
    const countriesDiv = document.getElementById('countries');
    countriesDiv.innerHTML = countryiesHtml.join('');
}
const getcountryHtml = ({ name, flags, area, region }) => {
    return `
    <div class='country'>
    <h2>${name.common}</h2>
    <h4> Area: ${area}</h4>
    <p>Region: ${region}</p>
    <img src="${flags.png}">
    </div>
    `
}

/* // Option Number 1 
const getcountryHtml = country => {
    //   destructaring
    const { name, flags } = country;
    return `
    <div class='country'>
    <h2>${name.common}</h2>
    <img src="${flags.png}">
    </div>
    `
} */
/* orginal 
const getcountryHtml = country => {
    return `
    <div class='country'>
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}">
    </div>
    
    `
} */

loadCountries();

