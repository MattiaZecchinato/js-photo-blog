/******* 
overlay 
*******/

// get element box-overlay
const boxOverlayElement = document.querySelector('.box-overlay');
console.log(boxOverlayElement);

// get element box-overlay-img
const boxOverlayImgElement = document.querySelector('.box-overlay-img');
console.log(boxOverlayImgElement);

// get element btn-close
const buttonCloseElement = document.getElementById('btn-close');
console.log(buttonCloseElement);

const bodyElement = document.querySelector('body');

// when click on btn-close add class hidden-element to box-overlay
buttonCloseElement.addEventListener('click', () => {
    
    boxOverlayElement.classList.add('hidden-element');
    bodyElement.classList.remove('block-scroll');
});

/******* 
load image for card 
*******/

// get element card-container
const cardContainerElement = document.querySelector('.card-container');
console.log(cardContainerElement);

// get element error-msg
const errorMessageElement = document.getElementById('error-msg');
console.log(errorMessageElement);

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
                <p>${element.date}</p>
                <h2>${element.title}</h2>
                <!-- card pin image -->
                <img src="/img/pin.svg" alt="pin" class="pin-card">
            </div>`;
    });

    // get element card
    const cardElement = document.querySelectorAll('.card');
    console.log(cardElement);

    // add for each element with class card a function on click
    cardElement.forEach(card => {

        // console.log(`card id: ${card.id}`);

        card.addEventListener('click', () => {

            // remove class hidden-element to box-overlay
            boxOverlayElement.classList.remove('hidden-element');
            bodyElement.classList.add('block-scroll');

            // get current image
            const currentCardImgElement = card.querySelector('.container-image img');
            console.log(currentCardImgElement);

            //add image inside box-overlay element
            boxOverlayImgElement.innerHTML = `<img src="${currentCardImgElement.src}" alt="${currentCardImgElement.alt}">`;
        });

        const pinCardElement = card.querySelector('.pin-card');

        // add class hidden-element when mouse over card element
        card.addEventListener('mouseover', () => pinCardElement.classList.add('hidden-element'));

        // add class hidden-element when mouse out card element
        card.addEventListener('mouseout', () => pinCardElement.classList.remove('hidden-element'));
    });

}).catch(error => {

    // get the status(number error) of the response
    const errorStatus = error.response.status;
    console.log(errorStatus);

    // remove the class hidden-element
    errorMessageElement.classList.remove('hidden-element');

    // add into error-msg the message with the error
    errorMessageElement.innerHTML = `Error ${errorStatus}`;
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