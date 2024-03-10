export const stopScroll = (condition: boolean | string) => {
    if (condition) {
        // Attaching the scroll event listener
        window.addEventListener('scroll', function (event) {
            // If the condition is true, prevent the default scroll behavior
            if (condition) {
                event.preventDefault();
                event.stopPropagation();
                // You can also return false to prevent the default action
                return false;
            }
        }, { passive: false }); // Passive is set to false to allow for preventing default
    }
}

// Call the function with your condition
// stopScroll(condition);
