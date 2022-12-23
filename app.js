const url = "https://course-api.com/javascript-store-products";

const productDOM = document.querySelector(".products-center");

const fetchProduct = async () => {
  productDOM.innerHTML = ` <div class="loading"></div>`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    productDOM.innerHTML = `<p class="error">there was an error</p>`;
  }
};
fetchProduct();
