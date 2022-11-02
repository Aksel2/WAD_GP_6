let usersJson = null;

window.onload = function () {
  fetch("../res/json/users.json")
    // Whenever the promise is resovled
    .then((response) => response.json()) // It's binary by default, let's say that we want it in json format.
    // console.log(response)
    .then((users) => {
      usersJson = users;
      console.log(users);
      console.log("Fetchin andmeid");

      for (let user of users) {
        console.log("tsüklis");
      }
    })
    .catch((err) => {})
    .finally(() => {});
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown").style["display"] = "inline";
  console.log("näitan jsonit", usersJson);
  let randomNumber = Math.floor(Math.random() * (8 - 0 + 1) + 0);
  let user = usersJson[randomNumber]
  console.log(randomNumber, user);

  // Change
  let fullName = user["fullName"]
  let email = user["email"]

  let id = user["id"]
  console.log(fullName, email)
  const spanName =  document.createElement('span')
  const spanEmail=  document.createElement('span')
  spanName.innerHTML = fullName;
  spanEmail.innerHTML = email;

  console.log(spanName, spanEmail) 
  let dropdown = document.getElementById("myDopdown")

  dropdown.appendChild(spanEmail)
  
  dropdown.appendChild(spanEmail)
  
}
