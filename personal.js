const name1 = document.getElementById("name1");
const email = document.getElementById("email");
const number = document.getElementById("number");
const data = document.getElementById("data");
const btn = document.getElementById("click");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third=document.querySelector(".third");
const end=document.querySelector(".end");
const mwvane=document.querySelector(".mwvane");
window.onload = function () {
  let n = name1.value;
  let e = email.value;
  let p = number.value;
  let d = data.value;
  if ((name1.value = "")) {
    first.style.display = "block";
  } else {
    first.style.display = "none";
    
  }
  name1.value = localStorage.getItem("name") || n;

  if ((email.value = "")) {
    second.style.display = "block";
  } else {
    second.style.display = "none";
  }
  email.value = localStorage.getItem("email") || e;
  if ((number.value = "")) {
    third.style.display = "block";
  } else {
    third.style.display = "none";
  }

  number.value = localStorage.getItem("number") || p;
  if ((data.value = "")) {
    end.style.display = "block";
  } else {
    end.style.display = "none";
  }
  data.value = localStorage.getItem("data") || d;
};
name1.addEventListener("input", (event) => {
  console.log(event.target.value);
  localStorage.setItem("name", event.target.value);
  if (event.target.value != "") {
    first.style.display = "none";
  } else {
    first.style.display = "block";
  }
});
email.addEventListener("input", (event) => {
  console.log(event.target.value);
  localStorage.setItem("email", event.target.value);
  if (event.target.value != "") {
    second.style.display = "none";
  } else {
    second.style.display = "block";
  }
});
number.addEventListener("input", (event) => {
  console.log(event.target.value);
  localStorage.setItem("number", event.target.value);
  if (event.target.value != "") {
    third.style.display = "none";
  } else {
    third.style.display = "block";
  }
});
data.addEventListener("input", (event) => {
  console.log(event.target.value);
  localStorage.setItem("data", event.target.value);
  if (event.target.value != "") {
    end.style.display = "none";
  } else {
    end.style.display = "block";
  }
  

});


