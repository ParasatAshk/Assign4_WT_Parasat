/**
 * Web Technologies - Assignment 4: Forms and Validation
 * Student: Parasat Ashkarbekova
 * 
 * Description:
 * Vanilla JavaScript (ES6) functions to handle form validation
 * using native DOM methods and Bootstrap 5 validation classes (is-valid / is-invalid).
 */

document.addEventListener("DOMContentLoaded", function () {
  console.log("Assignment 4: Main JavaScript script loaded.");

  // Initialize Part 2 Form (Task 3)
  initTask3ContactForm();
});

// ============================================================================
// SHARED VALIDATION HELPERS
// ============================================================================

/**
 * Validates basic email pattern.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Marks an input element as valid using Bootstrap 5 classes.
 * @param {HTMLElement} element
 */
function markValid(element) {
  element.classList.remove("is-invalid");
  element.classList.add("is-valid");
}

/**
 * Marks an input element as invalid using Bootstrap 5 classes.
 * @param {HTMLElement} element
 */
function markInvalid(element) {
  element.classList.remove("is-valid");
  element.classList.add("is-invalid");
}

/**
 * Clears both valid and invalid classes from an element.
 * @param {HTMLElement} element
 */
function clearValidation(element) {
  element.classList.remove("is-valid", "is-invalid");
}

// ============================================================================
// PART 2: TASK 3 - BOOTSTRAP CONTACT FORM VALIDATION
// ============================================================================

function initTask3ContactForm() {
  const form = document.getElementById("task3Form");
  if (!form) return;

  const nameInput = document.getElementById("task3Name");
  const emailInput = document.getElementById("task3Email");
  const messageInput = document.getElementById("task3Message");
  const termsInput = document.getElementById("task3Terms");
  const alertBox = document.getElementById("part2Alert");

  const resetBtn = document.getElementById("task3ResetBtn");
  const demoValidBtn = document.getElementById("task3DemoValidBtn");
  const demoInvalidBtn = document.getElementById("task3DemoInvalidBtn");

  // Validate single field: Name
  function validateName() {
    const val = nameInput.value.trim();
    if (val.length >= 3) {
      markValid(nameInput);
      return true;
    } else {
      markInvalid(nameInput);
      return false;
    }
  }

  // Validate single field: Email
  function validateEmail() {
    if (isValidEmail(emailInput.value)) {
      markValid(emailInput);
      return true;
    } else {
      markInvalid(emailInput);
      return false;
    }
  }

  // Validate single field: Message
  function validateMessage() {
    const val = messageInput.value.trim();
    if (val.length >= 10) {
      markValid(messageInput);
      return true;
    } else {
      markInvalid(messageInput);
      return false;
    }
  }

  // Validate terms checkbox
  function validateTerms() {
    if (termsInput.checked) {
      markValid(termsInput);
      return true;
    } else {
      markInvalid(termsInput);
      return false;
    }
  }

  // Real-time input listeners to update validation on typing
  nameInput.addEventListener("input", function () {
    if (nameInput.classList.contains("is-invalid") || nameInput.classList.contains("is-valid")) {
      validateName();
    }
  });

  emailInput.addEventListener("input", function () {
    if (emailInput.classList.contains("is-invalid") || emailInput.classList.contains("is-valid")) {
      validateEmail();
    }
  });

  messageInput.addEventListener("input", function () {
    if (messageInput.classList.contains("is-invalid") || messageInput.classList.contains("is-valid")) {
      validateMessage();
    }
  });

  termsInput.addEventListener("change", function () {
    if (termsInput.classList.contains("is-invalid") || termsInput.classList.contains("is-valid")) {
      validateTerms();
    }
  });

  // Handle Form Submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    const isTermsValid = validateTerms();

    const isAllValid = isNameValid && isEmailValid && isMessageValid && isTermsValid;

    if (isAllValid) {
      alertBox.className = "alert alert-success d-flex align-items-center mb-3";
      alertBox.innerHTML = `
        <i class="bi bi-check-circle-fill fs-5 me-2"></i>
        <div><strong>Success!</strong> Form passed all validation checks. Your message is ready to send.</div>
      `;
      alertBox.classList.remove("d-none");
    } else {
      alertBox.className = "alert alert-danger d-flex align-items-center mb-3";
      alertBox.innerHTML = `
        <i class="bi bi-exclamation-triangle-fill fs-5 me-2"></i>
        <div><strong>Error:</strong> Please fix the highlighted fields before submitting.</div>
      `;
      alertBox.classList.remove("d-none");
    }
  });

  // Reset Button
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      clearValidation(nameInput);
      clearValidation(emailInput);
      clearValidation(messageInput);
      clearValidation(termsInput);
      alertBox.classList.add("d-none");
      alertBox.innerHTML = "";
    });
  }

  // Demo: Fill Valid Data
  if (demoValidBtn) {
    demoValidBtn.addEventListener("click", function () {
      nameInput.value = "Parasat Ashkarbekova";
      emailInput.value = "parasat@example.com";
      messageInput.value = "Hello! This is a valid test message for Web Tech Assignment 4.";
      termsInput.checked = true;

      // Trigger validation
      validateName();
      validateEmail();
      validateMessage();
      validateTerms();

      alertBox.className = "alert alert-success d-flex align-items-center mb-3";
      alertBox.innerHTML = `
        <i class="bi bi-check-circle-fill fs-5 me-2"></i>
        <div><strong>Demo Valid:</strong> Sample compliant data populated and verified.</div>
      `;
      alertBox.classList.remove("d-none");
    });
  }

  // Demo: Fill Invalid Data
  if (demoInvalidBtn) {
    demoInvalidBtn.addEventListener("click", function () {
      nameInput.value = "Pa"; // Too short
      emailInput.value = "invalid-email-address"; // Invalid email format
      messageInput.value = "Hi"; // Too short
      termsInput.checked = false; // Not checked

      // Trigger validation
      validateName();
      validateEmail();
      validateMessage();
      validateTerms();

      alertBox.className = "alert alert-danger d-flex align-items-center mb-3";
      alertBox.innerHTML = `
        <i class="bi bi-exclamation-triangle-fill fs-5 me-2"></i>
        <div><strong>Demo Invalid:</strong> Invalid sample data populated to demonstrate error states.</div>
      `;
      alertBox.classList.remove("d-none");
    });
  }
}
