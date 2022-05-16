const API_KEY = '563492ad6f917000010000016e0a30354aa7440ca7d6d3432d6edee2';
const SEARCH_TERM = 'Japan';
const PER_PAGE = 80;
const SEARCH_URL = `https://api.pexels.com/v1/search/?query=${SEARCH_TERM}&orientation=${getOrientation()}&per_page=${PER_PAGE}`;

//Sets the windows background image
function setBackground(image) {
    console.log(image);
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${image.src.large2x})`; //Use large2x to increase load size
    creditImage(image.photographer, image.photographer_url);
}

function creditImage(artist, url) {
    const element = document.querySelector('#photo-credit');
    element.href = url;
    element.textContent = `@${artist} on Pexels`;
}

//Loads a random image from Pexels
//Uses a random page number and random photo from that page
async function loadBackground() {
    try {
        const allData = await getImageData(SEARCH_URL); //Get the results of the search
        const pageNumber = randomNumber(Math.floor(allData.total_results / PER_PAGE)); //Get a random page number from the results
        const specificPage = await getImageData(`https://api.pexels.com/v1/search/?orientation=landscape&page=${pageNumber}&per_page=80&query=Japan`); //Get the specific page using the random number
        const photoIndex = randomNumber(specificPage.photos.length); //Get a random number based on the number of photos in that page
        setBackground(specificPage.photos[photoIndex]); //Call the function to set the background based on the random page and index
    } catch {
        console.log('Could not retrieve the background image');
    }
}

//Returns data associated with a page from pexels
async function getImageData(url) {
    try {
        const response = await fetch(url,{
            mode: 'cors', 
            headers: {'Authorization': API_KEY}
        });
        const data = await response.json();
        return data;
    } catch {
        console.log('Could not retrieve images');
    }
}

//Returns the orientation that should be used when loading the background
//It assumes that a screen with a width of 450 or less is a mobile device
//Portrait photos would most likely look better on a mobile device
function getOrientation() {
    if(window.innerWidth <= 450) {
        return 'portrait'
    } else {
        return 'landscape';
    }
}

//Gets a random number that is used to select a random image from the data that gets retrieved
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

export { loadBackground };