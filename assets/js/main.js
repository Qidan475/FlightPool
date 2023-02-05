let passengersInput = document.querySelector('#infographics .input-item-2 input');
let flightProbability = document.querySelector('.graphics .flight-probability');
let flightProbabilitySpan = flightProbability.querySelector('span');
let price = document.querySelector('.graphics .price');
let priceSpan = price.querySelector('span');

passengersInput.addEventListener('change', function () {
    let multiplier = (100 / 30);
    let initialPrice = 15000;
    let chance = Math.min(100, Math.round(passengersInput.value * multiplier));
    let calculatedPrice = Math.round(initialPrice - (initialPrice * passengersInput.value / 100 * 1.35));

    flightProbabilitySpan.textContent = chance;
    priceSpan.textContent = calculatedPrice;

    flightProbability.style.backgroundSize = `${chance}% 1px`;
    price.style.backgroundSize = `${calculatedPrice / initialPrice * 100}% 1px`;
});