for (let i = 0; i < 12; i++) {
    const fish = document.createElement("div");
    fish.classList.add("fish");
    fish.style.top = Math.random() * window.innerHeight + "px";
    fish.style.animationDuration = (6 + Math.random() * 6) + "s";
    fish.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    document.body.appendChild(fish);
}