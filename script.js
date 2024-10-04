//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    // Retrieve user inputs
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    // Async function to handle the delay
    const displayAfterDelay = async (message, delayTime) => {
        // Return a promise that resolves after the specified delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(message);
            }, delayTime);
        });
    };

    // Call the async function and wait for the result
    if (text && !isNaN(delay)) {
        const result = await displayAfterDelay(text, delay);

        // Display the result in the output div
        document.getElementById('output').textContent = result;
    } else {
        document.getElementById('output').textContent = "Please enter valid text and delay.";
    }
});
