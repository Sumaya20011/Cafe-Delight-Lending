
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modalImg.src = galleryItems[currentIndex].src;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        modalImg.src = galleryItems[currentIndex].src;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        modalImg.src = galleryItems[currentIndex].src;
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(index);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    } else {
        console.error('Элемент .close не найден!');
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
});


