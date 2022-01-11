var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input")
}

    const localStorageEmail = localStorage.getItem("feedback-form-state-email");
    const localStorageTextArea = localStorage.getItem("feedback-form-state");

function onStartCheckEmail() {
    if (localStorageEmail === " ") {
        console.log("empty");
    } else {
        console.log("not empty");
        refs.input.value = localStorageEmail;
        }
};
    
function onStartCheckTextArea() {
    if (localStorageTextArea === " ") {
        console.log("empty");
    } else {
        console.log("not empty");
        refs.textarea.value = localStorageTextArea;
        }
};

onStartCheckEmail();
onStartCheckTextArea();
    

refs.form.addEventListener("submit", onBtmSubmit);

function onBtmSubmit(e) {
    e.preventDefault();

    const feedBackData = { email: refs.textarea.value, massage: refs.input.value }
    console.log(feedBackData);

    refs.textarea.value = " ";
    refs.input.value = " ";

    localStorage.setItem("feedback-form-state", " ");
    localStorage.setItem("feedback-form-state-email", " ");
}

refs.textarea.addEventListener("input", throttle(onPressBtn, 1000));

function onPressBtn() {
    
    const inputText = refs.textarea.value;

    localStorage.setItem("feedback-form-state", inputText);
}

refs.input.addEventListener("input", throttle(onEmailInputPress, 1000));

function onEmailInputPress() {
    const inputText = refs.input.value;

    localStorage.setItem("feedback-form-state-email", inputText);
};