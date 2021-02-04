const price_btn = document.getElementsByClassName('price-item__btn');
const price_items = document.getElementsByClassName('price-item');
const modal_price = document.getElementById('modal-price');
const modal_price0 = document.getElementById('modal-price0');
const modal_content = document.getElementById('modal-content');
const modal_table = document.getElementById('modal-table');
const price_table_btn = document.getElementById('price-table-btn');

const train = document.getElementById('train');

window.addEventListener('click', function(event) {
  if (event.target == modal_price) {
    // modal_content.innerHTML = '';
    // modal_price.style.display = "none";
  }
}) 

price_table_btn.addEventListener('click', function(event) {
    alert('Send message')
})

// for (let i = 0; i < price_btn.length; i++) {
//     price_btn[i].addEventListener('click', function(event) {
//         // debugger
//   // const el_x = this.getBoundingClientRect().left;
//   // const el_x = this.parentNode.getBoundingClientRect().left;
  
//   // console.log(el_x);

//         if ( modal_price.style.display === "block") {
//             // modal_content.innerHTML = '';
//             // modal_price.style.display = "none";
//             // modal_table.style.display = "none";
//             // return;
//         }
//         if ( modal_price.style.display === "none" || modal_price.style.display === "") {
//             // const price_item = price_btn[i].parentNode;
//             // const el = price_item.cloneNode(true);
//             // modal_price.style.display = "block";
//             // modal_content.appendChild(el);
//             // return;
//         }
//     }) 
//   }  
 
function onclick_btn() {
  if ( modal_price.style.display === "block") {
    // modal_table.style.display = "block";
  }
}

// /////////////////////
for (let i = 0; i < price_btn.length; i++) {
  price_btn[i].addEventListener('click', function(event) {
    const el = this.parentNode;
    const el2 = el.cloneNode(true);
    price_items[0].parentNode.appendChild(el2);
  
    const el_top = el.getBoundingClientRect().top;
    const el_x = el.getBoundingClientRect().left;

    modal_price.style.display = "block";
  
    el2.animate([
      { left: `${el_x}px`, top: `${el_top}px`}, 
      { position: 'fixed', left: `50%`, top: `50%`, transform: 'translate(-50%, -50%)', opacity: '.8'}
    ], {
      duration: 800,
    })
    // this.parentNode.style.position = "fixed";
    // this.parentNode.style.zIndex = "11";
    // this.parentNode.style.display = "none";
    el.style.opacity = "0";
  
    el2.style.position = "fixed";
    el2.style.zIndex = "11";

    const id = setInterval(() => {
      el2.style.display = "none";
      // modal_table.style.display = "block";
      // modal_table.classList.toggle('modal-table__block');  
    }, 800);
    // clearInterval(id);
  })
}