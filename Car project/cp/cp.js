document.getElementById("createProductForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").files[0]; // Get the uploaded file

    // Log data to the console (you would send this to your backend in a real application)
    console.log("Car Title:", title);
    console.log("Description:", description);
    console.log("Image File:", image);

    alert("Product created successfully!"); // Success message for user

    // Reset the form
    document.getElementById("createProductForm").reset();
});
