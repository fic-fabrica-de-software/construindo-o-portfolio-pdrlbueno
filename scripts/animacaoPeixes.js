for (let i = 0; i < 10; i++) {
    const fish = document.createElement("div");
    fish.classList.add("fish");
    fish.style.top = Math.random() * window.innerHeight + "px";
    fish.style.animationDuration = (5 + Math.random() * 6) + "s";

    const color = `hsl(${Math.random() * 360}, 70%, 60%)`;

    const body = document.createElement("div");
    body.classList.add("fish-body");
    body.style.backgroundColor = color;

    const tail = document.createElement("div");
    tail.classList.add("fish-tail");
    tail.style.backgroundColor = color;

    const eye = document.createElement("div");
    eye.classList.add("fish-eye");

    fish.appendChild(body);
    fish.appendChild(tail);
    fish.appendChild(eye);

    document.body.appendChild(fish);
}
