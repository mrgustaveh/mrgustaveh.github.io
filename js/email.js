const notificationctr = document.querySelector(".notification");
const notificationtext = document.querySelector(".notificationtext");
const notificationicon = document.querySelector(".notificationicon");
const emailctr = document.querySelector("#emailctr");
const emailContactForm = document.querySelector("#emailcontactform");
const letstalk = document.querySelector("#letstalk");
const cancelbtn = document.querySelector("#cancel");

letstalk.addEventListener("click", function (e) {
  emailctr.style.cssText =
    "display:flex !important; flex-direction:column; flex-wrap:no-wrap; align-items:center; justify-content:center;";
});

emailContactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  this.contact_number.value = (Math.random() * 100000) | 0;
  emailjs
    .sendForm("service_dtopizi", "template_gila894", this, "sfaHF3cWO7UusyhQ4")
    .then(
      function () {
        notificationctr.style.cssText =
          "display:flex !important; flex-direction:row; align-items:center; justify-content:space-between;";
      },
      function (error) {
        notificationctr.style.cssText =
          "display:flex !important; flex-direction:row; align-items:center; justify-content:space-between; background-color:#f45434;";
        notificationtext.textContent =
          "I was unable to receive your email, plaese try again";
        notificationicon.setAttribute("src", "../img/cancel.svg");

        console.log("FAILED...", error);
      }
    );
});

cancelbtn.addEventListener("click", function (e) {
  emailctr.style.cssText = "display:none !important;";
});
