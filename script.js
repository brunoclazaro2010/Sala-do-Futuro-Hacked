(function(){
    if(document.getElementById('sfmenu')) return;

    const m = document.createElement('div');
    m.id = 'sfmenu';
    m.style.cssText = 'position:fixed;top:15px;right:15px;width:58px;height:58px;background:#000;border-radius:18px;box-shadow:0 0 30px rgba(0,0,0,0.95);z-index:999999;cursor:pointer;border:2px solid #222;display:flex;align-items:center;justify-content:center;transition:.2s;';
    
    m.innerHTML = '⚡';
    
    m.onmouseover = () => m.style.transform = 'scale(1.15)';
    m.onmouseout = () => m.style.transform = 'scale(1)';
    
    m.onclick = () => alert('Menu Sala do Futuro funcionando!\n\nAdicione suas funções aqui depois.');
    
    document.body.appendChild(m);
    console.log('%c[Sala do Futuro] Menu carregado!', 'color:lime;font-weight:bold');
})();
