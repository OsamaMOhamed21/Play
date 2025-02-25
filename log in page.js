// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Animate the login form on load
    const loginForm = document.querySelector(".log-in");
    loginForm.style.opacity = "0";
    loginForm.style.transform = "translateY(-20px)";
    setTimeout(() => {
        loginForm.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        loginForm.style.opacity = "1";
        loginForm.style.transform = "translateY(0)";
    }, 200);

    // Handle form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        const username = document.querySelector("input[type='text']").value.trim();
        const password = document.querySelector("input[type='password']").value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
        } else {
            alert("Login successful!");
            form.reset(); // Clear the form
        }
    });

    // Change heading color dynamically
    const heading = document.querySelector("h1");
    const colors = ["#2d6a4f", "#4c9f70", "#ff5733", "#3498db"];
    let colorIndex = 0;

    setInterval(() => {
        heading.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1500); // Change color every 1.5 seconds

    // Button hover effect using JS
    const loginButton = document.querySelector("input[type='submit']");
    loginButton.addEventListener("mouseover", function () {
        loginButton.style.backgroundColor = "#1e4d36";
    });

    loginButton.addEventListener("mouseout", function () {
        loginButton.style.backgroundColor = "#2d6a4f";
    });
});
