const contact = document.getElementById('contact');
const faqs = document.getElementById('faqs');
    const btns = document.querySelectorAll(".btn");
    const storeProducts = document.querySelectorAll(".store-product");
    
    
    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            console.log(filter);
            console.log("ju");
            storeProducts.forEach((productt) => {
                productt.removeAttribute("data-aos")
                if (filter ==
                    "all") {
                    productt.style.display = 'block'
                    contact.style.display='block'
                    faqs.style.display='block'
                } else {
                    if (productt.classList.contains(filter)) {
                        productt.style.display = 'block';
                        contact.style.display='none';
                        faqs.style.display='none';
                        productt.removeAttribute("data-aos")
                        

                    } else {
                        productt.style.display = 'none';
                    }
                }
            })
        })
    } 
    const searching = () => {
        let search = document.getElementById('search').value.toUpperCase();
        let productdetails = document.getElementsByClassName('product-details');
        for(var i=0; i<productdetails.length;i++){
            let storeProducts = productdetails[i].parentElement
            let h2 = productdetails[i].getElementsByTagName('h2')[0];
            let txtval = h2.textContent;
            if(txtval.toUpperCase().indexOf(search)>-1){
                productdetails[i].style.display='block';
                storeProducts.style.display='block';
                storeProducts.removeAttribute("data-aos");
                // contact.style.display='none';
                // faqs.style.display='none';
                
                
            }else{
                productdetails[i].style.display='none';
                storeProducts.style.display='none';
            }
            
        }
    }
    const cartbtn = document.querySelector('.cartbtn');
    const closecart = document.querySelector('.close-cart');
    const clearcart= document.querySelector('.clear-cart')
 const cartDOM = document.querySelector('.cart');
 const cartItems = document.querySelector('.cart-item')
 const cartOverlay = document.querySelector('.cart-overlay');
 const cartTotal = document.querySelector('.cart-total');
 const cartContent = document.querySelector('.cart-content');
 const storeProductsss = document.querySelector('#store-products')
//  const storeProducts = document.querySelectorAll('.store-product')
// const savage = document.querySelector('.savage');

 let cart = [];
 let buttonsDOM = [];
//  getting products 
 class Products{
 async getProducts(){
     try{
     
      let result= await fetch('products.json');
      let data = await result.json();
      let products = data.items;
      products = products.map(item =>{
          const {title,price,rite,image} = item.fields;
          const {id} = item.sys;
        //   const image = item.fields;
          return {title,price,rite,image,id};
      })
      return products;
      
  }
  catch(error){
console.log(error);
  }
}
 }
// display products 
class UI{ 
funding(products){
const contact = document.getElementById('contact');
const faqs = document.getElementById('faqs');
    const btns = document.querySelectorAll(".btn");
    const storeProducts = document.querySelectorAll(".store-product");
const savage = document.getElementById('savages')
    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            console.log(filter);
            console.log("jukk");
            storeProducts.forEach((productt) => {
                productt.removeAttribute("data-aos")
                if (filter ==
                    "all") {
                    productt.style.display = 'block'
                    contact.style.display='block'
                    faqs.style.display='block'
                } else {
                    if (productt.classList.contains(filter)) {
                        productt.style.display = 'block';
                        contact.style.display='block';
                        faqs.style.display='block';
                        savages.style.display='block';
                        savages.removeAttribute("data-aos");
                     contact.removeAttribute("data-aos");
                     faqs.removeAttribute("data-aos")
                        productt.removeAttribute("data-aos")
                        

                    } else {
                        productt.style.display = 'none';
                    }
                }
            })
        })
    } 
}
searching(products){
        let search = document.getElementById('search').value.toUpperCase();
        let productdetails = document.getElementsByClassName('product-details');
        for(var i=0; i<productdetails.length;i++){
            let storeProducts = productdetails[i].parentElement
            let h2 = productdetails[i].getElementsByTagName('h2')[0];
            let txtval = h2.textContent;
            if(txtval.toUpperCase().indexOf(search)>-1){
                productdetails[i].style.display='block';
                storeProducts.style.display='block';
                storeProducts.removeAttribute("data-aos");
                // contact.style.display='none';
                // faqs.style.display='none';
                
                
            }else{
                productdetails[i].style.display='none';
                storeProducts.style.display='none';
            }
            
        }
    }
displayProducts(products){
console.log(products);
let result = '';
products.forEach(product =>{
result += `   <div class ="store-product ${product.rite}" >
                <img src= ${product.image} alt="" width="200px" height="200px" >
                <div class="product-details" >
                    <h2>${product.title}</h2>
                    <p><span>Rs. ${product.price}</span></p>
                    <a class="go" data-id = ${product.id}>+Cart</a>
                </div>
            </div>`
});
storeProductsss.innerHTML= result;
}

getbtns(){
const go = [...document.querySelectorAll('.go')];
console.log(go);
buttonsDOM = go;
go.forEach(a => {
    let id = a.dataset.id;
    console.log(id);
    let inCart = cart.find(item => item.id== id);
    if(inCart){
        a.innerText = "In cart";
        a.style.backgroundcolor  =  'green';
        a.disabled = true
    }
        a.addEventListener('click',(event)=>{
            event.target.innerText = "In cart";
            event.target.disabled = true;
            // get product from products 
            let cartItem = {...Storage.getProduct(id),amount:1};
            console.log(cartItem);
            cart = [...cart,cartItem];
            // add product to cart 
            // save cart in local storage 
            Storage.saveCart(cart)
            // set cart values 
            this.setCartValue(cart)
            // display cart item 
            this.addCartItem(cartItem);
            // show the cart 
             this.showCart();
             
        })
    
})
}
setCartValue(cart){
let cft = document.querySelector('.cart-footer')
let temptotal = 0;
let itemsTotal = 0;
cart.map(item=>{
    temptotal += item.price * item.amount;
    itemsTotal += item.amount;
})
cartTotal.innerText = parseFloat(temptotal.toFixed(2))
cartItems.innerText = itemsTotal;
if(itemsTotal=0){
cft.style.display='none';
}else{
    cft.style.display = 'block';
}

console.log(cartTotal);

}
addCartItem(item){
const div = document.createElement('div');
div.classList.add('cart-item');
div.innerHTML = `   <img src=${item.image} alt="">
        
        <div>
            <h4>${item.title}</h4>
            <h5>Rs. ${item.price}</h5>
            <span class="remove-item" data-id=${item.id}>remove</span>
        </div>
            <div>
                <span class="up" data-id=${item.id}>+</span>
                <p class="item-amount">${item.amount}</p>
                <span class="down" data-id=${item.id}>-</span>

                </div>`;
                
                // savage.style.display='none';
                cartContent.appendChild(div);
}
showCart(){
cartOverlay.classList.add('transparentBcg');
cartDOM.classList.add('showCart');
console.log("jj");
// savage.style.display='block';
}
setupAPP() {
cart = Storage.getCart();
this.setCartValue(cart);
this.populateCart(cart);
cartbtn.addEventListener('click',this.showCart);
closecart.addEventListener('click',this.hideCart)


}
populateCart(cart){
cart.forEach(item => this.addCartItem(item));


}
hideCart(){
cartOverlay.classList.remove("transparentBcg");
cartDOM.classList.remove("showCart");
console.log("joj");
}



clearit(){
clearcart.addEventListener('click', ()=>{this.clearCart()});
cartContent.addEventListener('click', event=>{
    if(event.target.classList.contains('remove-item')){
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild
        (removeItem.parentElement.parentElement);
        this.removeItem(id);
    }else if(event.target.classList.contains("up")){
        let addAmount = event.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find(item => item.id==id);
        tempItem.amount = tempItem.amount + 1;
        Storage.saveCart(cart);
        this.setCartValue(cart);
        addAmount.nextElementSibling.innerText = tempItem.amount
        
    }else if(event.target.classList.contains("down")){
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find(item=> item.id==id);
        tempItem.amount = tempItem.amount -1;
        if(tempItem.amount >0){
            Storage.saveCart(cart);
            this.setCartValue(cart);
            lowerAmount.previousElementSibling.innerText= tempItem.amount;
        }
        else{
            cartContent.removeChild
            (lowerAmount.parentElement.parentElement);
            this.removeItem(id)
        }
      
    }
});
// this function add event listeners to all the elements in cart content 


}
clearCart(){
let cartItems=cart.map(item => item.id);
cartItems.forEach(id => this.removeItem(id));
while(cartContent.children.length>0){
    cartContent.removeChild(cartContent.children[0]);
}this.hideCart();
}
removeItem(id){
cart = cart.filter(item => item.id !== id)
this.setCartValue(cart);

Storage.saveCart(cart);
let button = this.getSingleButton(id);
button.disabled = false;
button.innerText = "+Cart"; 
}
getSingleButton(id){
return buttonsDOM.find(button => button.dataset.id==id);
}
}


// local storage 
class Storage{
static saveProducts(products){
    
    localStorage.setItem("products",JSON.stringify(products));
console.log(localStorage);
}
static getProduct(id){
let products = JSON.parse(localStorage.getItem('products'));
return products.find(product => product.id == id)

}
static saveCart(cart){
localStorage.setItem('cart',JSON.stringify(cart))
}
static getCart(){
return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}
}
document.addEventListener("DOMContentLoaded",()=>{
const ui = new UI();
const products = new Products();
// const storage = new Storage();
ui.setupAPP()

products.getProducts().then(products => {
     ui.displayProducts(products);
     ui.searching(products);
     ui.funding(products);
    Storage.saveProducts(products);
}).then(()=>{
    ui.getbtns()
    ui.clearit()

});
})
