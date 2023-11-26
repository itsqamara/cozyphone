// Temukan elemen tombol search dan inputnya
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

// Tambahkan event listener untuk klik pada tombol search
searchIcon.addEventListener('click', function() {
    // Toggle display input saat tombol search diklik
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
});