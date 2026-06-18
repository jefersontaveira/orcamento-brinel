document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Lógica do Brilho do Mouse (Cursor Glow)
    const cursorGlow = document.getElementById("cursor-glow");
    
    if (cursorGlow) {
        document.addEventListener("mousemove", (e) => {
            // Atualiza a posição do brilho baseado na posição do mouse
            cursorGlow.style.left = e.clientX + "px";
            cursorGlow.style.top = e.clientY + "px";
        });
    }

    // 2. Animação de Entrada ao Rolar a Página (Scroll Animations)
    // Seleciona todos os elementos que possuem a classe 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');

    // Cria um observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Opcional: parar de observar após a animação acontecer uma vez
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        // threshold de 0.1 significa que a animação dispara quando 10% do elemento aparece
        threshold: 0.1 
    });

    // Pede ao observador para ficar de olho em cada elemento escondido
    hiddenElements.forEach((el) => observer.observe(el));
});