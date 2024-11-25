let currentStep = 0; 
const totalSteps = 4;

const nxtButton = document.getElementById("next-button");
const prevButton = document.getElementById("previous-button");
const sumarizeContent = document.querySelector(".sumarize");

let contentObj = {
    0: "Add contact details for further communication",
    1: "Add shipping address for successful delivery",
    2: "Complete payment to complete the order",
    3: "Ready to get delivered",
    4: "Order Delivered Successfully 🎉"
};

function updateUI() {
    // Update button states
    if (currentStep <= 0) {
        prevButton.disabled = true;
        prevButton.classList.add("disabled");
        prevButton.classList.remove("active");
    } else {
        prevButton.disabled = false;
        prevButton.classList.add("active");
        prevButton.classList.remove("disabled");
    }

    if (currentStep === totalSteps) {
        nxtButton.textContent = "Finish";
        nxtButton.disabled = true;
        nxtButton.classList.add("disabled", "finish");
        nxtButton.classList.remove("active");
    } else {
        nxtButton.textContent = "Next";
        nxtButton.disabled = false;
        nxtButton.classList.add("active");
        nxtButton.classList.remove("disabled", "finish");
    }

    // Update step and progress line styles
    const steps = document.querySelectorAll(".step");
    const lines = document.querySelectorAll(".progress-line");

    steps.forEach((step, index) => {
        if (index + 1 <= currentStep) {
            step.classList.add("success-step");
            step.classList.remove("step-color", "step-current");
            step.innerHTML = `<span>&#10003;</span>`; // Add the checkmark
        } else {
            step.classList.add("step-color");
            step.classList.remove("success-step", "step-current");
            step.textContent = `${index + 1}`; // Reset the number
        }
    });

    if (currentStep < steps.length) {
        steps[currentStep].classList.add("step-current");
        steps[currentStep].classList.remove("step-color", "success-step");
    }

    lines.forEach((line, index) => {
        if (index < currentStep - 1) {
            line.classList.add("line-completed");
            line.classList.remove("line-default");
        } else {
            line.classList.add("line-default");
            line.classList.remove("line-completed");
        }
    });

    // Update summary content
    sumarizeContent.textContent = contentObj[currentStep];
}

nxtButton.addEventListener("click", () => {
    if (currentStep < totalSteps) {
        currentStep++;
        updateUI();
    }
});

prevButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateUI();
    }
});

// Initialize the UI on load
updateUI();
