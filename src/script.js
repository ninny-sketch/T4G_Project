console.log("JavaScript is working!");
console.log("JavaScript is working!");

// ===========================
// HAMBURGER MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

}

// ===========================
// PROJECT FILTER
// ===========================

const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if (filterBtns.length > 0) {

    filterBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            filterBtns.forEach(button =>
                button.classList.remove("active-btn")
            );

            btn.classList.add("active-btn");

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {

                if (
                    filter === "all" ||
                    card.dataset.category === filter
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

}

// ===========================
// CONTACT FORM
// ===========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "") {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}

// ===========================
// LOGIN FORM
// ===========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        if (email === "" || password === "") {
            alert("Please enter your email and password.");
            return;
        }

        alert("Login successful!");

        loginForm.reset();

    });

}

// ===========================
// SIGNUP FORM
// ===========================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;
        const confirm = document.getElementById("confirmPassword").value;
        const terms = document.getElementById("terms").checked;

        if (!name || !email || !password || !confirm) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirm) {
            alert("Passwords do not match.");
            return;
        }

        if (!terms) {
            alert("Please agree to the Terms of Service and Privacy Policy.");
            return;
        }

        alert("Account created successfully!");

        signupForm.reset();

    });

}