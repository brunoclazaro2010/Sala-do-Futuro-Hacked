// BRUNO HACKED v1.2 - SALA DO FUTURO
(function() {
    'use strict';

    if (document.getElementById("bruno-menu")) {
        alert("🔥 Bruno Hacked já está aberto!");
        return;
    }

    const menu = document.createElement("div");
    menu.id = "bruno-menu";
    menu.style = `
        position:fixed;top:12px;right:12px;width:270px;background:#0a0a0a;
        border:3px solid #ff0000;border-radius:14px;box-shadow:0 0 25px #ff0000;
        z-index:99999999;font-family:Arial;color:white;overflow:hidden;
    `;
    menu.innerHTML = `
        <div style="background:#1f0000;padding:12px;font-size:15px;font-weight:bold;text-align:center;border-bottom:2px solid #ff0000;">
            🔥 BRUNO HACKED v1.2
        </div>
        <div style="padding:12px;display:flex;flex-direction:column;gap:8px;">
            <button onclick="alert('👁️ Revelar Respostas - Em breve')" style="padding:12px;background:#1f1f1f;border:none;color:white;border-radius:8px;cursor:pointer;">👁️ Revelar Respostas</button>
            <button onclick="alert('🔄 Auto Resolver ativado (em teste)')" style="padding:12px;background:#1f1f1f;border:none;color:white;border-radius:8px;cursor:pointer;">🔄 Auto Resolver</button>
            <button onclick="alert('⚡ Função em desenvolvimento')" style="padding:12px;background:#1f1f1f;border:none;color:white;border-radius:8px;cursor:pointer;">⚡ Completar Todas</button>
            <button onclick="this.parentElement.parentElement.remove();alert('Menu fechado. Clique no favorito novamente.')" style="padding:12px;background:#330000;border:none;color:#ff6666;border-radius:8px;cursor:pointer;">✕ Fechar Menu</button>
        </div>
        <div style="background:#111;padding:6px;text-align:center;font-size:10px;color:#555;">
            by brunoclazaro2010
        </div>
    `;

    document.body.appendChild(menu);
    console.log("%c✅ BRUNO HACKED v1.2 carregado com sucesso!", "color:red;font-size:16px;font-weight:bold");
})();
