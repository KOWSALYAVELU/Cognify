const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  });
}

const data = [
  {
    title: "HTML Tutorial",
    text: "HTML is the standard language used to create web pages.",
    image: "./images/html.png",
    link: "https://www.w3schools.com/html/"
  },
  {
    title: "CSS Tutorial",
    text: "CSS is used to style and layout web pages.",
    image: "./images/CSS.jpg",
    link: " https://www.codecademy.com/learn/learn-css"
  },
  {
    title: "JavaScript Tutorial",
    text: "JavaScript adds interactivity to web pages.",
    image: "./images/js.png",
    link: "https://www.geeksforgeeks.org/javascript/javascript-tutorial/"
 },
  {
    title: "Python Tutorial",
    text: "Python is a popular programming language for web development, data analysis, and more.",
    image: "./images/py.jpg",
    link: "https://openpython.org/learn-python/"
  }
   


];


const container = document.getElementById("card-container");

data.forEach(item => {
  container.innerHTML += `
    <div class="column is-12-mobile is-6-tablet is-4-desktop">
      <div class="card">

        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${item.image}" alt="${item.title}">
          </figure>
        </div>

        <div class="card-content">
          <p class="title is-5">${item.title}</p>
          <p>${item.text}</p>

          <a href="${item.link}" target="_blank" class="button is-link">
            Read More
          </a>
        </div>

      </div>
    </div>
  `;
});