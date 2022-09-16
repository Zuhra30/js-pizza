// non qanday bo'lsin
var elSelect = document.querySelector("#js-select");
var elSelectResult = document.querySelector("#js-select-result");
elSelect.addEventListener("change", function () {
  elSelectResult.textContent = this.value;
  elSelectResult.classList.add("text-danger");
});

// kattaligi
var elRadio = document.querySelectorAll("#js-label");
var elRadioResult = document.querySelector("#js-radio-result");
for (var i = 0; i < elRadio.length; i++) {
  elRadio[i].addEventListener("change", function () {
    elRadioResult.textContent = this.value;
    elRadioResult.classList.add("text-danger");
  });
}

// ustiga nima solaylik
var elSiteProduct = document.querySelector("#js-product");
var elProductResult = document.querySelector("#js-product-result");

var productArray = [
  "Pomidor",
  "Kurka go'shti",
  "Zaytun",
  "Tuzlangan bodring",
  "Qo'ziqorin",
  "Qazi",
];
var product = [];

for (var i = 0; i < productArray.length; i++) {

  var productLabelElement = document.createElement("label");
  var productInputElement = document.createElement("input");
  var productSpanElement = document.createElement("span");
  productInputElement.classList.add("me-1", "form-check-input");

  productSpanElement.textContent = productArray[i];

  elSiteProduct.appendChild(productLabelElement);
  productLabelElement.appendChild(productInputElement);
  productLabelElement.appendChild(productSpanElement);

  productInputElement.setAttribute("type", "checkbox");
  productInputElement.setAttribute("id", productArray[i]);
  productInputElement.setAttribute("value", productArray[i]);

  productInputElement.addEventListener("change", function () {
    let indexItem = product.indexOf(this.value);

    if (indexItem == -1) {
      product.push(this.value);
    } else {
      product.splice(indexItem, 1);
    }

    elProductResult.innerHTML = "";
    for (const productt of product) {
      let newLiElement = document.createElement("li");
      newLiElement.textContent = productt;
      newLiElement.classList.add("text-danger");
      elProductResult.appendChild(newLiElement);
    }
    });
}


// qo'shimchalar
var elSiteExtra = document.querySelector("#js-extra");
var elExtraResult = document.querySelector("#js-extra-result");

var extraArray = ["Achchiq", "Sosiskali"];
var extra = [];

for (var i = 0; i < extraArray.length; i++) {
  var extraLabelElement = document.createElement("label");
  var extraInputElement = document.createElement("input");
  var extraSpanElement = document.createElement("span");
  extraInputElement.classList.add("me-1", "form-check-input");

  extraSpanElement.textContent = extraArray[i];

  elSiteExtra.appendChild(extraLabelElement);
  extraLabelElement.appendChild(extraInputElement);
  extraLabelElement.appendChild(extraSpanElement);

  extraInputElement.setAttribute("type", "checkbox");
  extraInputElement.setAttribute("id", extraArray[i]);
  extraInputElement.setAttribute("value", extraArray[i]);

  extraInputElement.addEventListener("change", function () {
    let extraIndexItem = extra.indexOf(this.value);

    if (extraIndexItem == -1) {
      extra.push(this.value);
    } else {
      extra.splice(extraIndexItem, 1);
    }
    elExtraResult.innerHTML = "";
    for (const extraa of extra) {
      let newLI = document.createElement("li");
      newLI.textContent = extraa;
      newLI.classList.add("text-danger");
      elExtraResult.appendChild(newLI);
    }
  });
}
