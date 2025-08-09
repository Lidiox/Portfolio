const hamburger = document.querySelector('#humberger');
const navmenu = document.querySelector('.nav-menu');
const link_item = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll('section');
const text = "Desenvolvidor WEB";
const speed = 100; // Velocidade de digitação em ms
let i = 0;


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
}))
/*
link_item.forEach(item => {
    item.addEventListener("click", function (){
        link_item.forEach(i => i.removeAttribute("id"));
        this.id = "active";
    });
}); 
*/
/*
function changeActiveSection(){
    let scrollPosition = window.scrollY;
    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }

    });
    if (currentSection) {
        link_item.forEach(item => {
        item.removeAttribute("id");
        const link = item.querySelector("a");
        if (link && link.getAttribute("href") === `#${currentSection}`) {
                item.setAttribute("id", "active");
            }
            
        });
    }
}
function setActiveOnClick(event){
    link_item.forEach(item => item.removeAttribute("id"));
    event.target.parentElement.setAttribute("id", "active");
}
link_item.forEach(item => {
    const link = item.querySelector("a");
    if(link){
        link.addEventListener("click", setActiveOnClick);
    }
});
window.addEventListener('scroll', changeActiveSection);*/

document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function (e){
        e.preventDefault();
        const id = this.getAttribute('href');
        const destino = document.querySelector(id);

        destino.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

function type() {
    if (i < text.length) {
      document.getElementById("escrevendo").textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();


