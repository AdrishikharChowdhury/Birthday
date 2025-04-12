if (window.location.hostname === "adrishikharchowdhury.github.io") {
    const baseTag = document.createElement("base");
    baseTag.href = "/Birthday/"; // Adjust to your project name
    document.head.appendChild(baseTag);
}

const heading = document.querySelector(".heading");
const audio = new Audio("audio.mp3"); // Make sure the file exists in the right place

let isPlaying = false;

heading.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
});
