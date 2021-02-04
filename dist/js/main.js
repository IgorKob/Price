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

for (let i = 0; i < price_btn.length; i++) {
    price_btn[i].addEventListener('click', function(event) {
        // debugger
  // const el_x = this.getBoundingClientRect().left;
  // const el_x = this.parentNode.getBoundingClientRect().left;
  
  // console.log(el_x);

        if ( modal_price.style.display === "block") {
            // modal_content.innerHTML = '';
            // modal_price.style.display = "none";
            // modal_table.style.display = "none";
            // return;
        }
        if ( modal_price.style.display === "none" || modal_price.style.display === "") {
            // const price_item = price_btn[i].parentNode;
            // const el = price_item.cloneNode(true);
            // modal_price.style.display = "block";
            // modal_content.appendChild(el);
            // return;
        }
    }) 
  }  
 
function onclick_btn() {
  if ( modal_price.style.display === "block") {
    modal_table.style.display = "block";
  }
}

// 
train.onclick = function() {
  const el = this.parentNode;
  const el2 = this.parentNode.cloneNode(true);
  el2.style.opacity = "0";
  price_items[0].parentNode.appendChild(el2);

  const el_top = this.parentNode.getBoundingClientRect().top;
  const el_x = this.parentNode.getBoundingClientRect().left;
  // debugger
  // console.log(el_x);
  // this.parentNode.style.animationFillMode = "forwards";
  // this.parentNode.style.position = "absolute";

  modal_price.style.display = "block";

  this.parentNode.animate([
    { left: `${el_x}px`, top: `${el_top}px`}, 
    { position: 'fixed', left: `50%`, top: `50%`, transform: 'translate(-50%, -50%)', opacity: '0'}
  ], {
    duration: 2000,
    // animationFillMode: forwards,
    // animationFillMode: 'forwards',
    // iterations: Infinity
  })
  this.parentNode.style.position = "fixed";
  // this.parentNode.style.display = "none";
  // this.parentNode.style.opacity = "0";
  this.parentNode.style.zIndex = "11";

  const id = setInterval(() => {
    el.style.opacity = "0";
  }, 2000);
  // clearInterval(id);

  // this.parentNode.style.left = "50%";
  // this.parentNode.style.top = "50%";
  // this.parentNode.style.transform = 'translate(-50%, -50%)';

  // this.parentNode.style.animationFillMode = "forwards";


  // let pos = 0;
  // var id = setInterval(frame, 3000);
  // function frame() {
  //   if (pos < 1150) {
  //     clearInterval(id);
  //   } else {
  //     pos++; 
  //     this.parentNode.style.top = pos + 'px'; 
  //     this.parentNode.style.left = pos + 'px'; 
  //   }
  // }

}


//     train.onclick = function() {
//       // debugger
//       const myWidth = document.documentElement.clientWidth/2;
//       const el_top = this.parentNode.getBoundingClientRect().top;
//       const el_x = this.parentNode.getBoundingClientRect().left;
//       const el_y = this.parentNode.getBoundingClientRect().right;
//       // const el_width = this.parentNode.style.width;

//       // const el_cx = myWidth - (el_y - el_x)/2;
//       const el_cx = myWidth - (el_y - el_x)/2;

//       const el = this.parentNode.cloneNode(true);

//       modal_price0.style.display = "block";
//       modal_price0.appendChild(el);



// console.log(myWidth)

//       let start = Date.now();

//       let timer = setInterval(function() {
//         let timePassed = Date.now() - start;

//         // train.style.left = timePassed / 5 + 'px';
//         // train.parentNode.style.position = 'absolute';
//         // el.style.position = 'absolute';
//         el.style.position = 'fixed';
//         // el.style.opacity = "1";
//         // el.style.zIndex = "1";

        
//         // train.style.width = 100+'%';
//         // train.style.left = timePassed / myWidth + 'px';
//         // train.parentNode.style.left = el_cx + 'px';
//         // el.style.left = el_cx + 'px';
//         // el.style.left = 50 + '%';

//         // el.style.top = el_top + 'px';
//         // el.style.top = 50 + '%';

//         // el.style.transform = translate(-50+'%', -50+'%');
//         // el.style.transform = 'translate(-50%, -50%)';

//         // el.style = "transform: translate(-50px,0px)";

//         for (let i = el_x; i < el_cx; i++) {
//           for (let j = el_top; j <= 20; i++) {
//             el.style.left = i + '%';
//             el.style.top = j + '%';
//           }
//         }




//         if (timePassed > 2000) clearInterval(timer);

//       }, 20);
//     }