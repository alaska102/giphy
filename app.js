//global constants

const searchResultElement = document.querySelector('#search-results')
const API_KEY = "ZtPoy7UpmBhX3JwmL7798CxAdGyPYwqJ"
const LIMIT = 9
const RATING = 'g'
const OFFSET = pages * LIMIT
var pages = 0 



async function fetchGifs(event) {
    event.preventDefault()
    const inputElement = document.getElementById('search-input')
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputElement.value}&limit=${LIMIT}&offset=${OFFSET}&rating=${RATING}&lang=en`)
    const results = await response.json();

    getResults(results["data"])
}

function getResults(results) {
    document.getElementById("loadButton").style.display='block';
    const searchResultsElement = document.querySelector('#search-results')
    searchResultElement.innerHTML = ``

    results.forEach(result => {
        var url = result.images.original.url
        searchResultElement.innerHTML += `<img src = "${url}" type = 'gif' class='gif'>`
    });
}

// function displayResults() {
function lodeMore() {
    LIMIT += 10
    getResults()

}

window.onload = async function() {
    document.getElementById('search').addEventListener('submit', fetchGifs)
    document.getElementById('loadButton').addEventListener('click', displayResults)

}