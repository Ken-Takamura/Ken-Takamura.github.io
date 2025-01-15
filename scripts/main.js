const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/edge.jpg") {
    myImage.setAttribute("src", "images/autopsy.jpg");
  } else {
    myImage.setAttribute("src", "images/edge.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `こんにちは、 ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `こんにちは、${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

let myChangingText = document.getElementById("canChange");

function changeText() {
  const newText = prompt("Please enter the new sentence.");
  if (!newText) {
    changeText();
  } else {
    localStorage.setItem("sentence", newText);
    myChangingText.textContent = newText;
  }
}
if (!localStorage.getItem("sentence")) {
  changeText();
} else {
  const storedSentence = localStorage.getItem("sentence");
  myChangingText.textContent = storedSentence;
}

myChangingText.addEventListener("click", () => {
  changeText();
});
