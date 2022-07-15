const btnBuyTickets = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".modal");
const ModalClose = document.querySelector(".modal-close");
const FooterClose = document.querySelector(".footer-modal-close");

function showModal() {
  open.classList.add("modal");
}

function closeModal() {
  open.classList.remove("modal");
}
for (const btnBuyTicket of btnBuyTickets) {
  btnBuyTicket.addEventListener("click", showModal);
}

for (const btnBuyTicket of btnBuyTickets) {
    ModalClose.addEventListener("click", closeModal);
}
for (const btnBuyTicket of btnBuyTickets) {
    FooterClose.addEventListener("click", closeModal);
}

