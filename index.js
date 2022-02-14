"use strict";
(function() {

  window.addEventListener("load", init);

  let uno = false;
  let dos = false;
  let tres = false;

  function init() {
    id("one").addEventListener("submit", checkone);
    id("two").addEventListener("submit", checktwo);
    id("three").addEventListener("submit", checkthree);

    let form = document.getElementById("one");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    let form2 = document.getElementById("two");
    form2.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    let form3 = document.getElementById("three");
    form3.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    next();
  };

  function checkone() {
    console.log("one");
    let first = id("first").value;
    if (first==="235") {
      id("enterone").disabled = true;
      id("enterone").textContent = "\u2713";
      uno = true;
      next();
    } else {
      id("first").value = "";
    }
  }

  function checktwo() {
    console.log("two");
    let second = id("second").value;
    if (second==="72") {
      id("entertwo").disabled = true;
      id("entertwo").textContent = "\u2713";
      dos = true;
      next();
    } else {
      id("second").value = "";
    }
  }

  function checkthree() {
    console.log("three");
    let third = id("third").value;
    if (third==="80") {
      id("enterthree").disabled = true;
      id("enterthree").textContent = "\u2713";
      tres = true;
      next();
    } else {
      id("third").value = "";
    }
  }

  function next() {
    if (uno && dos && tres){
      id("container").classList.add("hidden");
      id("photo").classList.remove("hidden");
    }
  }

  function id(idName) {
    return document.getElementById(idName);
  }
})();