//Login button
function signUp(e) {
  console.log("hi");
  e.preventDefault();
  alert("Thank you for Signing Up.");
}
function login(e) {
  e.preventDefault();
}



//custom build offcanavs functionality
function offCanvasRegister(e) {  
  console.log("register");
  
  e.preventDefault();
};
const offcanvas = document.getElementById('customBuildCanvas');
offcanvas.addEventListener('shown.bs.offcanvas', () => {
  const spinnerOverlay = document.getElementById('spinnerOverlay');
  const formContainer = document.getElementById('formContainer');

  // Initial reset on every open
  spinnerOverlay.style.display = 'flex';
  formContainer.style.display = 'none';
  formContainer.classList.remove('show');

  setTimeout(() => {
    spinnerOverlay.style.display = 'none';
    formContainer.style.display = 'block';
    formContainer.classList.add('show');
    console.log(spinnerOverlay.style.display);
  }, 2000); // 2 seconds
});


//Tooltips 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));




//Audio in Gallery
const playButton = document.getElementById("playButton");
const myAudio = document.getElementById("myAudio");

playButton.addEventListener("click", function () {
  myAudio.play();
});
const benzButton = document.getElementById("benzButton");
const benzAudio = document.getElementById("benzAudio");

benzButton.addEventListener("click", function () {
  benzAudio.play();
});
const mustangButton = document.getElementById("mustangButton");
const mustangAudio = document.getElementById("mustangAudio");

mustangButton.addEventListener("click", function () {
  mustangAudio.play();
});


// navbar light and dark transition
const navbar = document.querySelector(".navbar");
const lightSection = document.querySelector(".light-background");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
      } else {
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
      }
    });
  },
  { threshold: 0.65}
);

observer.observe(lightSection);



//submit button in contact section disable until the required fields are all filled.
// Grab elements by their IDs
const form = document.getElementById("myForm");
const submitBtn = document.getElementById("submit");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const carModelField = document.getElementById("carModel");

// Helper function to validate form
function getFormValidationStatus() {
  const nameValue = nameField.value.trim();
  const emailValue = emailField.value.trim();
  const carModelValue = carModelField.value.trim();

  const nameRegex = /^[A-Za-z\s]+$/; 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  return (
    nameValue !== "" &&
    emailValue !== "" &&
    carModelValue !== "" &&
    nameRegex.test(nameValue) &&
    emailRegex.test(emailValue)
  );
}
// Real-time validation
function validateForm() {
  submitBtn.disabled = !getFormValidationStatus();
}

[nameField, emailField, carModelField].forEach((input) => {
  input.addEventListener("input", validateForm);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (getFormValidationStatus()) {
    alert("Drive booked successfully!");
    form.reset();         
    validateForm();       
  } else {
    alert("Please fill all fields correctly (Name: no special chars, Email: valid format).");
  }
});









// car animation for audio

  // Map of button IDs to audio IDs
  const audioMap = [
    { buttonId: "playButton", audioId: "myAudio" },
    { buttonId: "benzButton", audioId: "benzAudio" },
    { buttonId: "mustangButton", audioId: "mustangAudio" }
  ];

  let currentAudio = null;
  let currentButton = null;

  audioMap.forEach(({ buttonId, audioId }) => {
    const button = document.getElementById(buttonId);
    const audio = document.getElementById(audioId);

    button.addEventListener("click", () => {
      // If another audio is playing, stop it and reset its button
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton) currentButton.classList.remove("sensing");
        currentButton = null;
      }

      // Play the new audio
      audio.play();
      button.classList.add("sensing");
      currentAudio = audio;
      currentButton = button;

      // Reset button when audio ends
      audio.onended = () => {
        button.classList.remove("sensing");
        currentAudio = null;
        currentButton = null;
      };
    });
  });


