window.onload = function () {
  fetch("./res/json/posts.json")
    // Whenever the promise is resovled
    .then((response) => response.json()) // It's binary by default, let's say that we want it in json format.

    .then((posts) => {
        console.log(posts);

    })
    .catch((err) => {

    })
    .finally(() => {

    });
};
