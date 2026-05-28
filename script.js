const products = [

  {
    title:"Heading",
    brand:"Brand Name",
    price:"$80.99",
    oldPrice:"$120.00"
  },

  {
    title:"Heading",
    brand:"Brand Name",
    price:"$80.99",
    oldPrice:"$120.00"
  },

  {
    title:"Heading",
    brand:"Brand Name",
    price:"$80.99",
    oldPrice:"$120.00"
  },

  {
    title:"Heading",
    brand:"Brand Name",
    price:"$80.99",
    oldPrice:"$120.00"
  }

];

const productsContainer = document.getElementById("products");

products.forEach((item)=>{

  productsContainer.innerHTML += `

    <div class="card">

      <div class="card-image">


      </div>

      <div class="card-content">

        <p>${item.brand}</p>

        <h4>${item.title}</h4>

        <div class="price">

          <span>${item.price}</span>

          <del>${item.oldPrice}</del>

        </div>

      </div>

    </div>

  `;
});
/* =========================
SLIDER
========================= */

const heroImage = document.querySelector(".hero-image");

const slideText = document.getElementById("slide-text");

const leftArrow = document.querySelector(".left-arrow");

const rightArrow = document.querySelector(".right-arrow");



const slides = [

  {
    color:"#4b8df0",
    text:"1920 x 1080"
  },

  {
    color: "#46628bff",
    text:"SECOND SLIDE"
  },

  {
    color: "#9abef5ff",
    text:"THIRD SLIDE"
  }

];



let currentSlide = 0;



function showSlide(index){

  heroImage.style.background = slides[index].color;

  slideText.innerText = slides[index].text;
}



/* RIGHT ARROW */

rightArrow.addEventListener("click", ()=>{

  currentSlide++;

  if(currentSlide >= slides.length){

    currentSlide = 0;
  }

  showSlide(currentSlide);
});



/* LEFT ARROW */

leftArrow.addEventListener("click", ()=>{

  currentSlide--;

  if(currentSlide < 0){

    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
});