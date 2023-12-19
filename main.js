// let left = document.getElementsByClassName("fa-arrow-left");
// let right = document.getElementsByClassName("fa-arrow-right");
// let cards = document.getElementsByClassName("cards")[0];

// left.addEventListener("click", () => {
//   cards.scrollLeft -= 140;
// });
// right.addEventListener("click", () => {
//   cards.scrollLeft += 140;
// });
let leftside = document.getElementById("left");
let rightside = document.getElementById("right");
let cards = document.getElementsByClassName("cards")[0];
leftside.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});
rightside.addEventListener("click", () => {
  cards.scrollLeft += 140;
});
let poster = document.getElementById("pooster");
let title = document.getElementById("title");
let ice_cont = document.getElementById("ice_cont");
let img = document.getElementById("img");
Array.from(document.getElementsByClassName("card")).forEach((ele, i) => {
  // console.log(ele);
  console.log(ele);
  ele.addEventListener("click", () => {
    poster.src = ele.getElementsByTagName("img")[0].src;
    title.innerText = ele.getElementsByTagName("h5")[0].innerText;
    ice_cont.innerText = ele.getElementsByTagName("h4")[0].innerText;
  });
});
