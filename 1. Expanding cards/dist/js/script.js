// Select all elements with the class 'panel'
const panels = document.querySelectorAll('.panel');

// Iterate over each panel and add a click event listener
panels.forEach((panel) => {
    // When a panel is clicked:
    panel.addEventListener('click', () => {

        // Remove the 'active' class from all panels
        removeActiveClasses();

        // Add the 'active' class to the clicked panel
        panel.classList.add('active');
    });
});

// Define a function to remove the 'active' class from all panels
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}