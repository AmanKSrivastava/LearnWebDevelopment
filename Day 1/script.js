createCard = (imageUrl, name, description) => {
  let cardsDiv = document.querySelector(".cards");
  console.log(cardsDiv);
  let card = document.createElement("div");
  card.className = "card";
  let image = document.createElement("img");
  image.className = "card-image";
  image.src = imageUrl;
  image.alt = "User Image";
  let userName = document.createElement("h1");
  userName.innerText = name;
  let userDescription = document.createElement("p");
  userDescription.innerText = description;

  card.appendChild(image);
  card.appendChild(userName);
  card.appendChild(userDescription);

  cardsDiv.appendChild(card);
};

let button = document.querySelector(".add-card");
console.log(button);
button.addEventListener("click", function (e) {
  createCard(
    "https://www.w3schools.com/howto/img_avatar.png",
    "Aman",
    "Dynamic Added User Desceription"
  );
});
