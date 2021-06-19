window.onload = function() {
    Particles.init({
      selector: '.particlesjs',
      
      color: ['#FF8080', '#A3DDCB',"#F8F5F1",'E4FBFF','#DA0463', '#404B69', '#DBEDF3','FEFFDE','A1CAE2'],
      connectParticles: true,
      maxParticles:150,
      sizeVariations: 3,
      responsive: [{
        breakpoint: 450,
      options: {
          color: ['#DA0463', '#404B69', '#DBEDF3','FEFFDE','A1CAE2'],
          maxParticles: 200,
        connectParticles: false
      }
    }]
  
    });
  };


// Hamburger Menu

const hamburger = document.getElementById('hamburger');

const menu = document.getElementById('menu');

hamburger.addEventListener('click', ()=>{
  menu.classList.toggle("show");
})


