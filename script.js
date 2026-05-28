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