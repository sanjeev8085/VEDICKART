const bar = document.getElementById('bar');
const nav = document.getElementById('navebar');
const close = document.getElementById('close');
let img =document.querySelector('#mainImg');
let cart_table_body = document.querySelector('#cart_table_body');
let cart_table = document.querySelector('#cart_table');
let imgsrc;
const Explore_btn =document.querySelectorAll('#Explore_btn');
const shopnowbtn =document.querySelector('#shopnowbtn');

if(window.location.pathname.includes("sproduct.html")){
    
    let sproduct_main_div = document.querySelector('.single-pro-details');

    let sproduct = JSON.parse(localStorage.getItem("sproduct"))||[];

    
    ((document.querySelector('#mainImg')).src)=`${sproduct[0]}`;

    ((sproduct_main_div.querySelector('h4')).innerHTML) = `${sproduct[1]}`;
    ((sproduct_main_div.querySelector('h2')).innerHTML) = `${sproduct[2]}`;

    // localStorage.clear();

}

try{
    shopnowbtn.addEventListener('click',()=>{

    window.location.href = "shop.html";
})
}catch{}


//Explore_btn

try{Explore_btn.forEach((e)=>{
    e.addEventListener('click',()=>{
         window.location.href = "about.html";
       
})
});}catch{}



// localStorage.setItem()

let location1 = ((window.location).pathname);
if(location1.includes("cart.html"){
    


    let cartitemsouter = JSON.parse(localStorage.getItem("cartitems"))||[];
    


    for(let i = 0;i<cartitemsouter.length;i++){

       let cartitems = cartitemsouter[i];

        if(cartitems){

            cart_table.classList.remove('classremove');


        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.innerHTML = `<a href="#" class = "remove"><i class="fas fa-times-circle"></i></a>`
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerHTML= `<img src="${(cartitems[0])}" alt="">`
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerHTML= (cartitems[1]);
        tr.appendChild(td3);

        const td4 = document.createElement('td');
        td4.innerHTML=(cartitems[2]);
        tr.appendChild(td4);

        const td5 = document.createElement('td');
        td5.innerHTML= (cartitems[3]);
        tr.appendChild(td5);

        const td6 = document.createElement('td');
        td6.innerHTML=(cartitems[4]);
        tr.appendChild(td6);

        cart_table_body.appendChild(tr);
 
        cart_table.appendChild(cart_table_body);

        

       
        }



    }

   localStorage.clear();

    
}

//active class on nav bar for heiglight which page open 

  if(nav){
        nav.addEventListener('click',(e)=>{

            
                (document.getElementById('Book')).classList.add('active');
                
                (document.getElementById('Cloths')).classList.add('active');
                (document.getElementById('RitualItem')).classList.add('active');
               
                
    
                (document.getElementById('Home')).classList.remove('active');
                (document.getElementById('Book')).classList.remove('active');
                (document.getElementById('Cloths')).classList.remove('active');
                (document.getElementById('RitualItem')).classList.remove('active');
              
                
                console.log(e.target);
                 e.target.classList.add('active');
         

        })
    }

    // it is for risponsiv website to oprn nav bar when we click on hamburger menue
    if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('activ');
        
        })
    }

    if(close){
        close.addEventListener('click',()=>{
            nav.classList.remove('activ');
            
            })
        }


// for open sproduct from shop page

// try{
    
//     const pimage = document.querySelectorAll('.pro-container');

//     pimage.forEach((pimage)=>{
//         pimage.addEventListener('click',(e)=>{
//         imgsrc= (e.target.src) ;
//         window.location.href = "sproduct.html";
   

// })
//     })

// }catch{}


// for changin large image  
try {let smallimg = document.querySelector('.small-img-group')


smallimg.addEventListener('click',(e)=>{

    console.log("image",imgsrc);
    img.src=(e.target.src);

});
}catch{}


try{const product2 = document.querySelector('#product1'); 

    product2.addEventListener('click',(e)=>{

        
        let pimage = ((((e.target).parentNode).querySelector('img')).src);

        let productname = (((((e.target).parentNode).querySelector('.des')).querySelector('h5')).innerHTML);
        
        let productprice = (((((e.target).parentNode).querySelector('.des')).querySelector('h4')).innerHTML);

        let createSproduct = [pimage,productname,productprice];

       localStorage.setItem("sproduct",JSON.stringify(createSproduct));

        window.location.href = "sproduct.html";
        
    
    })}catch{}



// to add item in cart 

const cart = document.querySelector('#addtocart');

try{cart.addEventListener('click',(e)=>{
    let detail_div = (e.target.parentNode)

    
   
    
    let bigimage = ((e.target.parentNode.parentNode).querySelector('#mainImg').src);
    

     

    let productname = (((detail_div).querySelector('h4')).innerHTML);
    let price = (((detail_div).querySelector('h2')).innerHTML);
    let quantit = (((detail_div).querySelector('input')).value);
    let total = String((Number(((detail_div).querySelector('input')).value))*(Number((((detail_div).querySelector('h2')).innerText).replace("₹",""))));
    
    let cartitem = [bigimage,productname,price,quantit,total]; 

    let existingCart =  JSON.parse(localStorage.getItem("cartitems"))||[];
    existingCart.push(cartitem);
    
    
    localStorage.setItem("cartitems",JSON.stringify(existingCart));
    alert('Item Add to Cart')

})}catch{}

// remove item from cart 

try{
const remove = document.querySelectorAll('.remove');



remove.forEach((removee)=>{
    (removee).addEventListener('click',(e)=>{

        ((e.target).parentNode.parentNode.parentNode).remove();

    })

    

})


}catch{}

