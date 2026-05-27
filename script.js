(function(){
  if(document.getElementById("custom-black-menu")) return;
  
  var menu = document.createElement("div");
  menu.id = "custom-black-menu";
  menu.style.position = "fixed";
  menu.style.top = "20px";
  menu.style.right = "20px";
  menu.style.width = "600px";
  menu.style.height = "700px";
  menu.style.background = "linear-gradient(to bottom, #ff0000, #000000)";
  menu.style.borderRadius = "15px";
  menu.style.zIndex = "999999";
  menu.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  menu.style.border = "1px solid #333";
  
  document.body.appendChild(menu);
})();
