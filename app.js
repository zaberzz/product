const url = "https://course-api.com/javascript-store-products";

const productDOM = document.querySelector(".products-center");

const fetchProduct = async () => {
  productDOM.innerHTML = ` <div class="loading"></div>`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">there was an error</p>`;
  }
};

const displayProduct = (list) => {
  const productsList = list
    .map((product) => {
      const {
        id,
        fields: { price, name: title },
      } = product;
      const { url: image } = product.fields.image[0];
      console.log(id, price, title);

      return `<a class="single-product" href="product.html?id=${id}">
    <img src="${image}" class="single-product-img" alt="${title}" />
    <footer>
      <h5 class="name">${title}</h5>
      <span class="price">$${price / 100}</span>
    </footer>
  </a>`;
    })
    .join("");
  productDOM.innerHTML = `<div class="products-container">${productsList}</div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};
start();
