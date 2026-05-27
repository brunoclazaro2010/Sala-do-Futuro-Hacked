// ==================== SALA DO FUTURO HACKED ====================

(function() {
    if (document.getElementById('sala-futuro-menu')) return;

    const menu = document.createElement('div');
    menu.id = 'sala-futuro-menu';
    menu.style.cssText = `
        position: fixed;
        top: 15px;
        right: 15px;
        width: 55px;
        height: 55px;
        background-color: #000000;
        border-radius: 16px;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.9);
        z-index: 999999;
        cursor: pointer;
        user-select: none;
        border: 2px solid #111;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    // Hover effect
    menu.onmouseover = () => {
        menu.style.transform = 'scale(1.08)';
        menu.style.boxShadow = '0 0 35px rgba(0, 255, 100, 0.3)';
    };
    menu.onmouseout = () => {
        menu.style.transform = 'scale(1)';
        menu.style.boxShadow = '0 0 25px rgba(0, 0, 0, 0.9)';
    };

    // Clique (aqui você vai adicionar as funções depois)
    menu.onclick = () => {
        alert("Menu clicado!\n\nAqui você vai colocar suas funções depois.");
        // ←←← COLOQUE SUAS FUNÇÕES AQUI DEPOIS ←←←
    };

    document.body.appendChild(menu);

    console.log('%c[Sala do Futuro] Menu preto criado com sucesso!', 'color: lime; font-size: 14px');
})();
