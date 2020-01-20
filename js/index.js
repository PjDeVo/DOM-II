// Your code goes here

//ONE (Prevent Default for nav links)
let modelFunction = function(item) {
  item.preventDefault();
  alert(" You're already on the home site silly..");
};

let firstLink = document.querySelector(".nav-link");

firstLink.addEventListener("click", modelFunction);

//TWO

let headers = document.querySelectorAll("h2");
console.log(headers);

// let loopEventHandler = function(list) {
//   for (i = 0; i < headers.length; i++) {
//     list[i].style.color = "red";
//   }
// };

Array.from(headers).forEach(header => {
  header.addEventListener("mouseover", event => {
    event.target.style.color = "red";
  });
});

//THREE

Array.from(headers).forEach(header => {
  header.addEventListener("mouseout", event => {
    event.target.style.color = "grey";
  });
});

//Four

let doggo =
  "https://images.unsplash.com/photo-1568484730767-c10e60dd3e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

let allImages = document.querySelectorAll(" img");

let letsGoImg = document.querySelector(".lets-go-img");
letsGoImg.addEventListener("dblclick", event => {
  event.target.src = doggo;
});
console.log(letsGoImg);

//Five

Array.from(allImages).forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.cursor = "pointer";
    img.style.transform = "scale(1.2)";
    img.style.transition = "all 0.4s";
  });
});

Array.from(allImages).forEach(img => {
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// letsGoImg.addEventListener("mouseover", event => {
//   event.target.style.cursor = "pointer";
//   event.target.style.transform = "scale(1.2)";
//   event.target.style.transition = "all 0.4s";
// });

// letsGoImg.addEventListener("mouseout", () => {
//   letsGoImg.style.transform = "scale(1)";
// });

//Six

let buttons = document.querySelectorAll(".btn");
// console.log(buttons);

Array.from(buttons).forEach(button => {
  var d = new Date();
  button.addEventListener("click", event => {
    alert(`You submitted your application at ${d.toDateString()} `);
    button.style.backgroundColor = "red";
    event.stopPropagation(); //stop probogation
  });
});

//Seven

let offers = document.querySelector(".content-pick");
console.log(offers);
offers.addEventListener("click", () => {
  offers.style.backgroundColor = "blue";
}); //propogation

//Eight
window.addEventListener("resize", () => {
  alert("YOU ARE MESSING WIFF MY WEBPAGE");
});

//Nine
//Found the following function online and made it work inside an event listener below

// function zoom(event) {
//   event.preventDefault();

//   scale += event.deltaY * -0.01;

//   // Restrict scale
//   scale = Math.min(Math.max(0.125, scale), 4);

//   // Apply scale transform
//   el.style.transform = `scale(${scale})`;
// }

let scale = 1;
const mainImage = document.querySelector("header img");
// console.log(mainImage);

mainImage.addEventListener("wheel", event => {
  event.preventDefault();
  console.log("hi");
  scale += event.deltaY * -0.01;
  mainImage.style.transform = `scale(${scale})`;
});

//Ten

document.addEventListener("keydown", event => {
  if (event.keyCode === 27) {
    alert(
      "Are you sure you want to leave before signing up with one of our plans!"
    );
  }
});
