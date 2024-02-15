const notificationctr = document.querySelector(".notification");
const notificationtext = document.querySelector(".notificationtext");
const notificationicon = document.querySelector(".notificationicon");
const emailctr = document.querySelector("#emailctr");
const emailContactForm = document.querySelector("#emailcontactform");
const letstalk = document.querySelector("#letstalk");
const cancelbtn = document.querySelector("#cancel");
const emailformname = document.querySelector("#emailformname");
const emailformemail = document.querySelector("#emailformemail");
const emailformmessage = document.querySelector("#messagectr");

letstalk.addEventListener("click", function (e) {
  emailctr.style.cssText =
    "display:flex !important; flex-direction:column; flex-wrap:no-wrap; align-items:center; justify-content:center;";
});

emailContactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let templateParams = {
    from_name: emailformname.value,
    from_email: emailformemail.value,
    message: emailformmessage.value,
  };

  emailjs.send("service_dtopizi", "template_gila894", templateParams).then(
    function () {
      notificationctr.style.cssText =
        "display:flex !important; flex-direction:row; align-items:center; justify-content:space-between;";

      setTimeout(() => {
        emailContactForm.style.cssText = "display:none !important";
      }, 2500);
    },
    function (error) {
      notificationctr.style.cssText =
        "display:flex !important; flex-direction:row; align-items:center; justify-content:space-between; background-color:#f45434;";
      notificationtext.textContent =
        "I was unable to receive your email, plaese try again";
      notificationicon.setAttribute("src", "../img/cancel.svg");
    }
  );
});

cancelbtn.addEventListener("click", function (e) {
  emailctr.style.cssText = "display:none !important;";
});
