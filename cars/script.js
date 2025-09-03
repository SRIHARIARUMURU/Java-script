let members = document.getElementById("members")
let cars = document.getElementById("cars")

function count_button() {
    let car = ~~(members.value / 5);
    let rem = members.value % 5;
    if (rem >= 1) {
        car += 1;
    }
    cars.textContent = "Required Cars: "+car
}