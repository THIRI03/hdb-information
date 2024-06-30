//Name: Thiri Lae Win
//Class: DIT/1B/10
//Admin No: 2340739
import { fetchData } from "./fetchData.js";

let hdbData = [];
let selectedTown;
function loadAllTown() {
    fetchData().then(data => {
        hdbData = data;
        const townSelect = document.getElementById('townSelect');
        townSelect.innerHTML = '';
        const towns = [...new Set(data.map(entry => entry.town))];
        towns.forEach(townName => {
            const option = document.createElement('option');
            option.value = townName;
            option.textContent = townName;
            townSelect.appendChild(option);
        });
    }).catch(error => {
        console.error('Error fetching or parsing data:', error);
    });
}

function handleButtonClick() {
    const townSelect = document.getElementById('townSelect');
    selectedTown = townSelect.value;
    console.log("Selected Town:", selectedTown);
    displayPricesStatistics(selectedTown);
    displayMeanAndMedianPrices(selectedTown);
    getFlatDetailByTown(selectedTown)
}

function displayPricesStatistics(selectedTown) {
    const filteredData = hdbData.filter(entry => entry.town === selectedTown);
    const priceCardDiv = document.querySelector("#priceCards");
    priceCardDiv.innerHTML = ''; // Clear previous cards

    const pricesByFlatType = {};

    // Group entries by flat type and prices
    filteredData.forEach(entry => {
        const { flat_type, resale_price } = entry;
        if (!pricesByFlatType[flat_type]) {
            pricesByFlatType[flat_type] = [];
        }
        pricesByFlatType[flat_type].push(resale_price);
    });

    // Sort flat types 
    const sortedFlatTypes = Object.keys(pricesByFlatType).sort();

    // Create price-card 
    sortedFlatTypes.forEach(flatType => {
        const prices = pricesByFlatType[flatType];
        const highestPrice = Math.max(...prices);
        const lowestPrice = Math.min(...prices);

        const priceCard = document.createElement('price-card');
        priceCard.setAttribute('town', selectedTown);
        priceCard.setAttribute('flat_type', flatType);
        priceCard.setAttribute('highestprice', highestPrice);
        priceCard.setAttribute('lowestprice', lowestPrice);

        priceCardDiv.appendChild(priceCard);
    });
}

function displayMeanAndMedianPrices(selectedTown) {
    const filteredData = hdbData.filter(entry => entry.town === selectedTown);
    const priceMeanMedianCardsDiv = document.querySelector("#priceMeanMedianCards");
    //to clear the previous cards
    priceMeanMedianCardsDiv.innerHTML = '';

    const pricesByFlatType = {};

    // Group entries by flat type and prices
    filteredData.forEach(entry => {
        const { flat_type, resale_price } = entry;
        if (!pricesByFlatType[flat_type]) {
            pricesByFlatType[flat_type] = [];
        }
        pricesByFlatType[flat_type].push(resale_price);
    });

    // sorting the flat types 
    const sortedFlatTypes = Object.keys(pricesByFlatType).sort();

    //created cards for the price-mean-median-card
    sortedFlatTypes.forEach(flatType => {
        const prices = pricesByFlatType[flatType];
        const meanPrice = calculateMean(prices).toFixed(2);
        const medianPrice = calculateMedian(prices).toFixed(2);

        const priceMeanMedianCards = document.createElement('price-mean-median-card');
        priceMeanMedianCards.setAttribute('flat_type', flatType);
        priceMeanMedianCards.setAttribute('meanprice', meanPrice);
        priceMeanMedianCards.setAttribute('medianprice', medianPrice);

        priceMeanMedianCardsDiv.appendChild(priceMeanMedianCards);
    });
}


//function to calculate the mean of the prices
function calculateMean(prices) {
    const total = prices.reduce((sum, price) => sum + price, 0);
    return total / prices.length;
}

//function to calculate the median of the prices
/**
 * function to calculate the median of the price
 * @param {*} prices 
 * @returns 
 */
function calculateMedian(prices) {
    const sortedPrices = prices.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedPrices.length / 2);

    if (sortedPrices.length % 2 === 0) {
        return (sortedPrices[middle - 1] + sortedPrices[middle]) / 2;
    } else {
        return sortedPrices[middle];
    }
}

function getFlatDetailByTown(selectedTown) {
    const filteredData = hdbData.filter(entry => entry.town === selectedTown);
    const detailsDiv = document.querySelector('#detailsCards');

    detailsDiv.innerHTML = '';

    if (filteredData.length === 0) {
        console.log("No data found for the selected town.");
        return null;
    }

    const groupedByFlatType = {};
    filteredData.forEach(entry => {
        const flatType = entry.flat_type;
        if (!groupedByFlatType[flatType]) {
            groupedByFlatType[flatType] = [];
        }
        groupedByFlatType[flatType].push(entry);
    });

    // Sort flat types 
    const sortedFlatTypes = Object.keys(groupedByFlatType).sort();

    sortedFlatTypes.forEach(flatType => {
        const flatTypeData = groupedByFlatType[flatType];
        let smallestFloorArea = Infinity;
        let largestFloorArea = -Infinity;

        flatTypeData.forEach(entry => {
            const floorArea = parseInt(entry.floor_area_sqm);
            smallestFloorArea = Math.min(smallestFloorArea, floorArea);
            largestFloorArea = Math.max(largestFloorArea, floorArea);
        });

        const flatDetailsCards = document.createElement('details-card');
        flatDetailsCards.setAttribute('flat_type', flatType);
        flatDetailsCards.setAttribute('smallestfloorarea', smallestFloorArea);
        flatDetailsCards.setAttribute('largestfloorarea', largestFloorArea);

        detailsDiv.appendChild(flatDetailsCards); 
    });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    loadAllTown();
    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', handleButtonClick);

});



