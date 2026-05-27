// BRUNO HACKED - Menu Preto Simples
(function() {
    'use strict';

    // Não cria o menu novamente se já existir
    if (document.getElementById('bruno-menu-preto')) {
        alert('✅ Menu já está na tela!');
        return;
    }

    const menu = document.createElement('div');
    menu.id = 'bruno-menu-preto';
    menu.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 280px;
        background-color: #0a0a0a;
        border: 2px solid #ff0000;
        border-radius: 16px;
        box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
        z-index: 9999999;
        font-family: Arial, sans-serif;
        color: white;
        overflow: hidden;
    `;

    menu.innerHTML = `
        <div style="background: #1f0000; padding: 15px; text-align: center; font-size: 16px; font-weight: bold; border-bottom: 2px solid #ff0000;">
            🔥 BRUNO HACKED
        </div>
        <div style="padding: 20px; text-align: center; font-size: 14px; line-height: 1.6;">
            Menu preto carregado com sucesso!<br><br>
            <span style="color: #888;">Este é apenas o menu básico.</span><br>
            Agora podemos adicionar as funções.
        </div>
        <div style="background: #111; padding: 12px; text-align: center; font-size: 11px; color: #555;">
            by brunoclazaro2010
        </div>
    `;

    document.body.appendChild(menu);

    console.log('%c✅ Menu preto injetado com sucesso!', 'color: red; font-size: 15px; font-weight: bold;');
})();
