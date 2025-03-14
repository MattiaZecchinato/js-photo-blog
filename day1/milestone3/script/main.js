// get element card-container
const cardContainerElement = document.querySelector('.card-container');

console.log(cardContainerElement);

// name of the server we wanna reach
const uri = 'https://lanciweb.github.io/demo/api/pictures/';

// send a request to api
axios.get(uri).then(response => {

    // get the data formatted in JSON
    const imgDetails = response.data;
    console.log(imgDetails);

    // cycle to scroll through the array
    imgDetails.forEach(element => {
        
        console.log(element);
        // add into card-container the card with the data of current picture
        cardContainerElement.innerHTML += `
            <!-- card -->
            <div class="card">
                <!-- card image -->
                <div class="container-image">
                    <img src="${element.url}" alt="${element.title}">
                </div>
                <!-- card description -->
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <!-- card pin image -->
                <img src="/img/pin.svg" alt="pin" class="pin-card">
            </div>`;
    });

}).catch(error => {

    console.error(error);
})


// sample card
/*<!-- card -->
<div class="card">
    <!-- card image -->
    <div class="container-image">
        <img src="/img/prova1.jpg" alt="prova1">
    </div>
    <!-- card description -->
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <!-- card pin image -->
    <img src="/img/pin.svg" alt="pin" class="pin-card">
</div>*/