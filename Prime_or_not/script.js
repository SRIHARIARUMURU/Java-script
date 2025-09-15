let r = document.getElementById("r")
let prime = document.getElementById("prime")


function is_prime(n) {
    if (n < 2) return false
    for (let i = 2; i < n; i++) if (n % i == 0) return false
    return true
}

function rand() {
    r.textContent = Math.ceil(Math.random() * 1000)
    if (is_prime(r.textContent)) {
        prime.textContent = "prime"
    }
    else {
        prime.textContent = "Not prime"
    }
}

