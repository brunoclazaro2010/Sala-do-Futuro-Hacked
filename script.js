// =============================================
// BLOODY HUB - Versão Corrigida
// =============================================

(function() {
    'use strict';

    if (document.getElementById('bloody-hub-menu')) {
        const existing = document.getElementById('hc-menu');
        if (existing) existing.style.display = (existing.style.display === 'none') ? 'block' : 'none';
        return;
    }

    const menuHTML = `
        <div id="hc-menu">
            <div id="main-screen">
                <div class="title">BLOODY HUB</div>
                <div class="buttons">
                    <div class="btn" data-screen="tarefa">Tarefa SP</div>
                    <div class="btn" data-screen="speak">Speak</div>
                    <div class="btn" data-screen="khan">Khan Academy</div>
                    <div class="btn" data-screen="redacao">Redação Paulista</div>
                </div>
            </div>

            <div id="screen-tarefa" class="screen hidden">
                <div class="header">Tarefa SP</div>
                <div class="content">Em breve...</div>
                <div class="back-btn">← VOLTAR</div>
            </div>

            <div id="screen-speak" class="screen hidden">
                <div class="header">Speak</div>
                <div class="content">Em breve...</div>
                <div class="back-btn">← VOLTAR</div>
            </div>

            <div id="screen-khan" class="screen hidden">
                <div class="header">Khan Academy</div>
                <div class="content">Em breve...</div>
                <div class="back-btn">← VOLTAR</div>
            </div>

            <div id="screen-redacao" class="screen hidden">
                <div class="header">Redação Paulista</div>
                <div class="content">Em breve...</div>
                <div class="back-btn">← VOLTAR</div>
            </div>
        </div>
    `;

    const menuContainer = document.createElement('div');
    menuContainer.id = 'bloody-hub-menu';
    menuContainer.innerHTML = menuHTML;
    document.body.appendChild(menuContainer);

    const style = document.createElement('style');
    style.textContent = `
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
            box-shadow: 0 0 30px rgba(255,0,0,0.7);
            animation: menuPop 0.6s forwards, ledPulse 1.4s infinite ease-in-out 0.7s;
        }
        @keyframes menuPop { to { opacity: 1; transform: scale(1); } }
        @keyframes ledPulse {
            0%,100% { border-color: #ff1a1a; box-shadow: inset 0 0 25px #ff0000; }
            35% { border-color: #ff6666; box-shadow: inset 0 0 40px #ff0000; }
            70% { border-color: #dd0000; box-shadow: inset 0 0 18px #ff0000; }
        }
        .title, .header { color: #ff0000; font-weight: bold; text-align: center; text-shadow: 0 0 15px #ff0000; }
        .title { font-size: 22px; padding: 16px 0; letter-spacing: 4px; border-bottom: 2px solid #880000; }
        .header { font-size: 20px; padding: 16px 0; border-bottom: 2px solid #880000; }
        .buttons { padding: 25px 18px; display: flex; flex-direction: column; gap: 14px; }
        .btn, .back-btn {
            background: #222; color: #ff0000; font-size: 15.5px; font-weight: bold;
            padding: 16px; border-radius: 12px; text-align: center; cursor: pointer;
            border: 2px solid #444; transition: all 0.3s;
        }
        .btn:hover { background: #ff0000; color: #000; transform: scale(1.05); }
        .content { color: #ddd; padding: 40px 20px; text-align: center; height: 310px; display: flex; align-items: center; justify-content: center; }
        .back-btn { position: absolute; bottom: 25px; left: 50%; transform: translateX(-50%); width: 85%; background: #880000; color: white; }
        .back-btn:hover { background: #ff0000; color: black; }
        .screen { display: none; height: 100%; position: relative; }
        .hidden { display: none !important; }
    `;
    document.head.appendChild(style);

    // Event Listeners
    setTimeout(() => {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('main-screen').style.display = 'none';
                const target = 'screen-' + btn.getAttribute('data-screen');
                document.getElementById(target).style.display = 'block';
            });
        });

        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
                document.getElementById('main-screen').style.display = 'block';
            });
        });
    }, 100);

    console.log('%cBLOODY HUB carregado com sucesso!', 'color:#ff0000; font-size:14px; font-weight:bold');
})();
