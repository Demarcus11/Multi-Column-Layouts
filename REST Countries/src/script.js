const countriesListDOM = document.querySelector("[data-countries-list]");

const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createCountryCards = async () => {
  try {
    const countries = await fetchCountries();
    countries.map((country) => {
      const countryCard = document.createElement("div");
      countryCard.classList.add("countries-card");
      countryCard.innerHTML = [
        `<div class="countries-card-img">`,
        `<img src="${country.flags.png}" alt="${country.flags.alt}">`,
        `</div>`,
        `<div class="countries-card-content">`,
        `<h2 class="countries-card-title">`,
        `<a class="stretched-link" href="#">${country.name.common}</a>`,
        `</h2>`,
        `<ul class="country-list">`,
        `<li class="country-list-item">`,
        `<p class="country-label">Population:</p>`,
        `<p class="country-value">${country.population}</p>`,
        `</li>`,
        `<li class="country-list-item">`,
        `<p class="country-label">Region:</p>`,
        `<p class="country-value">${country.region}</p>`,
        `</li>`,
        `<li class="country-list-item">`,
        `<p class="country-label">Capital:</p>`,
        `<p class="country-value">${country.capital}</p>`,
        `</li>`,
        `</ul>`,
        `</div>`,
      ].join("");
      countriesListDOM.append(countryCard);
      return country;
    });
  } catch (error) {
    console.log(error);
  }
};

createCountryCards();
