function deleteProduct() {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
        alert("Product deleted successfully.");
        // Redirect to the product list page or perform further actions as required
        window.location.href = "product-list.html";
    }
}
