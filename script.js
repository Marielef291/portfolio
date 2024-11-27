console.log("Bienvenue sur mon site portfolio et CV");


function calculerAge(dateNaissance) {
  const now = new Date();
  const birthDate = new Date(dateNaissance);
  let age = now.getFullYear() - birthDate.getFullYear();

  // Réduire l'âge d'une unité si l'anniversaire n'est pas encore passé cette année
  if (
    now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() &&
      now.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

// Date de naissance
const dateDeNaissance = "1991-02-19"; // Format YYYY-MM-DD

// Calcul de l'âge
const age = calculerAge(dateDeNaissance);

// Affichage de l'âge dans le span
document.getElementById("calculAge").innerText = age + " ans";


//SECTION PARCOURT
const viewParcourt = () => {
  document.querySelector(".hidden").classList.add("fade-in");
  document.querySelector(".viewMore").style.display = "none";
};

const viewMoreButton = document.querySelector(".viewMore");
if (viewMoreButton) {
  viewMoreButton.addEventListener("click", viewParcourt);
}


//SECTION LOISIR
const sliderContainerCouture = document.querySelector('#couture .slider-container');
const icone = document.querySelector('#couture .iconeCouture')
const icone2 = document.querySelector('#couture .iconeCouture2')

function showSliderCouture() {
  sliderContainerCouture.hidden = false;
  icone.style.display = 'none';
  icone2.style.display = 'none';
}

function hideSliderCouture() {
  sliderContainerCouture.hidden = true;
  icone.style.display = 'block';
  icone2.style.display = 'block';
}

const sliderContainerPhoto = document.querySelector('#photo .slider-container');
const icone3 = document.querySelector('#photo .iconPhoto')
const icone4 = document.querySelector('#photo .iconPhoto2')

function showSliderPhoto() {
  sliderContainerPhoto.hidden = false;
  icone3.style.display = 'none';
  icone4.style.display = 'none';
}

function hideSliderPhoto() {
  sliderContainerPhoto.hidden = true;
  icone3.style.display = 'block';
  icone4.style.display = 'block';
}


const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

const menuLinks = document.querySelectorAll('.nav-links ul li');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Fermer le menu en retirant la classe 'mobile-menu'
        navLinks.classList.remove('mobile-menu');
    });
});

