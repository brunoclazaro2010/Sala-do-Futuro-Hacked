// =============================================
// BRUNO HACKED v1.1 - SALA DO FUTURO
// Github: brunoclazaro2010/Sala-do-Futuro-Hacked
// Modo Hardcore - Bookmarklet
// =============================================

(function() {
    'use strict';

    if (document.getElementById('bruno-hacked-menu')) {
        alert('🔥 Bruno Hacked já está ativo!');
        return;
    }

    const menuHTML = `
        <div id="bruno-hacked-menu" style="position:fixed;top:15px;right:15px;width:290px;background:#0a0a0a;border:2px solid #ff0000;border-radius:16px;box-shadow:0 0 30px rgba(255,0,0,0.8);z-index:9999999;font-family:Segoe UI,Arial,sans-serif;color:#fff;overflow:hidden;user-select:none;">
            <div style="background:#1f0000;padding:14px 18px;font-size:16px;font-weight:bold;border-bottom:2px solid #ff0000;display:flex;justify-content:space-between;align-items:center;">
                <span>🔥 BRUNO HACKED v1.1</span>
                <span id="btn-close" style="cursor:pointer;font-size:20px;color:#ff6666;">✕</span>
            </div>
            <div style="padding:16px;display:flex;flex-direction:column;gap:10px;">
                <button class="bruno-btn" id="btn-reveal">👁️ Revelar Todas as Respostas</button>
                <button class="bruno-btn" id="btn-auto">🔄 Ativar Auto Resolver</button>
                <button class="bruno-btn" id="btn-lote">⚡ Completar Todas as Atividades</button>
                <button class="bruno-btn" id="btn-redacao">📝 Redação Automática (Beta)</button>
                <button class="bruno-btn" id="btn-bypass">⏭️ Bypass Tempo Mínimo</button>
                <div style="height:1px;background:#333;margin:10px 0;"></div>
                <div style="font-size:13px;text-align:center;color:#00ff00;" id="status">
                    Status: <span style="color:#00ff88;">Pronto para usar</span>
                </div>
            </div>
            <div style="background:#111;text-align:center;padding:9px;font-size:11px;color:#555;">
                by brunoclazaro2010 • Hardcore Mode
            </div>
        </div>
    `;

    const container = document.createElement('div');
    container.innerHTML = menuHTML;
    document.body.appendChild(container.firstElementChild);

    const css = document.createElement('style');
    css.textContent = `
        .bruno-btn {
            background:#1a1a1a;color:#fff;border:none;padding:13px 16px;border-radius:10px;
            font-size:14.5px;cursor:pointer;transition:all 0.25s;text-align:left;width:100%;
        }
        .bruno-btn:hover {
            background:#ff0000;transform:translateX(8px);box-shadow:0 0 20px rgba(255,0,0,0.7);
        }
    `;
    document.head.appendChild(css);

    document.getElementById('btn-close').onclick = () => {
        document.getElementById('bruno-hacked-menu').remove();
        alert('Menu removido. Clique no favorito novamente.');
    };

    document.getElementById('btn-reveal').onclick = () => {
        document.getElementById('status').innerHTML = 'Status: <span style="color:#ffff00;">Revelando respostas...</span>';
        alert('👁️ Função Revelar Respostas ativada (em desenvolvimento)');
    };

    document.getElementById('btn-auto').onclick = () => {
        document.getElementById('status').innerHTML = 'Status: <span style="color:#00ff00;">AUTO RESOLVER ATIVADO 🔥</span>';
        alert('🔥 Auto Resolver ativado!\nO script vai tentar responder automaticamente.');
    };

    console.log('%c✅ BRUNO HACKED v1.1 injetado com sucesso!', 'color:red;font-size:16px;font-weight:bold');
})();
