// Define a function to fetch the footer content
function loadFooter() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the URL of the footer content
    var url = '../footer.html';

    // Make a GET request to fetch the footer content
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        // Check if the request is complete
        if (xhr.readyState === 4 && xhr.status === 200) {
            // If successful, insert the footer content into the placeholder div
            document.getElementById('footer').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Call the loadFooter function when the page is loaded
window.onload = loadFooter;
