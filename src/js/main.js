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