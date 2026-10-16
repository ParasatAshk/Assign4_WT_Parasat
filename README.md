# Web Technologies &bull; Assignment #4: Forms and Validation

**Student:** Parasat Ashkarbekova  
**Course:** Web Technologies (Front-End Development)  
**Topic:** Forms, Input Validation, and Bootstrap 5 Integration  
**Repository:** [https://github.com/ParasatAshk/Assign4_WT_Parasat](https://github.com/ParasatAshk/Assign4_WT_Parasat)  
**GitHub Pages:** [ https://parasatashk.github.io/Assign4_WT_Parasat/ )

---

## 📌 Project Overview

This project was developed for **Assignment #4** of the Web Technologies course at Astana IT University. The objective is to understand how to build accessible, user-friendly forms using semantic HTML5, style them with the modern **Bootstrap 5.3** framework, and implement robust validation mechanisms across three core tiers:
1. **Native HTML5 built-in validation** (browser-level constraints).
2. **Bootstrap validation styling** (`is-valid` and `is-invalid` visual feedback classes).
3. **Advanced client-side JavaScript validation** (password confirmation, grouped inputs, real-time feedback, and dynamic alerts).

---

## 🗂 Project Structure

```text
Assign4_WT_Parasat/
├── .gitignore               # Standard Git ignore file
├── index.html               # Home page with project info, student details, and task cards
├── part1.html               # Part 1: Basic HTML Forms (Task 0 & Task 1)
├── part2.html               # Part 2: Bootstrap Forms (Task 2 & Task 3)
├── part3.html               # Part 3: Advanced Registration Form (Task 4)
├── css/
│   └── style.css            # Custom CSS for UI polish, cards, shadows, and responsive layout
├── js/
│   └── main.js              # Vanilla ES6 JavaScript form validation logic and event handlers
└── README.md                # Project documentation and defense preparation guide
```

---

## 🚀 Tasks Breakdown

### 📄 Part 1: Basic HTML Forms (`part1.html`)

* **Task 0: Simple Contact Form**
  * Built using semantic HTML tags: `<form>`, `<fieldset>`, `<legend>`, and `<label>`.
  * Every input (`name`, `email`, `message`) has an explicit `<label for="...">` linked to the input's `id` for full accessibility.
  * Standard submit button without custom styling to illustrate the default HTML baseline.

* **Task 1: Form with Native HTML5 Validation**
  * Enhances the contact form using built-in HTML5 validation attributes:
    * `required`: Prevents form submission when empty.
    * `type="email"`: Verifies email format syntax natively.
    * `minlength="3"` and `maxlength="50"`: Controls minimum and maximum text length.
    * `minlength="10"`: Ensures message has sufficient length.
  * Demonstrates standard browser validation popups/tooltips without any JavaScript.

---

### 🎨 Part 2: Bootstrap Forms (`part2.html`)

* **Task 2: Bootstrap Form Styling**
  * Recreates the contact form utilizing **Bootstrap 5.3 form classes**:
    * `.form-label` for uniform typography.
    * `.form-control` and `.form-select` for modern styling and focus states.
    * `.form-text` for helper instructions (e.g. privacy note, guidelines).
  * Uses the **Bootstrap Grid system** (`row`, `col-12`) to arrange fields neatly.

* **Task 3: Bootstrap Validation Styles**
  * Employs Bootstrap's visual validation feedback classes:
    * `.is-valid`: Adds a green border and checkmark icon.
    * `.is-invalid`: Adds a red border and exclamation icon.
    * `.valid-feedback`: Displays *"Looks good!"* message when field is valid.
    * `.invalid-feedback`: Displays explicit error messages below fields.
  * Controlled via vanilla JavaScript:
    * Intercepts `submit` event with `event.preventDefault()`.
    * Validates field values (name length, email regex, message length, terms checkbox).
    * Provides real-time validation on user typing (`input` and `change` listeners).
    * Includes interactive **"Fill Valid"** and **"Fill Invalid"** demo buttons for quick evaluation during practice sessions.

---

### 🛡️ Part 3: Advanced Form Project (`part3.html`)

* **Task 4: User Registration Form**
  * A full, responsive account registration form including:
    * **First Name & Last Name** (text inputs, minimum 2 characters).
    * **Email Address** (email input with icon add-on).
    * **Password & Confirm Password** (minimum 8 characters, password matching).
    * **Gender** (radio buttons with `.form-check-inline`).
    * **Hobbies** (multiple checkboxes with `.form-check-inline`, requiring at least one selection).
    * **Country** (select dropdown with disabled placeholder option).
    * **Terms & Conditions** agreement checkbox.
    * **Submit & Reset Buttons** (reset clears values and removes validation state classes).
  * **Responsive Grid:** 2 columns on desktop (`col-md-6`) and 1 column on mobile (`col-12`).
  * **Custom JavaScript Validation:**
    * Validates password match: `password === confirmPassword`. If they mismatch, an explicit error notice is shown.
    * Validates grouped elements (at least one radio selected, at least one checkbox selected).
    * On successful submission, displays an informative success banner detailing user submission info.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic elements (`<form>`, `<label>`, `<input>`, `<textarea>`, `<select>`, `<fieldset>`).
* **CSS3:** Custom styles, card hover transitions, responsive containers.
* **Bootstrap 5.3 (CDN):** Responsive grid, form components, validation feedback classes, icons (`bootstrap-icons`).
* **Vanilla JavaScript (ES6):** Event listeners, regex validation, DOM manipulation (`classList.add`, `classList.remove`), form reset handling.

---

## 💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ParasatAshk/Assign4_WT_Parasat.git
   cd Assign4_WT_Parasat
   ```

2. **Open in browser:**
   * Directly open `index.html` in your web browser:
     ```bash
     open index.html
     ```
   * Or use a local web server (e.g. VS Code Live Server or Python):
     ```bash
     python3 -m http.server 8000
     ```
     Then navigate to `http://localhost:8000`.

---

## 🎓 Oral Defense Preparation Notes

Key concepts implemented in this assignment:

1. **Why link `<label>` and `<input>` with `for` and `id`?**  
   It improves accessibility for screen readers and allows users to focus/toggle inputs simply by clicking on the label text.

2. **Difference between HTML5 validation and JavaScript validation:**  
   * *HTML5 validation:* Handled entirely by the browser engine (declarative attributes like `required`, `pattern`). Fast and requires no code, but appearance differs across browsers.  
   * *JavaScript validation:* Highly customizable, allows complex business rules (e.g., password matching, cross-field dependency), and controls styling using classes like Bootstrap's `.is-valid` and `.is-invalid`.

3. **Role of `event.preventDefault()`:**  
   Stops the default form submission action (which would reload the page or navigate away), allowing JavaScript to validate inputs and display custom visual feedback asynchronously.

4. **How Bootstrap feedback classes work:**  
   Adding `.is-valid` or `.is-invalid` to `.form-control` tells Bootstrap CSS to display green or red border styling and make adjacent `.valid-feedback` or `.invalid-feedback` containers visible via `display: block`.

---

**Developed with ❤️ by Parasat Ashkarbekova**
