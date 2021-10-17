const container = document.querySelector('.container');
const input = document.querySelector('.search__input');

const getData = () => {
	axios
		.get('https://restcountries.com/v3.1/all')

		.then((res) => {
			res.data.forEach(
				({ name: { common }, population, region, capital, flags: { png } }) => {
					let div = document.createElement('div');
					div.classList.add('card');

					div.innerHTML = `

                <img src="${png}" alt="" class="card__img" />
                    <div class="card__desc">
                        <h4 class="card__name">${common}</h4>
				        <p class="card__populations">Population: <small>${numberWithCommas(
									population
								)}</small></p>
				        <p class="card__region">Region: <small>${region}</small></p>
				        <p class="card__capital">Capital: <small>${capital}</small></p>
                    </div>
                `;
					container.appendChild(div);
				}
			);
		});
};

// const searchData = () => {
//     axios.get('https://restcountries.com/v3.1/name/{name}');
// }

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

getData();
