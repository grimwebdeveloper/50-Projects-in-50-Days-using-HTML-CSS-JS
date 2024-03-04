// Get the progress bar, previous and next buttons, and all the circles elements
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Initialize the currentActive variable to 1
let currentActive = 1;

// Add a click event listener to the next button
next.addEventListener('click', () => {
    // Increment the currentActive by 1
    currentActive++;

    // If the currentActive is greater than the number of circles
    if (currentActive > circles.length) {
        // Set the currentActive to the number of circles
        currentActive = circles.length;
    }

    // Call the update function
    update();
    console.log(currentActive);
});

// Add a click event listener to the previous button
prev.addEventListener('click', () => {
    // Decrement the currentActive by 1
    currentActive--;

    // If the currentActive is less than 1
    if (currentActive < 1) {
        // Set the currentActive to 1
        currentActive = 1;
    }

    // Call the update function
    update();
    console.log(currentActive);
});

// Define the update function
function update() {
    // Loop through each circle element
    circles.forEach((circle, idx) => {
        // If the index is less than the currentActive
        if (idx < currentActive) {
            // Add the 'active' class to the circle
            circle.classList.add('active');
        } else {
            // Remove the 'active' class from the circle
            circle.classList.remove('active');
        }
    });

    // Get all the active circle elements
    const actives = document.querySelectorAll('.active');

    // Update the progress bar's width based on the number of active circles
    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // If the currentActive is 1
    if (currentActive === 1) {
        // Disable the previous button
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        // Disable the next button
        next.disabled = true;
    } else {
        // Enable both buttons
        prev.disabled = false;
        next.disabled = false;
    }
}
