const baseUrl = "https://www.amiiboapi.com/api/amiibo/";

// Extract query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query");

// Fetch and render amiibo data based on query
async function fetchAndRenderAmiibo() {
  if (query) {
    const amiiboData = await getAmiiboDataByName(query);
    renderSearchResults(amiiboData.amiibo);
  } else {
    console.warn("No search query provided.");
  }
}

// Fetch amiibo data by name
async function getAmiiboDataByName(name) {
  const amiiboData = await getJson(`?name=${encodeURIComponent(name)}`);
  return amiiboData;
}

// Fetch JSON from the API
async function getJson(url) {
  const options = { method: "GET" };
  let data = {};
  const response = await fetch(baseUrl + url, options);
  if (response.ok) {
    data = await response.json();
  } else {
    throw new Error("Response not OK");
  }
  return data;
}

// Render search results
function renderSearchResults(amiibo) {
  const searchResultsElement = document.querySelector(".search-results-container");
  if (searchResultsElement) {
    searchResultsElement.innerHTML = ""; // Clear previous results
    if (Array.isArray(amiibo) && amiibo.length > 0) {
      let html = amiibo.map(searchResultsTemplate);
      searchResultsElement.innerHTML = html.join("");
    } else {
      searchResultsElement.innerHTML = "<p>No results found.</p>";
    }
  }
}

// Template for displaying each amiibo result
function searchResultsTemplate(amiibo) {
  return `
    <figure class="search-result">
      <a href="${amiibo.url}">
        <img src="${amiibo.image}" alt="Image of ${amiibo.character}">
      </a>
      <a href="${amiibo.url}">
        <h2>${amiibo.character} - ${amiibo.amiiboSeries}</h2>
      </a>
    </figure>
  `;
}

// Call the function to fetch and render the amiibo data on page load
fetchAndRenderAmiibo();
