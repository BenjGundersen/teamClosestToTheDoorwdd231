const baseUrl = "https://www.amiiboapi.com/api/amiibo/";

async function getAmiiboDataByName(){
    const amiiboData = await getJson("?name="); // TODO: can probably find a way to get input from the search bar instead of it searching for "chrom" everytime
    return amiiboData;
}

async function getRandomAmiibos(url, numberOfItems) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const amiibos = data.amiibo;

        const shuffledArray = amiibos.sort(() => 0.5 - Math.random());

        const selectedItems = shuffledArray.slice(0, numberOfItems);
        return selectedItems;
    } catch (error) {
        console.error("Error fetching ammibo:", error);
    }
}

function updateCarouselImages(images) {
    const carouselItems = document.querySelectorAll(".carousel-item img");
    images.forEach((image, index) => {
        if (carouselItems[index]) {
            carouselItems[index].src = image;
        }
    });
}

async function getJson(url) {
    const options = {
        method: "GET"
    };
    let data = {};
    const response = await fetch(baseUrl + url, options);
    if (response.ok) {
        data = await response.json();
    } else throw new Error("response not ok");
    return data;
}

getRandomAmiibos(baseUrl, 3).then(randomItems => {
    const imageUrls = randomItems.map(item => item.image);
    updateCarouselImages(imageUrls);
});

//Search Bar coding
const searchBar = document.getElementById('search-bar');
const resultsContainer = document.getElementById('results');

searchBar.addEventListener('input', (event) => {
  const searchTerm = event.target.value;
  if (searchTerm.length > 0) {
    fetchData(searchTerm);
  } else {
    resultsContainer.innerHTML = ''; 
  }
});

function fetchData(searchTerm) {
    fetch(`https://www.amiiboapi.com/api/amiibo/search?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.error('Error fetching data:', error));
  }

function displayResults(data) {
    resultsContainer.innerHTML = ''; // Clear previous results
  
    if (data.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }
  
    data.forEach(item => {
      const resultElement = document.createElement('div');
      resultElement.textContent = item.name; // Display relevant data from the API response
      resultsContainer.appendChild(resultElement);
    });
  }