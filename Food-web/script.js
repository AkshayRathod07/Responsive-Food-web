window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
}); 

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active')
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active')
}

