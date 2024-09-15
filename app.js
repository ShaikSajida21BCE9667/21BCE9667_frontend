
document.querySelectorAll('.headerdown h2').forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all h2 elements
        document.querySelectorAll('.headerdown h2').forEach(el => el.classList.remove('active'));
        // Add 'active' class to the clicked h2 element
        item.classList.add('active');
    });
});
