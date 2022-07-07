const switcher = document.getElementById("productType");
const review = document.getElementById("product-review");
const productForm = document.getElementById("product_form");
var SKU = document.getElementById("sku");
const DVD = document.getElementById("DVD");
const book = document.getElementById("Book");
const furniture = document.getElementById("Furniture");
const saveBtn = document.getElementById("saveBtn");
var productName = document.getElementById("name");
var price = document.getElementById("price");
var size = document.getElementById("size");
var height = document.getElementById("height");
var width = document.getElementById("width");
var length = document.getElementById("length");
var weight = document.getElementById("weight");

//type swircher//

switcher.addEventListener("change", () => {
  if (switcher.value == `DVD`) {
    review.innerText = `Please, provide size in MB format`;
    SKU.value = `JVC200123`;
    DVD.style.background = "";
    book.style.background = "none";
    furniture.style.background = "none";
    size.setAttribute("required", "");
    weight.removeAttribute("required");
    height.removeAttribute("required");
    width.removeAttribute("required");
    length.removeAttribute("required");
    productName.setAttribute("required", "");
    price.setAttribute("required", "");
  }
});

switcher.addEventListener("change", () => {
  if (switcher.value == `Book`) {
    review.innerText = `Please, provide weight in KG format`;
    SKU.value = `GGWP0007`;
    DVD.style.background = "none";
    book.style.background = "";
    furniture.style.background = "none";
    weight.setAttribute("required", "");
    height.setAttribute("readonly", "");
    width.setAttribute("readonly", "");
    length.setAttribute("readonly", "");
    size.setAttribute("readonly", "");
    productName.setAttribute("required", "");
    price.setAttribute("required", "");
  }
});

switcher.addEventListener("change", () => {
  if (switcher.value == `Furniture`) {
    review.innerText = `Please, provide dimensions in HxWxL (CM) format`;
    SKU.value = `TR120555`;
    DVD.style.background = "none";
    book.style.background = "none";
    furniture.style.background = "";
    height.setAttribute("required", "");
    width.setAttribute("required", "");
    length.setAttribute("required", "");
    size.setAttribute("readonly", "");
    weight.setAttribute("readonly", "");
    productName.setAttribute("required", "");
    price.setAttribute("required", "");
  }
});

switcher.addEventListener("change", () => {
  if (switcher.value == "") {
    review.innerText = ``;
    review.style.background = "none";
    SKU.value = ``;
    DVD.style.background = "none";
    book.style.background = "none";
    furniture.style.background = "none";
    size.setAttribute("readonly", "");
    weight.setAttribute("readonly", "");
    height.setAttribute("readonly", "");
    width.setAttribute("readonly", "");
    length.setAttribute("readonly", "");
    productName.setAttribute("readonly", "");
    price.setAttribute("readonly", "");
    SKU.setAttribute("readonly", "");
  }
});
