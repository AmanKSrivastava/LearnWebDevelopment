function createCard(title, cName, views, monthsOld, duration, bgImage) {
  let container = document.querySelector(".container");
  console.log(container);
  let card = document.createElement("div");

  card.setAttribute("class", "card");

  //card image
  let cardImageDiv = document.createElement("div");

  cardImageDiv.setAttribute("class", "card-image");

  let cardImage = document.createElement("img");

  cardImage.setAttribute("src", bgImage);

  cardImageDiv.appendChild(cardImage);

  let imageTimesStamp = document.createElement("p");

  imageTimesStamp.innerText = duration;

  cardImageDiv.appendChild(imageTimesStamp);

  card.appendChild(cardImageDiv);

  //Card Image end

  //Card Descriptions

  let cardTitle = document.createElement("div");

  cardTitle.setAttribute("class", "card-text");

  let cardTitleHeading = document.createElement("h6");
  cardTitleHeading.innerText = title;

  cardTitle.appendChild(cardTitleHeading);

  let cardTitleDesc = document.createElement("p");
  cardTitleDesc.innerText = `${cName} . ${formatNumber(
    views
  )} views . ${monthsOld} months ago`;

  cardTitle.appendChild(cardTitleDesc);

  card.appendChild(cardTitle);

  // //

  // console.log(card);

  container.appendChild(card);

  console.log(container);
}

createCard(
  "Intro",
  "Aman Srivastava",
  "560000",
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

function formatNumber(num) {
  if (num >= 1_000_000_000) {
    return (
      (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 1) + "B"
    );
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + "K";
  } else {
    return num.toString();
  }
}
