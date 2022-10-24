window.onload = function () {
  fetch("../res/json/posts.json")
    // Whenever the promise is resovled
    .then((response) => response.json()) // It's binary by default, let's say that we want it in json format.

    .then((posts) => {
        console.log(posts);
        for (i of posts){
          console.log("data", i.post);
          
        }

      for (post of posts){
        const container = document.createElement("container"); // This contains the whole post including header and footer. aligns it
        const card = document.createElement("card"); // This contains the post info
        const cardHeading = document.createElement("card-heading");  // Contains the post header. Profile picture and date
        const box = document.createElement("box"); // Contains the profile picture of the post heading
        const textRight = document.createElement("right"); // This aligns the post header text to the right
        const cardFooter = document.createElement("card-footer"); // Thumbs up reaction goes here
        
        const date = document.createElement("date");
        date.textContent = post.date;
        date.classList.add("date");
        console.log(post.date);
        textRight.appendChild(date);

        const profilePic = document.createElement("profilePic");
        profilePic.textContent = post.profilePicture;
        profilePic.classList.add("profilePic");
        box.appendChild(profilePic);

        const postPicture = document.createElement("postPicture");
        postPicture.textContent = post.postPicture;
        postPicture.classList.add("postPicture");
        card.appendChild(postPicture);

        const postText = document.createElement("postText");
        postText.textContent = post.postBody;
        postText.classList.add("postText");
        card.appendChild(postText);

        const footerImage = document.createElement("footerImage");
        footerImage.textContent = post.footerPicture;
        footerImage.classList.add("footerImage");
        cardFooter.appendChild(footerImage);

        card.appendChild(cardHeading);
        card.appendChild(box);
        card.appendChild(cardFooter);
        container.appendChild(card);
        



      }

    })
    .catch((err) => {
      console.log("Error");

    })
    .finally(() => {
        console.log("Hello");
    });
};
/*
<div class="container">
        <div class="card">
          <div class="card-heading">
            <div class="box">
              <img src="../res/images/profile2.png" alt="profile picture" />
              <div class="right">
                <span>3 October, 2022</span>
              </div>
            </div>
          </div>
          <img src="../res/images/raekoda.JPG" alt="Image of Tartu raekoda" />
          <p>Käisin Tartu raekojas!</p>
          <div class="card-footer">
            <footer>
              <img
                src="https://cdn.worldvectorlogo.com/logos/thumbs-up-facebook.svg"
                alt="Thumbs up"
              />
            </footer>
          </div>
        </div>
      </div>

*/