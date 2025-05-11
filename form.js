document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll(".btn"); // обе кнопки "Заказать столик"
    const modal = document.getElementById("booking-modal");
    const btnClose = document.querySelector(".booking-close");
    const form = document.getElementById("booking-form");

    // Открытие формы при клике на любую кнопку "Заказать столик"
    btns.forEach(btn => {
        btn.addEventListener("click", function () {
            modal.style.display = "block";
        });
    });

    // Закрытие по крестику
    if (btnClose) {
        btnClose.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Закрытие по клику вне окна
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Обработка отправки формы
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Спасибо за бронирование! Мы свяжемся с вами.");
            form.reset(); // очистка формы
            modal.style.display = "none"; // закрытие модального окна
        });
    }
});