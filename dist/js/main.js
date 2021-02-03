const price_btn = document.getElementsByClassName('price-item__btn');
const price_items = document.getElementsByClassName('price-item');
const modal_price = document.getElementById('modal-price');
const modal_content = document.getElementById('modal-content');
const modal_table = document.getElementById('modal-table');
const price_table_btn = document.getElementById('price-table-btn');

window.addEventListener('click', function(event) {
  if (event.target == modal_price) {
    modal_content.innerHTML = '';
    modal_price.style.display = "none";
  }
})

price_table_btn.addEventListener('click', function(event) {
    alert('Send message')
})

for (let i = 0; i < price_btn.length; i++) {
    price_btn[i].addEventListener('click', function(event) {
        if ( modal_price.style.display === "block") {
            modal_content.innerHTML = '';
            modal_price.style.display = "none";
            modal_table.style.display = "none";
            return;
        }
        if ( modal_price.style.display === "none" || modal_price.style.display === "") {
            const price_item = price_btn[i].parentNode;
            const el = price_item.cloneNode(true);
            modal_price.style.display = "block";
            modal_content.appendChild(el);
            return;
        }
    }) 
  }  

function onclick_btn() {
  if ( modal_price.style.display === "block") {
    modal_table.style.display = "block";
  }
}