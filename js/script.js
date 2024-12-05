"use strict";
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalOpenCard = document.querySelector(".modal-btn");
const modalForm = document.querySelector(".modal__form");
const modalInput = document.querySelectorAll(".modal__form-input");
const modalClose = document.querySelector(".modal__form-close");
const formBtn = document.querySelector(".modal__form-btn");
const modalTitle = document.querySelector(".modal__form-title");
const subscribeBtn = document.querySelector(".subscribe-btn");

const toggleMenu = document.querySelector('.nav');
const hamburger = document.querySelector('.header-hamburger');

modal.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest(".modal__form-close") || !target.closest(".modal__form")) {
    modal.classList.remove("active");
    body.style.overflowY = "visible";
    modalTitle.textContent = "";
    modalInput.forEach((item) => {
      item.style.display = "block";
    });
  }
});

modalOpenCard.addEventListener("click", (e) => {
  e.preventDefault();
  modalTitle.textContent = "Get your card";
  formBtn.value = 'Send';
  modalInput.forEach((item) => {
    item.style.display = "block";
  });
  modal.classList.add("active");
  body.style.overflowY = "hidden";
});

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.overflowY = "hidden";
  modalTitle.textContent = "Subscribe our newsletter";
  formBtn.value = 'Subscribe';
  modalInput.forEach((item) => {
    if (item.type !== "email") {
      item.style.display = "none";
    }
  });
  modal.classList.add("active");
});

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalTitle.textContent = "Thanks!";
  body.style.overflowY = "visible";
  modal.classList.remove("active");
});


const handlerMenu = () => {
  toggleMenu.classList.toggle('active-menu');
};

hamburger.addEventListener("click", (e) => {
  const target = e.target;
  hamburger.classList.toggle('active-burger');
  handlerMenu();
})