// https://kea-alt-del.dk/t7/api/categories
fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //fanger vores template
  const template = document.querySelector("template").content;
  //cloner
  const clone = template.cloneNode(true);
  //ændre indhold
  clone.querySelector("a h2").textContent = cat.season;
  clone.querySelector("a").href = `produktliste.html?season=${cat.season}`;

  //appende
  document.querySelector(".brandlist").appendChild(clone);
}
