// toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark");
}

let images = [
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg",
    "images/img-4.jpg",
    "images/img-6.jpg",
    "images/img-7.jpg",
    "images/img-8.jpg",
    "images/img-9.jpg",
    "images/img-10.jpg"
];

let currentIndex = 0;
function showImage() {
    document.getElementById("wildlifeImage").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

setInterval(nextImage, 5000);

window.onload = showImage;

// Event listeners for buttons
let txtArea = document.getElementById("comments");
txtArea.addEventListener("focus", function() {
    if (txtArea.value === "Enter your comments here...") {
        txtArea.value = "";
    }
});
txtArea.addEventListener("blur", function() {
    if (txtArea.value.trim() === "") {
        txtArea.value = "Enter your comments here...";
    }   
});

// Form Validation
document.getElementById("wildlifeForm").onsubmit = function(event) {
    event.preventDefault();


    // fetch form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let species = document.getElementById("species").value;
    let comments = document.getElementById("comments").value.trim();

    // clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("speciesError").innerText = "";
    document.getElementById("commentsError").innerText = "";
    let isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }   

    // Species validation
    if (species === "") {
        document.getElementById("speciesError").innerText = "Please input atleast 3 species seen.";
        isValid = false;
    } else if (species.length < 3) {
        document.getElementById("speciesError").innerText = "Please input atleast 3 species seen.";
        isValid = false;
    }

    // Comments validation
    if (comments === "" || comments === "Enter your comments here...") {
        document.getElementById("commentsError").innerText = "Comments are required.";
    } else if (comments.length < 10) {
        document.getElementById("commentsError").innerText = "Comments must be at least 10 characters.";
        isValid = false;
    }
    
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("wildlifeForm").reset();
        // Here you can proceed with form submission (e.g., send data to server)
    }
}
