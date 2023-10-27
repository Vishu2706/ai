let input = document.getElementById("que");
let btn = document.getElementById("btn");
let display = document.getElementById("change");
let speech = new SpeechSynthesisUtterance();

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "Hi") {
    display.innerHTML = "Hey My Name Is Zoro. Nice To Meet You!";
    sound("Hey My Name Is Zoro. Nice To Meet You!");
  } else if (input.value === "Youtube " || input.value === "youtube ") {
    window.open("https://www.youtube.com/");
    sound("Opening youtube");
  } else if (
    input.value === "Instagram " ||
    input.value === "insta" ||
    input.value === "instagram " ||
    input.value === "INSTAGRAM "
  ) {
    window.open("https://www.instagram.com/");
    sound("Opening Instagram");
  } else if (
    input.value === "Twitter " ||
    input.value === "twitter " ||
    input.value === "TWITTER "
  ) {
    window.open("https://twitter.com/?lang=en");
    sound("Opening twitter");
  } else if (
    input.value === "wikipedia " ||
    input.value === "WIKIPEDIA " ||
    input.value === "Wikipedia "
  ) {
    window.open("https://en.wikipedia.org/wiki/Main_Page");
    sound("Opening wikipdeia");
  } else if (
    input.value === "chatgpt " ||
    input.value === "CHATGPT " ||
    input.value === "Chatgpt "
  ) {
    window.open("https://chat.openai.com/auth/login");
    sound("Opening ChatGpt");
  } else if (
    input.value === "quora " ||
    input.value === "QUORA " ||
    input.value === "Quora "
  ) {
    window.open("https://www.quora.com/Where-is-Quoras-home-page");
    sound("Opening Quora");
  } else if (
    input.value === "bard " ||
    input.value === "BARD " ||
    input.value === "Bard "
  ) {
    window.open(
      "https://bard.google.com/?utm_source=sem&utm_medium=paid-media&utm_campaign=q4enIN_sem7"
    );
    sound("Opening Google Bard");
  } else if (
    input.value === "google " ||
    input.value === "GOOGLE " ||
    input.value === "Google "
  ) {
    window.open("https://www.google.com/");
    sound("Opening Google");
  } else if (
    input.value === "amazon " ||
    input.value === "AMAZON " ||
    input.value === "Amazon "
  ) {
    window.open("https://www.amazon.in/");
    sound("Opening Google");
  } else if (
    input.value === "jiomart " ||
    input.value === "JIOMART " ||
    input.value === "Jiomart "
  ) {
    window.open("https://www.jiomart.com/");
    sound("Opening Jiomart ");
  } else if (
    input.value === "how are you? " ||
    input.value === "How are you? " ||
    input.value === "How Are You? "
  ) {
    display.innerHTML = "I am Fine, Thank you";
    sound("I am Fine, Thank you");
  } else {
    display.innerHTML = `I don't know anything about it`;
    sound("I don't know anything about it. ");
  }
});
function sound(content) {
  speech.text = content;
  window.speechSynthesis.speak(speech);
}
