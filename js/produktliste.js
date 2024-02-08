//saml season på
const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

fetch("https://kea-alt-del.dk/t7/api/products?season=" + season)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log("udslogt: ", product.soldout);
  //fang template
  const template = document.querySelector("#produktTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".produkt .brand").textContent = product.brandname;
  copy.querySelector(".articletype").textContent = product.articletype;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.discount !== null) {
    copy.querySelector(".price_after_discount").textContent = product.price - product.discount;
  } else {
    copy.querySelector(".price_after_discount").remove();
  }

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);
}
