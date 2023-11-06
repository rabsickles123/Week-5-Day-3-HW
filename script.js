let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  let mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "Welcome to the DOM";

  // Part 2
  let bodyOdyOdy = document.querySelector("body");
  bodyOdyOdy.style.backgroundColor = "pink";

  // Part 3
  let favoriteThings = document.querySelector("#favorite-things");
  let lastListItem = favoriteThings.lastElementChild;
  favoriteThings.removeChild(lastListItem);

  // Part 4
  let specialTitle = document.querySelector(".special-title");
  specialTitle.style.fontSize = "2rem";

  // Part 5
  let pastRaces = document.querySelector("#past-races");
  let listItems = pastRaces.getElementsByTagName("li");
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === "Chicago") {
      pastRaces.removeChild(listItems[i]);
      break;
    }
  }

  // Part 6
  let newCityListItem = document.createElement("li");
  newCityListItem.textContent = "Miami";
  pastRaces.appendChild(newCityListItem);

  // Part 7
  let newBlogPost = document.createElement("div");
  newBlogPost.className = "blog-post purple";

  let newCityHeading = document.createElement("h1");
  newCityHeading.textContent = "Miami";
  newCityHeading.style.color = "white";

  let newCityDescription = document.createElement("p");
  newCityDescription.textContent = "I SWERVED THROUGH THE CITY LIE NO OTHER!";

  newBlogPost.appendChild(newCityHeading);
  newBlogPost.appendChild(newCityDescription);

  let main = document.querySelector(".main");

  main.appendChild(newBlogPost);

  // Part 8
  let clickingEvent = document.querySelector("#quote-title");
  clickingEvent.addEventListener("click", (event) => {
    randomQuote();
  });

  // Part 9
  let blogPostElements = document.querySelector(".blog-post");

  blogPostElements.addEventListener("mouseout", () => {
    blogPostElements.classList.toggle("purple");
  });

  blogPostElements.addEventListener("mouseenter", () => {
    blogPostElements.classList.toggle("red");
  });
});
