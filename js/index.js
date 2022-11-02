function dateFormatter(date){

  let dateString = date;
  let dateParts = dateString.split("/");
  let dateObject = new Date(+dateParts[2], dateParts[1]-1, +dateParts[0])
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const day = dateObject.getDate();
  const month = monthNames[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  return day + ' ' + month + ', ' + year;
}

function loadPosts(){

  fetch("../res/json/posts.json")
    // Whenever the promise is resovled
    .then((response) => response.json()) // It's binary by default, let's say that we want it in json format.

    .then((posts) => {
      jsonData = posts;
   
        
      for (post of posts){
        const div_container = document.createElement("div"); // This contains the whole post including header and footer.
        const div_card = document.createElement("div"); // This contains the post info
        const div_cardHeading = document.createElement("div");  // Contains the post header. Profile picture and date
        const div_box = document.createElement("div"); // Contains the profile picture of the post heading
        const div_right = document.createElement("div"); // This aligns the post header text to the right
        const div_cardFooter = document.createElement("div"); // Thumbs up reaction goes here
        
        const span = document.createElement("span");
        span.textContent = dateFormatter(post.post.date);
        div_right.classList.add("right");
        div_right.appendChild(span);
        const pc = document.createElement("img");
        pc.src = post.post.profile;
        div_box.appendChild(pc);

        const img = document.createElement("img");
        img.src = post.post.img;
        div_box.classList.add("box");
        div_box.appendChild(div_right);
        div_cardHeading.classList.add("card-heading");
        div_cardHeading.appendChild(div_box);

        const p = document.createElement("p");
        p.textContent = post.post.message;
        div_card.classList.add("card");
     

        const footer = document.createElement("footer");
        
        const react = document.createElement("img");
        react.src = "https://cdn.worldvectorlogo.com/logos/thumbs-up-facebook.svg";
        div_cardFooter.appendChild(react);

        div_cardFooter.classList.add("card-footer");
        div_cardFooter.append(footer);
        
        div_right.appendChild(span);
        div_box.appendChild(div_right);

        div_cardHeading.appendChild(div_box);
        div_cardHeading.classList.add("card-heading")
        
        // post heading
        div_card.appendChild(div_cardHeading);
        
        // Postituse sisu
        div_card.appendChild(img);
        div_card.appendChild(p);
        
        // post footer
        div_cardFooter.appendChild(footer);
        div_card.appendChild(div_cardFooter);

        div_container.appendChild(div_card);
        div_container.classList.add("container"); 
       
        const body = document.querySelector('body');
        body.appendChild(div_container);
        

      }
      // page footer
      const body = document.querySelector('body');
      const div_containerFooter = document.createElement("div");
      div_containerFooter.classList.add("container-footer");
      body.appendChild(div_containerFooter);
      

    })
    .catch((err) => {
      console.log("Error");

    })
    .finally(() => {
      console.log("Done");
   
    });
}



window.onload = function () {

    
  // Fetching post and user data
    const fetchData = async () => {
      try {
        const responsesJSON = await Promise.all([
            //fetch('https://myjson.dit.upm.es/api/bins/3k72?fbclid=IwAR28FflHyklfamoQsqEn3eOWRJBVX-cry0aWdx5DrhIn3Mzj-4sR3gnbo2g'),
            fetch('../res/json/users.json'),
            fetch('../res/json/posts.json')
        ]);
        // Reads the JSONs into constants
        const [users, posts] = await Promise.all(responsesJSON.map(r => r.json()));
      
        for (post of posts){
          const div_container = document.createElement("div"); // This contains the whole post including header and footer.
          const div_card = document.createElement("div"); // This contains the post info
          const div_cardHeading = document.createElement("div");  // Contains the post header. Profile picture and date
          const div_box = document.createElement("div"); // Contains the profile picture of the post heading
          const div_right = document.createElement("div"); // This aligns the post header text to the right
          const div_cardFooter = document.createElement("div"); // Thumbs up reaction goes here
          
          // Adding the card header, which contains the date and profile image
          const span = document.createElement("span");
          span.textContent = dateFormatter(post.post.date);
          div_right.classList.add("right");
          div_right.appendChild(span);
          const pc = document.createElement("img");
          // Getting user profile picture
          pc.src = users[post.userId - 1].picture;
          div_box.appendChild(pc);
  
          // Adding post image and text
          const img = document.createElement("img");
          img.src = post.post.img;
          div_box.classList.add("box");
          div_box.appendChild(div_right);
          div_cardHeading.classList.add("card-heading");
          div_cardHeading.appendChild(div_box);
  
          const p = document.createElement("p");
          p.textContent = post.post.message;
          div_card.classList.add("card");
          
          // Adding post footer which contains the reaction thumbs up
          const footer = document.createElement("footer");
          const react = document.createElement("img");
          react.src = "https://cdn.worldvectorlogo.com/logos/thumbs-up-facebook.svg";
          div_cardFooter.appendChild(react);
  
          div_cardFooter.classList.add("card-footer");
          div_cardFooter.append(footer);
          
          div_right.appendChild(span);
          div_box.appendChild(div_right);
  
          div_cardHeading.appendChild(div_box);
          div_cardHeading.classList.add("card-heading")
          
          // post heading
          div_card.appendChild(div_cardHeading);
          
          // Postituse sisu
          div_card.appendChild(img);
          div_card.appendChild(p);
          
          // post footer
          div_cardFooter.appendChild(footer);
          div_card.appendChild(div_cardFooter);
  
          div_container.appendChild(div_card);
          div_container.classList.add("container"); 
         
          const body = document.querySelector('body');
          body.appendChild(div_container);
          
  
        }
        // page footer
        const body = document.querySelector('body');
        const div_containerFooter = document.createElement("div");
        div_containerFooter.classList.add("container-footer");
        body.appendChild(div_containerFooter);


      } catch (err) {
        throw err;
      }
    };
    
    fetchData();
};
