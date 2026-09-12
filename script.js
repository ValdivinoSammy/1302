const teclas = document.querySelectorAll(".teclas");
const visor = document.querySelector(".visor");
const password = [1, 7, 9, 6];
const passwordAlter = [1, 3, 0, 2];


let passwordTry = [];
let teclasDiscadas = 0;
let modoTravado = false;

teclas.forEach(tecla => {
    tecla.addEventListener("click", press)
})

function press(event) {
    if (modoTravado) { return }
    event.target.style.backgroundColor = "purple";
    let ID = event.target.id;
    passwordTry.push(Number(ID));
    visor.textContent += ID;
    teclasDiscadas++
    if (teclasDiscadas === 4) {
        modoTravado = true;
        passwordEstaCerto()
    } else { return }

};

function passwordEstaCerto() {
    if (passwordTry[0] === password[0] &&
        passwordTry[1] === password[1] &&
        passwordTry[2] === password[2] &&
        passwordTry[3] === password[3]) {
        visor.style.backgroundColor = "green";
        visor.textContent = "❤ LOVE ❤";
        setTimeout(() => {
            removeColor();
            reset()
            window.location.href = "./carta.html";
        }, 1000)
    } else if (
        passwordTry[0] === passwordAlter[0] &&
        passwordTry[1] === passwordAlter[1] &&
        passwordTry[2] === passwordAlter[2] &&
        passwordTry[3] === passwordAlter[3]) {

        visor.style.backgroundColor = "red";
        visor.textContent = "Error";
        removeColor();
        setTimeout(() => {
            alert("Muito fofo 🥰 \nMas seria facil demais não acha? 😉 \nHm.. qual era a dica mesmo?")
            reset();
        }, 800)

    } else {
        visor.style.backgroundColor = "red";
        visor.textContent = "Error";
        removeColor();
        setTimeout(() => {
            reset()
        }, 800)
    }
}

function removeColor() {
    setTimeout(() => {
        teclas.forEach(tecla => {
            tecla.style.backgroundColor = "#222";
        })
    }, 500)
}

function reset() {
    teclasDiscadas = 0;
    modoTravado = false;
    passwordTry = [];

    visor.style.backgroundColor = "white";
    visor.textContent = "";
}