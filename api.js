import { card } from "/Cards.js";
import { modal } from "/Modal.js";
import { filterProductsByCategory } from "/Categories.js";

const mensClothingCategory = document.getElementById('mens-clothing');
const jewelryCategory = document.getElementById('jewelery');
const electronicsCategory = document.getElementById('electronics');
const womansClothingCategory = document.getElementById('womans-clothing');

const cardsContainer = document.querySelector(".cards-container");
const form = document.querySelector("£form");
const inputId = document.querySelector("#postId");
const url = "https://fakestoreapi.com/products";

let productsData = [];

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    productsData = data;
    products(data);
    console.log(data);
  });

  const products = (productData) => {
    productData.map((product) => {
      cardsContainer.innerHTML += card(product);
    });
  };


const filterByCategory = (category) => {
  const filteredProducts = productsData.filter(item => item.category === category);
  renderFilteredProducts(filteredProducts);
};

const renderFilteredProducts = (filteredData) => {
  cardsContainer.innerHTML = '';
  filteredData.forEach((product) => {
    cardsContainer.innerHTML += card(product);
  });
};


mensClothingCategory.addEventListener('click', () => {
  filterByCategory("men's clothing");
});
jewelryCategory.addEventListener('click', () => {
  filterByCategory("jewelery");
});
electronicsCategory.addEventListener('click', () => {
  filterByCategory("electronics");
});
womansClothingCategory.addEventListener('click', () => {
  filterByCategory("women's clothing");
});


form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(inputId.value);})
