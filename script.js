document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.getElementById("welcome-text");

    const texts = [
        "Zpherion'a Hoşgeldiniz!",
        "Welcome to Zpherion!",
        "Bienvenido a Zpherion!",
        "Bienvenue à Zpherion!"
    ];
    
    let index = 0;
    
    setInterval(() => {
        welcomeText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 2500);
});
