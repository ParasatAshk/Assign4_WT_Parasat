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

  // Initialize Part 3 Form (Task 4)
  initTask4RegistrationForm();
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

// ============================================================================
// PART 3: TASK 4 - ADVANCED REGISTRATION FORM VALIDATION
// ============================================================================

function initTask4RegistrationForm() {
  const form = document.getElementById("registrationForm");
  if (!form) return;

  const firstNameInput = document.getElementById("regFirstName");
  const lastNameInput = document.getElementById("regLastName");
  const emailInput = document.getElementById("regEmail");
  const passwordInput = document.getElementById("regPassword");
  const confirmPasswordInput = document.getElementById("regConfirmPassword");
  const confirmFeedback = document.getElementById("confirmPasswordFeedback");

  const countrySelect = document.getElementById("regCountry");
  const termsCheckbox = document.getElementById("regTerms");

  const genderRadios = document.querySelectorAll('input[name="gender"]');
  const genderFeedbackValid = document.getElementById("genderFeedbackValid");
  const genderFeedbackInvalid = document.getElementById("genderFeedbackInvalid");

  const hobbyCheckboxes = document.querySelectorAll(".hobby-checkbox");
  const hobbiesFeedbackValid = document.getElementById("hobbiesFeedbackValid");
  const hobbiesFeedbackInvalid = document.getElementById("hobbiesFeedbackInvalid");

  const alertBox = document.getElementById("regAlert");
  const resetBtn = document.getElementById("regResetBtn");
  const demoValidBtn = document.getElementById("regDemoValidBtn");
  const demoInvalidBtn = document.getElementById("regDemoInvalidBtn");

  // Validate First Name
  function validateFirstName() {
    const val = firstNameInput.value.trim();
    if (val.length >= 2) {
      markValid(firstNameInput);
      return true;
    } else {
      markInvalid(firstNameInput);
      return false;
    }
  }

  // Validate Last Name
  function validateLastName() {
    const val = lastNameInput.value.trim();
    if (val.length >= 2) {
      markValid(lastNameInput);
      return true;
    } else {
      markInvalid(lastNameInput);
      return false;
    }
  }

  // Validate Email
  function validateEmail() {
    if (isValidEmail(emailInput.value)) {
      markValid(emailInput);
      return true;
    } else {
      markInvalid(emailInput);
      return false;
    }
  }

  // Validate Password
  function validatePassword() {
    const val = passwordInput.value;
    if (val.length >= 8) {
      markValid(passwordInput);
      return true;
    } else {
      markInvalid(passwordInput);
      return false;
    }
  }

  // Validate Confirm Password (Password Matching)
  function validateConfirmPassword() {
    const pass = passwordInput.value;
    const confirm = confirmPasswordInput.value;

    if (!confirm) {
      markInvalid(confirmPasswordInput);
      confirmFeedback.innerHTML = `<i class="bi bi-exclamation-circle me-1"></i> Please confirm your password.`;
      return false;
    }

    if (pass !== confirm) {
      markInvalid(confirmPasswordInput);
      confirmFeedback.innerHTML = `<i class="bi bi-exclamation-circle me-1"></i> Passwords do not match.`;
      return false;
    }

    markValid(confirmPasswordInput);
    return true;
  }

  // Validate Gender Radio
  function validateGender() {
    const isSelected = Array.from(genderRadios).some((radio) => radio.checked);
    if (isSelected) {
      if (genderFeedbackValid) genderFeedbackValid.classList.remove("d-none");
      if (genderFeedbackInvalid) genderFeedbackInvalid.classList.add("d-none");
      return true;
    } else {
      if (genderFeedbackValid) genderFeedbackValid.classList.add("d-none");
      if (genderFeedbackInvalid) genderFeedbackInvalid.classList.remove("d-none");
      return false;
    }
  }

  // Validate Country
  function validateCountry() {
    if (countrySelect.value && countrySelect.value !== "") {
      markValid(countrySelect);
      return true;
    } else {
      markInvalid(countrySelect);
      return false;
    }
  }

  // Validate Hobbies (at least one checkbox)
  function validateHobbies() {
    const isSelected = Array.from(hobbyCheckboxes).some((cb) => cb.checked);
    if (isSelected) {
      if (hobbiesFeedbackValid) hobbiesFeedbackValid.classList.remove("d-none");
      if (hobbiesFeedbackInvalid) hobbiesFeedbackInvalid.classList.add("d-none");
      return true;
    } else {
      if (hobbiesFeedbackValid) hobbiesFeedbackValid.classList.add("d-none");
      if (hobbiesFeedbackInvalid) hobbiesFeedbackInvalid.classList.remove("d-none");
      return false;
    }
  }

  // Validate Terms
  function validateTerms() {
    if (termsCheckbox.checked) {
      markValid(termsCheckbox);
      return true;
    } else {
      markInvalid(termsCheckbox);
      return false;
    }
  }

  // Real-time Event Listeners
  firstNameInput.addEventListener("input", function () {
    if (firstNameInput.classList.contains("is-invalid") || firstNameInput.classList.contains("is-valid")) {
      validateFirstName();
    }
  });

  lastNameInput.addEventListener("input", function () {
    if (lastNameInput.classList.contains("is-invalid") || lastNameInput.classList.contains("is-valid")) {
      validateLastName();
    }
  });

  emailInput.addEventListener("input", function () {
    if (emailInput.classList.contains("is-invalid") || emailInput.classList.contains("is-valid")) {
      validateEmail();
    }
  });

  passwordInput.addEventListener("input", function () {
    if (passwordInput.classList.contains("is-invalid") || passwordInput.classList.contains("is-valid")) {
      validatePassword();
    }
    // Re-check confirmation if confirmation was touched
    if (confirmPasswordInput.value.length > 0) {
      validateConfirmPassword();
    }
  });

  confirmPasswordInput.addEventListener("input", function () {
    if (confirmPasswordInput.classList.contains("is-invalid") || confirmPasswordInput.classList.contains("is-valid")) {
      validateConfirmPassword();
    }
  });

  countrySelect.addEventListener("change", function () {
    validateCountry();
  });

  genderRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      validateGender();
    });
  });

  hobbyCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      validateHobbies();
    });
  });

  termsCheckbox.addEventListener("change", function () {
    validateTerms();
  });

  // Handle Registration Form Submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isFirstValid = validateFirstName();
    const isLastValid = validateLastName();
    const isEmailOk = validateEmail();
    const isPassOk = validatePassword();
    const isConfirmOk = validateConfirmPassword();
    const isGenderOk = validateGender();
    const isCountryOk = validateCountry();
    const isHobbiesOk = validateHobbies();
    const isTermsOk = validateTerms();

    const isFormValid =
      isFirstValid &&
      isLastValid &&
      isEmailOk &&
      isPassOk &&
      isConfirmOk &&
      isGenderOk &&
      isCountryOk &&
      isHobbiesOk &&
      isTermsOk;

    if (isFormValid) {
      const selectedGender = Array.from(genderRadios).find((r) => r.checked)?.value || "Not specified";
      const selectedHobbies = Array.from(hobbyCheckboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value)
        .join(", ");

      alertBox.className = "alert alert-success shadow-sm mb-4";
      alertBox.innerHTML = `
        <div class="d-flex align-items-center mb-2">
          <i class="bi bi-check-circle-fill fs-4 me-2"></i>
          <h5 class="alert-heading mb-0 fw-bold">Registration Successful!</h5>
        </div>
        <p class="mb-2">Your account has been created with the following details:</p>
        <ul class="mb-2 small">
          <li><strong>Name:</strong> ${firstNameInput.value.trim()} ${lastNameInput.value.trim()}</li>
          <li><strong>Email:</strong> ${emailInput.value.trim()}</li>
          <li><strong>Gender:</strong> ${selectedGender}</li>
          <li><strong>Country:</strong> ${countrySelect.value}</li>
          <li><strong>Hobbies:</strong> ${selectedHobbies}</li>
        </ul>
        <hr>
        <p class="mb-0 small text-success-emphasis">
          <i class="bi bi-info-circle me-1"></i> All Task 4 client-side validation rules passed successfully.
        </p>
      `;
      alertBox.classList.remove("d-none");
      alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alertBox.className = "alert alert-danger shadow-sm d-flex align-items-center mb-4";
      alertBox.innerHTML = `
        <i class="bi bi-exclamation-triangle-fill fs-4 me-2"></i>
        <div>
          <strong>Registration Incomplete!</strong> Please review and correct the highlighted fields in red below.
        </div>
      `;
      alertBox.classList.remove("d-none");
      alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  // Handle Form Reset
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();

      clearValidation(firstNameInput);
      clearValidation(lastNameInput);
      clearValidation(emailInput);
      clearValidation(passwordInput);
      clearValidation(confirmPasswordInput);
      clearValidation(countrySelect);
      clearValidation(termsCheckbox);

      if (genderFeedbackValid) genderFeedbackValid.classList.add("d-none");
      if (genderFeedbackInvalid) genderFeedbackInvalid.classList.add("d-none");

      if (hobbiesFeedbackValid) hobbiesFeedbackValid.classList.add("d-none");
      if (hobbiesFeedbackInvalid) hobbiesFeedbackInvalid.classList.add("d-none");

      alertBox.classList.add("d-none");
      alertBox.innerHTML = "";
    });
  }

  // Demo Button: Fill Valid Registration Data
  if (demoValidBtn) {
    demoValidBtn.addEventListener("click", function () {
      firstNameInput.value = "Parasat";
      lastNameInput.value = "Ashkarbekova";
      emailInput.value = "parasat@example.com";
      passwordInput.value = "StrongPass2026";
      confirmPasswordInput.value = "StrongPass2026";

      // Select Gender Female
      const femaleRadio = document.getElementById("genderFemale");
      if (femaleRadio) femaleRadio.checked = true;

      // Select Country
      countrySelect.value = "Kazakhstan";

      // Select Hobbies Coding & Traveling
      const codingCb = document.getElementById("hobbyCoding");
      const travelCb = document.getElementById("hobbyTraveling");
      if (codingCb) codingCb.checked = true;
      if (travelCb) travelCb.checked = true;

      termsCheckbox.checked = true;

      // Trigger all validations to showcase green feedback
      validateFirstName();
      validateLastName();
      validateEmail();
      validatePassword();
      validateConfirmPassword();
      validateGender();
      validateCountry();
      validateHobbies();
      validateTerms();

      alertBox.className = "alert alert-success shadow-sm mb-4";
      alertBox.innerHTML = `
        <div class="d-flex align-items-center">
          <i class="bi bi-check2-all fs-4 me-2"></i>
          <div><strong>Demo Valid:</strong> Compliant registration form data filled and passed validation. Ready to submit!</div>
        </div>
      `;
      alertBox.classList.remove("d-none");
    });
  }

  // Demo Button: Fill Invalid Registration Data
  if (demoInvalidBtn) {
    demoInvalidBtn.addEventListener("click", function () {
      firstNameInput.value = "P"; // Too short (< 2)
      lastNameInput.value = ""; // Empty
      emailInput.value = "notanemail"; // Invalid email format
      passwordInput.value = "pass"; // Too short (< 8)
      confirmPasswordInput.value = "different"; // Does not match

      // Uncheck all gender radios
      genderRadios.forEach((r) => (r.checked = false));

      // Reset Country to empty
      countrySelect.value = "";

      // Uncheck all hobbies
      hobbyCheckboxes.forEach((cb) => (cb.checked = false));

      termsCheckbox.checked = false;

      // Trigger all validations to showcase red feedback
      validateFirstName();
      validateLastName();
      validateEmail();
      validatePassword();
      validateConfirmPassword();
      validateGender();
      validateCountry();
      validateHobbies();
      validateTerms();

      alertBox.className = "alert alert-danger shadow-sm mb-4";
      alertBox.innerHTML = `
        <div class="d-flex align-items-center">
          <i class="bi bi-exclamation-diamond-fill fs-4 me-2"></i>
          <div><strong>Demo Invalid:</strong> Invalid sample data populated to test all error feedback indicators.</div>
        </div>
      `;
      alertBox.classList.remove("d-none");
    });
  }
}
