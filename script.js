document.addEventListener("DOMContentLoaded", function () {
    const btnMinus = document.querySelector(`.btn-minus[data-id="${data.id}"]`);
    const btnPlus = document.querySelector(`.btn-plus[data-id="${data.id}"]`);
    const quantityElement = document.querySelector(`.quantity[data-id="${data.id}"]`);

    btnMinus.addEventListener("click", function () {
        updateQuantity("minus");
    });

    btnPlus.addEventListener("click", function () {
        updateQuantity("plus");
    });

    function updateQuantity(action) {
        let currentQuantity = parseInt(quantityElement.textContent) || 0;

        if (action === "plus") {
            currentQuantity++;
        } else if (action === "minus" && currentQuantity > 0) {
            currentQuantity--;
        }

        quantityElement.textContent = currentQuantity;
    }
});