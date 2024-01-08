document.addEventListener("DOMContentLoaded", function () {
  const products = [
    // Your product data
  ];

  function updateQuantity(productId, action) {
    const product = products.find((p) => p.id === productId);

    if (product) {
      if (action === "plus") {
        product.quantity = (product.quantity || 0) + 1;
      } else if (action === "minus" && product.quantity > 0) {
        product.quantity -= 1;
      }

      // Update the UI
      renderProducts();
    }
  }

  function renderProducts() {
    const productContainer = document.getElementById("producten");
    productContainer.innerHTML = "";

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.innerHTML = card(product);
      productContainer.appendChild(productCard);

      // Add event listeners for plus and minus buttons
      const btnPlus = productCard.querySelector(".btn-plus");
      const btnMinus = productCard.querySelector(".btn-minus");

      btnPlus.addEventListener("click", function () {
        updateQuantity(product.id, "plus");
      });

      btnMinus.addEventListener("click", function () {
        updateQuantity(product.id, "minus");
      });
    });
  }

  // Initial rendering
  renderProducts();
});
