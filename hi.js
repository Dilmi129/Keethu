// Welcome Message
window.onload = function () {
    alert("Welcome to My Portfolio Website!");
};

// Smooth Navbar Active Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});

// Contact Form Validation
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.querySelector('input[type="text"]').value;

    const email =
        document.querySelector('input[type="email"]').value;

    const phone =
        document.querySelector('input[type="tel"]').value;

    if (name === "" || email === "" || phone === "") {

        alert("Please fill all required fields!");

    } else {

        alert("Message Sent Successfully!");

        form.reset();
    }

});

// Scroll To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "15px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.fontSize = "20px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});