let mycart = document.getElementById("mycart");
let price_tag = document.getElementById('price_tag')
let total_amount_tag = document.getElementById('total_amount_tag')
let cart_btn = document.getElementById("cart_btn")
let search = document.getElementById("search");

// ---------------------------------------------------------------------------------------------------------

function getdata() {
    let data = localStorage.getItem('cart')
    if (data == null) {
        return []
    }
    else {
        return JSON.parse(data)
    }
}

// ---------------------------------------------------------------------------------------------------------

let cart = getdata();
let new_total = total_amount();
total_amount_tag.textContent = `Total Cart Amount = ${new_total.toFixed(2)}`;
localStorage.setItem('total_amount', new_total);
cart_btn.textContent = `Cart (${cart.length})`

// ---------------------------------------------------------------------------------------------------------

for (let product of cart) {
    displaycart_cards(product)
}

// ---------------------------------------------------------------------------------------------------------

function displaycart_cards(product) {
    let div = document.createElement("div")
    div.classList.add('card')
    mycart.appendChild(div)

    let image = document.createElement("img")
    image.src = product.image
    image.classList.add('image')
    div.appendChild(image)

    let h3 = document.createElement("h3")
    h3.textContent = product.title.substr(0, 20)
    h3.classList.add('title')
    div.appendChild(h3)

    let p = document.createElement("p")
    p.textContent = product.description.substr(0, 100)
    p.classList.add('description')
    div.appendChild(p)

    let price = document.createElement("h3")
    price.textContent = "Price : $" + product.price
    price.classList.add('price')
    div.appendChild(price)

    let h4 = document.createElement("h4")
    h4.textContent = "Rating : " + product.rating.rate + "(" + product.rating.count + ")"
    h4.classList.add('rating')
    div.appendChild(h4)

    let button = document.createElement("button")
    button.textContent = 'Delete'
    button.classList.add('button')
    div.appendChild(button)


    button.onclick = function () {
        remove_product(product)
        mycart.removeChild(div)

        localStorage.setItem('Item_count', cart.length)
        cart_btn.textContent = `Cart (${localStorage.getItem('Item_count')})`

        let new_total = total_amount()
        localStorage.setItem('total_amount', new_total)

        total_amount_tag.textContent = `Total Cart Amount = ${new_total.toFixed(2)}`
        // alert("Your item removed Successfully")
    }
}
// ---------------------------------------------------------------------------------------------------------

function total_amount() {
    let total = 0;
    for (let item of cart) {
        total += item.price;
    }
    return total;
}
// ---------------------------------------------------------------------------------------------------------

function remove_product(product) {
    for (let i of cart) {
        if (i == product) {
            let ind = cart.indexOf(i);
            cart.splice(ind, 1)
            break
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}
// ---------------------------------------------------------------------------------------------------------
search.onkeyup = function (event) {
    let arr = [];
    if (event.key == 'Enter') {
        for (let i of cart) {
            // console.log(i)
            if (i.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                arr.push(i);
            }
        }
        mycart.textContent = '';
        if (arr.length === 0) {
            let h1 = document.createElement('h1')
            h1.textContent = 'No Product Found'
            mycart.appendChild(h1)
        }
        else {
            for (let i of arr) {
                displaycart_cards(i)
            }
        }
    }
}
