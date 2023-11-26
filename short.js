// Temukan elemen tombol sort
const sortByName = document.getElementById('sortByName');

// Item-item yang akan diurutkan
const itemsContainer = document.querySelector('.kanan section');

// Fungsi untuk mengurutkan item berdasarkan nama
function sortItemsByName() {
    const items = Array.from(itemsContainer.querySelectorAll('.isi'));

    items.sort((a, b) => {
        const nameA = a.querySelector('p').textContent.toLowerCase();
        const nameB = b.querySelector('p').textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    itemsContainer.innerHTML = '';

    items.forEach(item => {
        itemsContainer.appendChild(item);
    });
}

// Tambahkan event listener untuk tombol sorting
sortByName.addEventListener('click', sortItemsByName);