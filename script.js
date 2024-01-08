// Define a sample data object
const data = {
  id: 1, // or some unique identifier
  // other properties...
};

// Wrap your existing code in a function that takes the data as a parameter
function initializeQuantityControls(data) {
  document.addEventListener("DOMContentLoaded", function () {
    const quantityElement = document.getElementById(`quantity-${data.id}`);
    const btnMinus = document.querySelector(`.btn-minus[data-id="${data.id}"]`);
    const btnPlus = document.querySelector(`.btn-plus[data-id="${data.id}"]`);

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
}

// Call the function with the data
initializeQuantityControls(data);
