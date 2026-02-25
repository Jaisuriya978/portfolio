const toggleBtnDark = document.getElementById("themeToggleDark");

toggleBtnDark.addEventListener("click", () => {
    body.classList.toggle("dark-mode"); 
    if (body.classList.contains("dark-mode")) {
        toggleBtnDark.textContent = "☀";
    } else {
        toggleBtnDark.textContent = "🌙";
    }   
});


const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId); 
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function toggleNavbar() {
    const navbar = document.getElementById("navbarNav");    
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    } else {
        navbar.classList.add("show");
    }   
}




document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contactNumber = document.getElementById("contactNumber").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !contactNumber || !message) {
        alert("Please fill all fields!");
    } else {
        alert("Message sent successfully!");
        this.reset();
    }
});

emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        contact: document.getElementById("contactNumber").value,
        message: document.getElementById("message").value,
    }).then(function(){
        alert("Message Sent Successfully!");
        document.getElementById("contactForm").reset();
    }, function(error){
        alert("Failed to send message");
    });
});


AOS.init({
    duration: 1000,
    once: true
});

AOS.init({
    duration:1000,
    once:true
});