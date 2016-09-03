(()=>{
  window.onload = ()=>{
    var menu = document.getElementById('hamb'),
    mobile = document.getElementById('mobile');

    mobile.style.display = 'none';
    var t = 0 ;

    menu.onclick =  ()=>{
      t = 1 - t;
      mobile.style.display = ['none','flex'][t];
    }
  }
})()
