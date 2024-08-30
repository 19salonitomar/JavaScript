function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function button() {
    console.log("Button Clicked, ++count");     
    });
}
attachEventListeners();

/* Removw EventListeners:*/
const clickButton = document.getElementById('clickMe');
    const removeButton = document.getElementById('removeListener');
    // Define the callback function
    function handleClick() {
        alert('Button was clicked!');
    }
    // Attach the event listener
    clickButton.addEventListener('click', handleClick);

    // Remove the event listener when the second button is clicked
    removeButton.addEventListener('click', function() {
        clickButton.removeEventListener('click', handleClick);
        alert('Click listener removed');
    });
        

        

        
    