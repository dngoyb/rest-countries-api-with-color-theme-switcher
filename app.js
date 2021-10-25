const container = document.querySelector('.container');
const input = document.querySelector('.search__input');

let posts = [];
let now = [];
const maxDisplayLimit = 16;
const frag = document.createDocumentFragment();
let arr = [];

const loadPosts = () => {};

const getData = () => {
	axios
		.get('https://restcountries.com/v3.1/all')

		.then((res) => {
			res.data.forEach(
				(
					{ name: { common }, population, region, capital, flags: { png } },
					index
				) => {
					if (index < maxDisplayLimit) {
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
						container.append(div);
					}
				}
			);
		});
};

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

getData();
