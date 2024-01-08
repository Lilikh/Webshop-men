import { card } from "/Cards.js";
import { mensClothingButton, menClothing} from "/Categories.js";
const cardsContainer = document.querySelector(".cards-container");

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
