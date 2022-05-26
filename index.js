const input = document.getElementById("qr-text");
const code = document.querySelector(".code");
const btn = document.getElementById("btn");
const message = document.getElementById("message");
const confirmation = document.getElementById("qr-validation");
let data = [];
input.addEventListener("input", (e) => {
  data = e.target.value;
  console.log(data);
});
generateCode = () => {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
  code.src = url;
  // alert(data + "your QR code is ready,");

  confirm();
  data = "";
};
function confirm() {
  confirmation.className = "show";
  setTimeout(() => {
    confirmation.className = confirmation.className.replace("show", "");
  }, 4000);
}

btn.addEventListener("click", generateCode);
