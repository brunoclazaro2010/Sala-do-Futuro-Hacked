// BLOODY HUB - Versão Anti-CORS
(function() {
    'use strict';

    if (document.getElementById('bloody-hub-menu')) {
        const menu = document.getElementById('hc-menu');
        if (menu) menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        return;
    }

    const html = `
        <div id="hc-menu" style="position:fixed;top:20px;right:20px;width:340px;height:520px;background:linear-gradient(180deg,#5c0000 0%,#2a0000 45%,#0f0000 75%,#000 90%);border:6px solid #ff0000;border-radius:20px;overflow:hidden;z-index:2147483647;box-shadow:0 0 30px rgba(255,0,0,0.7);animation:ledPulse 1.4s infinite ease-in-out, pop 0.6s;">
            <div id="main-screen">
                <div style="color:#ff0000;font-size:22px;font-weight:bold;text-align:center;padding:16px 0;letter-spacing:4px;border-bottom:2px solid #880000;text-shadow:0 0 15px #ff0000;">BLOODY HUB</div>
                <div style="padding:25px 18px;display:flex;flex-direction:column;gap:14px;">
                    <div class="btn" data-screen="tarefa">Tarefa SP</div>
                    <div class="btn" data-screen="speak">Speak</div>
                    <div class="btn" data-screen="khan">Khan Academy</div>
                    <div class="btn" data-screen="redacao">Redação Paulista</div>
                </div>
            </div>

            <div id="screen-tarefa" class="screen" style="display:none;height:100%;position:relative;">
                <div class="header">Tarefa SP</div>
                <div class="content">Em breve...</div>
                <div class="back-btn">← VOLTAR</div>
            </div>
            <!-- Repita as outras 3 telas se quiser, mas por enquanto deixei só uma pra testar -->
        </div>

        <style>
        @keyframes ledPulse{0%,100%{border-color:#ff1a1a;box-shadow:inset 0 0 25px #ff0000}35%{border-color:#ff6666;box-shadow:inset 0 0 40px #ff0000}70%{border-color:#dd0000;box-shadow:inset 0 0 18px #ff0000}}
        @keyframes pop{from{opacity:0;transform:scale(0.6)}to{opacity:1;transform:scale(1)}}
        .btn,.back-btn{background:#222;color:#ff0000;font-weight:bold;padding:16px;border-radius:12px;text-align:center;cursor:pointer;border:2px solid #444;transition:.3s}
        .btn:hover{background:#ff0000;color:#000;transform:scale(1.05)}
        .header{color:#ff0000;font-size:20px;font-weight:bold;text-align:center;padding:16px;border-bottom:2px solid #880000}
        .content{color:#ddd;padding:40px 20px;text-align:center;height:310px;display:flex;align-items:center;justify-content:center}
        .back-btn{position:absolute;bottom:25px;left:50%;transform:translateX(-50%);width:85%;background:#880000;color:white}
        .screen{display:none}
        </style>
    `;

    const container = document.createElement('div');
    container.id = 'bloody-hub-menu';
    container.innerHTML = html;
    document.body.appendChild(container);

    // Funcionalidade dos botões
    setTimeout(() => {
        document.querySelectorAll('.btn').forEach(b => {
            b.onclick = () => {
                document.getElementById('main-screen').style.display = 'none';
                document.getElementById('screen-' + b.dataset.screen).style.display = 'block';
            };
        });

        document.querySelectorAll('.back-btn').forEach(b => {
            b.onclick = () => {
                document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
                document.getElementById('main-screen').style.display = 'block';
            };
        });
    }, 200);

    console.log('%cBLOODY HUB → Carregado', 'color:#ff0000;font-size:16px;font-weight:bold');
})();
