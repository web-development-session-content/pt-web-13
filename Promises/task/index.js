let container = document.querySelector("#loading");
const movies = [
  {
    name: "RRR",
    rating: 8,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e",
  },
  {
    name: "Goodluck Jerry	",
    rating: 7,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/901/1310901-v-e9763c24f44d",
  },
  {
    name: "MSD",
    rating: 8.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
  },
  {
    name: "Doctor Strange",
    rating: 9,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
  },
  {
    name: "Ford vs Ferrari",
    rating: 8.7,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v",
  },
  {
    name: "Masaan",
    rating: 8.8,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
  },
  {
    name: "The lion king",
    rating: 8.4,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
  },
];
let result = new Promise((resolve, reject) => {
  setTimeout(function () {
    if (movies !== null) {
      resolve(movies);
    } else {
      reject("no data found in the server");
    }
  }, 5000);
});

result
  .then((resolve) => {
    // console.log(resolve);
    appending(resolve);
  })
  .catch((error) => {
    console.log(error);
    alert(error);
  });

function appending(data) {
  container.innerHTML = null;

  data.forEach((e) => {
    let p = document.createElement("p");
    p.innerText = e.name;

    container.append(p);
  });
}
