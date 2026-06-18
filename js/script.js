document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica do Brilho do Mouse (Cursor Glow) ---
    const cursorGlow = document.getElementById("cursor-glow");
    if (cursorGlow) {
        document.addEventListener("mousemove", (e) => {
            cursorGlow.style.left = e.clientX + "px";
            cursorGlow.style.top = e.clientY + "px";
        });
    }

    // --- Animação de Entrada ao Rolar a Página ---
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach((el) => observer.observe(el));

    // --- Lógica do Modal e WhatsApp ---
    const modal = document.getElementById('planModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.close-modal');
    const whatsappForm = document.getElementById('whatsappForm');

    // Abrir Modal
    if (openModalBtn && modal) {
        openModalBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    }

    // Fechar Modal (no botão X)
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Fechar Modal ao clicar fora da caixa (no fundo escuro)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Processar o envio do formulário e abrir o WhatsApp
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recarregar a página

            // Pega o valor do plano selecionado
            const selectedPlan = document.querySelector('input[name="plan"]:checked').value;
            
            // Número com código do país (55) e DDD (85)
            const phone = "5585981311975";
            
            // Monta a mensagem
            const message = `Olá! Estudei a proposta de desenvolvimento e decidi avançar com o plano: *${selectedPlan}*. Podemos conversar sobre os próximos passos?`;
            
            // Codifica a mensagem para o formato de URL (troca espaços por %20, etc)
            const encodedMessage = encodeURIComponent(message);
            
            // Cria o link do WhatsApp e abre em nova aba
            const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
            
            // Opcional: fechar o modal depois de enviar
            modal.classList.remove('active');
        });
    }
});