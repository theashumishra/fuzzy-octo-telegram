//const API_BASE_URL = 'http://localhost:5000/api';  // Backend API URL

// Create User
async function createUser(userData) {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {  // Endpoint to create user
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}

// Create Product
async function createProduct(productData) {
    const token = localStorage.getItem('token');  // Retrieve the JWT token from localStorage
    const response = await fetch(`${API_BASE_URL}/cars/add`, {  // Endpoint to add product (car)
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  // Attach token for authentication
        },
        body: JSON.stringify(productData),
    });
    return response.json();
}

// List Products
async function listProducts() {
    const token = localStorage.getItem('token');  // Retrieve the JWT token from localStorage
    const response = await fetch(`${API_BASE_URL}/cars/all`, {  // Endpoint to list products (cars)
        headers: {
            'Authorization': `Bearer ${token}`,  // Attach token for authentication
        },
    });
    return response.json();
}

// Get Product by ID
async function getProductById(productId) {
    const token = localStorage.getItem('token');  // Retrieve the JWT token from localStorage
    const response = await fetch(`${API_BASE_URL}/cars/${productId}`, {  // Endpoint to get a product (car) by ID
        headers: {
            'Authorization': `Bearer ${token}`,  // Attach token for authentication
        },
    });
    return response.json();
}

// Update Product
async function updateProduct(productId, updatedData) {
    const token = localStorage.getItem('token');  // Retrieve the JWT token from localStorage
    const response = await fetch(`${API_BASE_URL}/cars/${productId}`, {  // Endpoint to update product (car)
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  // Attach token for authentication
        },
        body: JSON.stringify(updatedData),
    });
    return response.json();
}

// Delete Product
async function deleteProduct(productId) {
    const token = localStorage.getItem('token');  // Retrieve the JWT token from localStorage
    const response = await fetch(`${API_BASE_URL}/cars/${productId}`, {  // Endpoint to delete a product (car)
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,  // Attach token for authentication
        },
    });
    return response.json();
}
