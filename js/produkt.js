// https://kea-alt-del.dk/t7/api/products/1525
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".info h2").textContent = product.productdisplayname;
  document.querySelector(".info .brand").textContent = product.brandname;
  document.querySelector(".articletype").textContent = product.articletype;
  document.querySelector(".price").textContent = product.price;
  document.querySelector(".color").textContent = product.basecolour;

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
