const sections = document.querySelectorAll("section");
const element = document.querySelectorAll(".navElement");
window.onscroll = () => {
    var current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute("id");
        }
    });
    element.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active")
        }
    })
}
var tea = document.querySelector(".tea");
tea.onclick = () => {
    scrollTo(0, 0)
}
var named = "";
var email = "";
var message = "";
var errMessage = document.querySelector(".alert");
var errReply = document.querySelector(".errReply");
document.querySelector(".usContact").onclick = () => {
    named = document.querySelector("#named").value;
    email = document.querySelector("#email").value;
    message = document.querySelector("#message").value;
    if (named.length == 0) {
        named = "";
        document.querySelector("#named").value = "";
        errMessage.style.display = "flex";
        errReply.innerText = "Please Enter Your Name..."
        disableText();
    } else if (named.length != 0 && named.length <= 3) {
        named = "";
        errMessage.style.display = "flex";
        errReply.innerText = "Name is too short..."
        document.querySelector("#named").value = "";
        disableText();
    } else if (named.length > 3 && email.length == 0) {

        named = named;
        email = "";
        document.querySelector("#email").value = "";
        errMessage.style.display = "flex";
        errReply.innerText = "Please enter your email..."
        disableText();
    } else if (email.length != 0) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            email = email;
        } else {
            email = "";
            email = document.querySelector("#email").value = "";
            errMessage.style.display = "flex";
            errReply.innerText = "Invalid email..."
            disableText();
        }
    };
    if (named != "" && email != "") {
        formSubmitted();
    }
}
document.querySelector(".close").onclick = () => {
    errMessage.style.display = "none";
    enableText();
}
disableText = () => {
    document.querySelector("#named").disabled = true;
    document.querySelector("#email").disabled = true;
    document.querySelector("#message").disabled = true;
}
enableText = () => {
    document.querySelector("#named").disabled = false;
    document.querySelector("#email").disabled = false;
    document.querySelector("#message").disabled = false;
}
formSubmitted = () => {
    errMessage.style.display = "flex";
    errReply.innerText = "We will contact you later.."
    document.querySelector("#named").value = "";
    email = document.querySelector("#email").value = "";
    message = document.querySelector("#message").value = "";
}