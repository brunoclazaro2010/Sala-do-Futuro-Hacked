javascript:(function(){
    var id = 'meu-menu-personalizado';
    var menu = document.getElementById(id);
    if (menu) {
        menu.remove();
    } else {
        var menu = document.createElement('div');
        menu.id = id;
        menu.style.position = 'fixed';
        menu.style.top = '10px';
        menu.style.right = '10px';
        menu.style.width = '300px';
        menu.style.height = '400px';
        menu.style.backgroundColor = 'black';
        menu.style.borderRadius = '15px';
        menu.style.zIndex = '999999';
        document.body.appendChild(menu);
    }
})();
