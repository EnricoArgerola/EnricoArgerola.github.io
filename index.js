const speakBtn = document.getElementById("speakBtn");
speakBtn.addEventListener("click", speakNow);

const styleSheet = document.getElementById("styleSheet");

// SpeechRecognition

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("In ascolto..");
};

recognition.onresult = function (e) {
  const resultIndex = e.resultIndex;

  const { transcript } = e.results[resultIndex][0];
  console.log(transcript);
  speakOutLoud(transcript);
};

function speakNow() {
  recognition.start();
}

function speakOutLoud(message) {
  let whatToSpeak = message;

  if (whatToSpeak.includes("Dark Mode")) {
    styleSheet.setAttribute("href", "dark-mode.css");
  } else if (whatToSpeak.includes("Light Mode")) {
    styleSheet.setAttribute("href", "light-mode.css");
  } else if (whatToSpeak.includes("Apri YouTube")) {
    window.open("https://youtube.com", "_blank");
  } else if (whatToSpeak.includes("Apri Serra")) {
    window.open("https://www.isisserra.edu.it", "_blank");
  } else if (whatToSpeak.includes("Apri musica")) {
    window.open("https://music.youtube.com", "_blank");
  } else if (whatToSpeak.includes("Devo studiare storia")) {
    window.open("https://classroom.google.com/u/2/w/NjI2MTI5MDE1NjQx/tc/NjUzNTM1MzkyMjk2", "_blank");
  } else if (whatToSpeak.includes("devo studiare italiano")) {
    window.open("https://classroom.google.com/u/2/w/NjI2MTI5MDE1NjQx/tc/NjQ1NjY1NzIzODk0", "_blank");
  } else if (whatToSpeak.includes("devo studiare informatica")) {
    window.open("https://classroom.google.com/u/2/w/NjI2MTI5MDE1NjQx/tc/NjMyOTYxNTAwNDgw", "_blank");
  } else if (whatToSpeak.includes("devo studiare")) {
    window.open("https://classroom.google.com/u/2/c/NjI2MTI5MDE1NjQx?pli=1", "_blank");
  } else if (whatToSpeak.includes("Chi è Ric")) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D", "_blank");
  } else if (whatToSpeak.includes("riconoscimi")) {
    window.open("index34.html", "_blank");
  }
  
  // The action of saying or expressing something aloud..
  const SpeechSynthesisUtterance =
    window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;

  const utterance = new SpeechSynthesisUtterance();

  utterance.volume = 1; // 100%
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.text = whatToSpeak;

  // Artificial production of human speech
  const speechSynthesis =
    window.speechSynthesis || window.webkitspeechSynthesis;

  speechSynthesis.speak(utterance);
}
