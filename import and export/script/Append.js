function Display(data) {
  //   console.log("hi");
  container.innerHTML = "";
  data.forEach(({ category, description, price, image, title } = element) => {
    let card = document.createElement("div");

    let titles = document.createElement("h2");
    let images = document.createElement("img");
    let descriptions = document.createElement("p");
    let categorys = document.createElement("p");
    let prices = document.createElement("h4");
    let addToCart = document.createElement("button");

    titles.innerText = title;
    images.setAttribute("src", image);
    descriptions.innerText = description;
    prices.innerText = price;
    categorys.innerText = category;
    addToCart.innerText = "Add To Cart";
    addToCart.addEventListener("click", function () {
      LSData.push(element);
      localStorage.setItem("ecomm", JSON.stringify(LSData));
    });
    card.append(titles, images, descriptions, categorys, prices, addToCart);

    container.append(card);
  });
}

// function sample() {
//     console.log("Hi")
// }

export default Display;
