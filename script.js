const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const activeArea = document.querySelector(".active-area");
const activeMenu = document.querySelector(".top-menu");

activeArea.addEventListener("click", e => {
    hamburgerIcon.classList.toggle("active");  
    closeIcon.classList.toggle("active");  
    activeMenu.classList.toggle("active"); 
});

activeMenu.addEventListener("click", e => {
    if(e.target.className == "heading-menu" || e.target.className == "heading-menu active"){                
        e.target.classList.toggle("active");
        e.target.nextElementSibling.classList.toggle("active");                
    }
});
