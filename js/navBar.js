// Animação da navbar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.container-nav');
    
    // Adiciona um pequeno delay para garantir que a página carregou completamente
    setTimeout(() => {
        navbar.classList.add('animate');
    }); // Delay de 300ms para um efeito mais suave
});

// Animação adicional quando o usuário rola a página
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.container-nav');
    const scrollY = window.scrollY;
    
    // Adiciona um efeito sutil de "bounce" quando o usuário rola
    if (scrollY > 50) {
        navbar.style.transform = 'translateX(-50%) translateY(-2px)';
    } else {
        navbar.style.transform = 'translateX(-50%) translateY(0)';
    }
});
