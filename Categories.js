const mensClothingButton = document.getElementById('mens-clothing');

const menClothing = () => {
    const mensClothingProducts = product.filter(product => product.category === "men's clothing");
}

mensClothingButton.addEventListener('click', menClothing);

export { mensClothingButton, menClothing};
