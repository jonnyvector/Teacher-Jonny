var headerBtn = document.getElementsByClassName("header-btn")[0];
var payButtons = document.querySelectorAll(".pay-button");

var dataId = "";
// console.log(dataId);

payButtons[1].addEventListener("click", function () {
  var dataId = $(this).attr("data-id");
  console.log(dataId);
  console.log("clicked");
});
payButtons[3].addEventListener("click", function () {
  dataId = $(this).attr("data-id");
  console.log(dataId);
  console.log("clicked");
});

console.log(dataId);

// payButtons[0].addEventListener("click", function () {
//   console.log("clicked");
//   dataId = $(this).attr("data-id");
//   // console.log(dataId);
// });

// console.log(dataId);

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

upArrow.onclick = function () {
  if (x > "-900") {
    x = x - 300;
    slide.style.top = x + "px";
  }
};

downArrow.onclick = function () {
  if (x < 0) {
    x = x + 300;
    slide.style.top = x + "px";
  }
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

payButtons[0].addEventListener("click", function () {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ id: 1, quantity: 1 }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      // console.log("Hi");
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
});

payButtons[1].addEventListener("click", function () {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ id: 2, quantity: 1 }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      // console.log("Hi");
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
});

payButtons[2].addEventListener("click", function () {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ id: 3, quantity: 1 }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      // console.log("Hi");
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
});

payButtons[3].addEventListener("click", function () {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ id: 4, quantity: 1 }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      // console.log("Hi");
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
});

payButtons[4].addEventListener("click", function () {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ id: 5, quantity: 1 }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      // console.log("Hi");
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
});

payButtons[5].addEventListener("click", function () {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ id: 6, quantity: 1 }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      // console.log("Hi");
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
});
