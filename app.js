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
fetchProduct();

const displayProduct = (list) => {
  console.log(list);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};
