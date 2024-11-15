// Example JavaScript for smooth scrolling when clicking on the navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const productRoutes = require('./routes/productRoutes'); // Adjust path as necessary
app.use('/api', productRoutes);

