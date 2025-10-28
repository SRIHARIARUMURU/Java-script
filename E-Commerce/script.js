let sub = document.getElementById("sub");
let cart_btn = document.getElementById("cart_btn");
let search=document.getElementById("search");
let all_products=[]

// ---------------------------------------------------------------------------------------------------------

function fetchdata() {
    fetch('https://fakestoreapi.com/products')
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            all_products=data
            displaydata(data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

// ---------------------------------------------------------------------------------------------------------

let cart = getdata()
let total_amount_val=total_amount();
cart_btn.textContent = `Cart (${cart.length})`

// ---------------------------------------------------------------------------------------------------------

function displaydata(products) {
    for (let product of products) {
        displaycard(product);
    }
}

// ---------------------------------------------------------------------------------------------------------

function displaycard(product) {
    let div = document.createElement("div");
    div.classList.add('card');
    sub.appendChild(div);

    let image = document.createElement("img");
    image.src = product.image;
    image.classList.add('image');
    div.appendChild(image);

    let h3 = document.createElement("h3")
    h3.textContent = product.title.substr(0, 20);
    h3.classList.add('title');
    div.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = product.description.substr(0, 100);
    p.classList.add('description');
    div.appendChild(p);

    let price = document.createElement("h3");
    price.textContent = "Price : $" + product.price;
    price.classList.add('price');
    div.appendChild(price);

    let h4 = document.createElement("h4");
    h4.textContent = "Rating : " + product.rating.rate + "(" + product.rating.count + ")";
    h4.classList.add('rating');
    div.appendChild(h4);

    let button = document.createElement("button");
    button.textContent = 'Add to cart';
    button.classList.add('button');
    div.appendChild(button);

    button.onclick = function () {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        localStorage.setItem('Item_count', cart.length);
        cart_btn.textContent = `Cart (${localStorage.getItem('Item_count')})`;

        let total_amount_val=total_amount();
        localStorage.setItem('total_amount', total_amount_val);
    }

}

// ---------------------------------------------------------------------------------------------------------

function total_amount(){
    let total=0;
    for(let item of cart){
        total+=item.price;
    }
    return total.toFixed(2);
}

// ---------------------------------------------------------------------------------------------------------

function getdata() {
    let data = localStorage.getItem('cart');
    if (data == null) {
        return [];
    }
    else {
        return JSON.parse(data);
    }
}

// ---------------------------------------------------------------------------------------------------------

search.onkeyup=function(event){
    let arr=[];
    if(event.key=='Enter'){
    for(let i of all_products){
        console.log(i)
        if(i.title.toLowerCase().includes(event.target.value.toLowerCase())){
            arr.push(i);
        }
    }
        sub.textContent='';
        console.log(arr==0)
        if(arr.length==0){
            let h1=document.createElement('h1')
            h1.textContent='No Product Found'
            sub.appendChild(h1)
        }
        else{
            for(let i of arr){
                displaycard(i)
            }
        }
    }
}

fetchdata();

// ---------------------------------------------------------------------------------------------------------