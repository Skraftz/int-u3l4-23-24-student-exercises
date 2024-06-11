// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let aga = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
    myName.innerHTML = "David Kent";
    myHobby.innerHTML = "Programming";
    myLocation.innerHTML = "The Milky Way Galaxy";




});

image1Button.addEventListener("click", function(){
    aga.src = "0001-0055.gif";
});
// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.


image2Button.addEventListener("click", function(){aga.src = "20240606_080427.jpg"})


// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.
