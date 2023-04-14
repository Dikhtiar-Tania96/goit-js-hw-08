var throttle = require("lodash.throttle");

const storageKey = "feedback-form-state";

const value = {
  feedbackForm: document.querySelector(".feedback-form"),
  emailInput: document.querySelector('[name="email"]'),
  messageInput: document.querySelector('[name="message"]'),
};

value.feedbackForm.addEventListener("input", throttle(onFormInput, 500));
value.feedbackForm.addEventListener("submit", onSubmitBtn);

const formData = {
  email: "",
  message: "",
};

console.log(formData);
saveFormData();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function onSubmitBtn(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(storageKey)

  console.log(formData);
  formData.email = "";
  formData.message = "";
}

function saveFormData() {
  try {
    const savedData = localStorage.getItem(storageKey);

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      value.emailInput.value = parsedData.email;
      value.messageInput.value = parsedData.message;

      formData.email = parsedData.email;
      formData.message = parsedData.message;
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}