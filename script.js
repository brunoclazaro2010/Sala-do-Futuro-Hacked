// =============================================
// BLOODY HUB - Versão Bonita (GitHub)
// Autor: Você
// =============================================

(function () {
    'use strict';

    // Evita criar múltiplos menus
    if (document.getElementById('bloody-hub-menu')) {
        const menu = document.getElementById('hc-menu');
        if (menu) menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
        return;
    }

    const html = `
        <div id="hc-menu">
            <div style="color:#ff0000;font-family:Arial,Helvetica,sans-serif;font-size:21px;font-weight:bold;text-align:center;padding:14px 0 10px 0;letter-spacing:4px;text-shadow:0 0 15px #ff0000, 0 0 25px #ff0000;border-bottom:2px solid #880000;">BLOODY HUB</div>
            
            <div style="padding:25px 18px;display:flex;flex-direction:column;gap:14px;">
                <div class="bloody-btn">Tarefa SP</div>
                <div class="bloody-btn">Speak</div>
                <div class="bloody-btn">Khan Academy</div>
                <div class="bloody-btn">Redação Paulista</div>
            </div>
        </div>

        <style>
        @keyframes menuPop {
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes ledPulse {
            0%,100% { border-color:#ff1a1a; box-shadow:inset 0 0 25px #ff0000; }
            35%     { border-color:#ff6666; box-shadow:inset 0 0 40px #ff0000; }
            70%     { border-color:#dd0000; box-shadow:inset 0 0 18px #ff0000; }
        }

        #hc-menu {
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            width: 340px;
            height: 520px;
            background: linear-gradient(180deg, #5c0000 0%, #2a0000 45%, #0f0000 75%, #000000 90%);
            border: 6px solid #ff0000;
            border-radius: 20px;
            overflow: hidden;
            z-index: 2147483647 !important;
            opacity: 0;
            transform: scale(0.7);
            animation: menuPop 0.6s forwards, ledPulse 1.4s infinite ease-in-out 0.7s;
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.6);
        }

        .bloody-btn {
            background: #333333;
            color: #ff0000;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15.5px;
            font-weight: bold;
            padding: 16px 20px;
            border-radius: 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(0,0,0,0.7);
            border: 2px solid #555;
        }

        .bloody-btn:hover {
            background: #ff0000;
            color: #000;
            transform: scale(1.06);
            box-shadow: 0 0 25px #ff0000;
        }
        </style>
    `;

    const container = document.createElement('div');
    container.id = 'bloody-hub-menu';
    container.innerHTML = html;
    document.body.appendChild(container);

    console.log('%cBLOODY HUB → Carregado com sucesso!', 'color:#ff0000; font-size:14px; font-weight:bold');
})();
