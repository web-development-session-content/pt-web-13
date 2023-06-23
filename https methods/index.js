// get method---> normal fetch request

//add the data into the data base we created.

let create_btn = document.getElementById("submit_btn");

create_btn.addEventListener("click", () => {
  addPost();
});
// post method
const addPost = async () => {
  try {
    // let title = document.getElementById("title");
    //   let author = document.getElementById("author");

    let new_obj = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
    };

    let response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(new_obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

let update_btn = document.getElementById("update_btn");
update_btn.addEventListener("click", () => {
  update_method();
});

//patch method
let update_method = async () => {
  try {
    let update_id = document.getElementById("update_id").value;
    let new_obj = {
      name: document.getElementById("update_title").value,
    };

    let response = await fetch(`http://localhost:3000/posts/${update_id}`, {
      method: "PATCH",
      body: JSON.stringify(new_obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//put method

let replace_btn = document.getElementById("replace_btn");
replace_btn.addEventListener("click", () => {
  replace_method();
});
let replace_method = async () => {
  try {
    let replace_id = document.getElementById("replace_id").value;
    let new_obj = {
      name: "masai",
    };

    let response = await fetch(`http://localhost:3000/posts/${replace_id}`, {
      method: "PUT",
      body: JSON.stringify(new_obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//delete method

let delete_btn = document.getElementById("delete_btn");
delete_btn.addEventListener("click", () => {
  delete_method();
});
let delete_method = async () => {
  try {
    let delete_id = document.getElementById("delete_id").value;

    let response = await fetch(`http://localhost:3000/posts/${delete_id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
