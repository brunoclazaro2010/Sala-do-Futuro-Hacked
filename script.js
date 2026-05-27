// =============================================
// BLOODY HUB - Versão GitHub
// =============================================

const BloodyHub = {
    create() {
        if (document.getElementById('bloody-hub-menu')) {
            this.toggle();
            return;
        }

        const menu = document.createElement('div');
        menu.id = 'bloody-hub-menu';
        menu.innerHTML = `
            <div id="hc-menu">
                <!-- Tela Principal -->
                <div id="main-screen">
                    <div class="title">BLOODY HUB</div>
                    
                    <div class="buttons">
                        <div class="btn" data-screen="tarefa">Tarefa SP</div>
                        <div class="btn" data-screen="speak">Speak</div>
                        <div class="btn" data-screen="khan">Khan Academy</div>
                        <div class="btn" data-screen="redacao">Redação Paulista</div>
                    </div>
                </div>

                <!-- Telas Individuais -->
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

        document.body.appendChild(menu);
        this.addStyles();
        this.addListeners();
    },

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #hc-menu {
                position: fixed;
                top: 20px;
                right: 20px;
                width: 340px;
                height: 520px;
                background: linear-gradient(180deg, #5c0000 0%, #2a0000 45%, #0f0000 75%, #000000 90%);
                border: 6px solid #ff0000;
                border-radius: 20px;
                overflow: hidden;
                z-index: 2147483647;
                box-shadow: 0 0 30px rgba(255,0,0,0.5);
                animation: menuPop 0.6s forwards, ledPulse 1.4s infinite ease-in-out 0.7s;
            }

            @keyframes menuPop { to { opacity: 1; transform: scale(1); } }
            @keyframes ledPulse {
                0%,100% { border-color: #ff1a1a; box-shadow: inset 0 0 25px #ff0000; }
                35% { border-color: #ff6666; box-shadow: inset 0 0 40px #ff0000; }
                70% { border-color: #dd0000; box-shadow: inset 0 0 18px #ff0000; }
            }

            .title {
                color: #ff0000;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 22px;
                font-weight: bold;
                text-align: center;
                padding: 16px 0;
                letter-spacing: 4px;
                text-shadow: 0 0 15px #ff0000;
                border-bottom: 2px solid #880000;
            }

            .buttons {
                padding: 25px 18px;
                display: flex;
                flex-direction: column;
                gap: 14px;
            }

            .btn, .back-btn {
                background: #222222;
                color: #ff0000;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 15.5px;
                font-weight: bold;
                padding: 16px 20px;
                border-radius: 12px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s;
                border: 2px solid #444;
            }

            .btn:hover {
                background: #ff0000;
                color: #000;
                transform: scale(1.06);
                box-shadow: 0 0 20px #ff0000;
            }

            .header {
                color: #ff0000;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                padding: 16px 0;
                border-bottom: 2px solid #880000;
                text-shadow: 0 0 10px #ff0000;
            }

            .content {
                color: #ddd;
                padding: 30px 20px;
                font-size: 15px;
                text-align: center;
                height: 320px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .back-btn {
                position: absolute;
                bottom: 25px;
                left: 50%;
                transform: translateX(-50%);
                width: 85%;
                background: #880000;
                color: white;
                font-size: 16px;
            }

            .back-btn:hover {
                background: #ff0000;
                color: black;
            }

            .screen { display: none; height: 100%; position: relative; }
            .hidden { display: none !important; }
        `;
        document.head.appendChild(style);
    },

    addListeners() {
        const mainScreen = document.getElementById('main-screen');
        const screens = document.querySelectorAll('.screen');
        const buttons = document.querySelectorAll('.btn');
        const backButtons = document.querySelectorAll('.back-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-screen');
                mainScreen.style.display = 'none';
                document.getElementById('screen-' + target).style.display = 'block';
            });
        });

        backButtons.forEach(back => {
            back.addEventListener('click', () => {
                screens.forEach(s => s.style.display = 'none');
                mainScreen.style.display = 'block';
            });
        });
    },

    toggle() {
        const menu = document.getElementById('hc-menu');
        if (menu) menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
};

// Iniciar automaticamente
BloodyHub.create();
