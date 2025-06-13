const createCard = (imageUrl, name, description) => {
  imageUrl =
    imageUrl && imageUrl.trim() !== ""
      ? imageUrl
      : "https://www.w3schools.com/howto/img_avatar.png";
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
  let editIcon = document.createElement("i");
  editIcon.className = "fa fa-edit";
  editIcon.style.cursor = "pointer";
  card.appendChild(image);
  card.appendChild(userName);
  card.appendChild(userDescription);
  card.appendChild(editIcon);

  cardsDiv.appendChild(card);
  editIcon.addEventListener("click", function () {
    cancelEditButton.classList.toggle("cancel-edit-hide");
    editingCard = card;
    document.getElementById("name").value = name;
    document.getElementById("imageUrl").value = imageUrl;
    document.getElementById("desc").value = description;
    document.querySelector(".create-form").innerText = "Update";
    form.classList.toggle("hideForm");
    document.getElementById("name").focus();
  });
};

let addbutton = document.querySelector(".add-card");
let deletebutton = document.querySelector(".delete-card");
let form = document.querySelector("#createCardForm");
let editingCard = null;
let cancelEditButton = document.querySelector(".cancel-edit");

cancelEditButton.addEventListener("click", function () {
  editingCard = null;
  form.reset();
  cancelEditButton.classList.add("cancel-edit-hide");
  form.classList.add("hideForm");
});

addbutton.addEventListener("click", function () {
  editingCard = null;
  form.reset();
  form.querySelector(".create-form").innerText = "Create";
  cancelEditButton.classList.add("cancel-edit-hide");
  form.classList.remove("hideForm");
  document.getElementById("name").focus();
});

deletebutton.addEventListener("click", function () {
  let cards = document.querySelector(".cards");
  let lastChildCard = document.querySelector(".cards").lastElementChild;

  if (lastChildCard) {
    lastChildCard.style.transition = "opacity 0.3s";
    lastChildCard.style.opacity = 0;

    setTimeout(() => {
      cards.removeChild(lastChildCard);
    }, 300);
  } else {
    form.classList.add("hideForm");
    alert("No card left to delete");
    console.log("No card left to delete");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let imageUrl = document.getElementById("imageUrl").value;
  let description = document.getElementById("desc").value;
  if (editingCard) {
    editingCard.querySelector("h1").innerText = name;
    editingCard.querySelector("p").innerText = description;
    editingCard.querySelector("img").src =
      imageUrl || "https://www.w3schools.com/howto/img_avatar.png";
    editingCard = null;
  } else {
    createCard(imageUrl, name, description);
  }

  form.reset();
  cancelEditButton.classList.add("cancel-edit-hide");
  form.classList.add("hideForm");
});
