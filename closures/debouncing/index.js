let moviesContainer = document.getElementById("movies");
let id;

const debounce = (func) => {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    func();
  }, 2000);
};

const API_KEY = "2126f673";

const main = async () => {
  try {
    let searchInput = document.getElementById("query").value;
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput}`
    );
    let data = await response.json();
    console.log(data.Search);
    displayData(data.Search);
  } catch (error) {
    console.log(error);
  }
};

function displayData(movies) {
  moviesContainer.innerHTML = null;

  movies.forEach((e) => {
    let title = document.createElement("p");
    title.innerText = e.Title;

    moviesContainer.append(title);
  });
}
