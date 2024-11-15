// // Soft delete a product (mark as deleted)
// router.delete('/products/:id', async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { deleted: true }, { new: true });
//         if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
//         res.status(200).json({ message: 'Product marked as deleted' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

// // Undo delete a product
// router.put('/products/:id/restore', async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { deleted: false }, { new: true });
//         if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
//         res.status(200).json({ message: 'Product restored successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

// Select all delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');

// Add event listener to each delete button
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the parent product card (the div that contains the car info)
        const productCard = button.closest('.product-card');
        
        // Remove the product card from the DOM
        productCard.remove();
    });
});


// Select all the edit buttons
const editButtons = document.querySelectorAll('.edit-btn');

// Get the modal and form elements
const modal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const closeModalBtn = document.getElementById('closeModalBtn');
let currentProductCard = null; // To track which product card is being edited

// Add event listener to each edit button
editButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the parent product card (the div that contains the car info)
        currentProductCard = button.closest('.product-card');
        
        // Get the current product details (title and description)
        const title = currentProductCard.querySelector('h3').textContent;
        const description = currentProductCard.querySelector('p').textContent;

        // Populate the edit form with the current values
        document.getElementById('editTitle').value = title;
        document.getElementById('editDescription').value = description;

        // Show the modal
        modal.style.display = 'flex';
    });
});

// Close the modal when the cancel button is clicked
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Handle form submission to update the product card
editForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get the updated values from the form
    const updatedTitle = document.getElementById('editTitle').value;
    const updatedDescription = document.getElementById('editDescription').value;

    // Update the product card locally (in the DOM)
    currentProductCard.querySelector('h3').textContent = updatedTitle;
    currentProductCard.querySelector('p').textContent = updatedDescription;

    // Close the modal
    modal.style.display = 'none';
});


