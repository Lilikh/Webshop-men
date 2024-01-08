import { card } from "/Cards.js";
import { modal } from "/Modal.js";
import { mensClothingButton, menClothing } from "/Categories.js";
const cardsContainer = document.querySelector(".cards-container");
const seMore = document.querySelector("#seMore");

const url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    products(data);
    console.log(data);
  });

const products = (data) => {
  data.map((product) => {
    cardsContainer.innerHTML += card(product);
  });
};

seMore.addEventListener("click", (event) => {
  cardsContainer.innerHTML += modal(event.target.value);
});
