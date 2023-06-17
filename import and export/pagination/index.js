let container = document.getElementById("container");
let previous = document.getElementById("previous");
let next = document.getElementById("next");

let fetchData;
let total_pages;
let pageNumber = 1;

async function Fetching(pageNumber) {
  if (pageNumber === 1) {
    previous.disabled = true;
  } else {
    previous.disabled = false;
  }

  if (pageNumber == total_pages) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
  let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
  let data = await response.json();
  Display(data.data);
  console.log(data);
  document.getElementById("page_number").innerText = pageNumber;
  total_pages = data.total_pages;
}

Fetching(pageNumber);

function Display(data) {
  //   console.log("hi");
  container.innerHTML = "";
  data.forEach(({ avatar, first_name, email }) => {
    let card = document.createElement("div");

    let firstName = document.createElement("h2");
    let image = document.createElement("img");
    let emails = document.createElement("p");

    firstName.innerText = first_name;
    image.setAttribute("src", avatar);
    emails.innerText = email;
    card.append(image, firstName, emails);

    container.append(card);
  });
}

previous.addEventListener("click", () => {
  if (pageNumber == 1) {
    return;
  }

  pageNumber--;

  Fetching(pageNumber);
});

next.addEventListener("click", () => {
  if (pageNumber == total_pages) {
    return;
  }

  pageNumber++;

  Fetching(pageNumber); //2
});
