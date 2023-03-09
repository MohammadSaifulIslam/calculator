let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
console.log(string)
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.innerText)
        // this code run when user clicked equal btn
        if (e.target.innerText === "=") {
            string = eval(string);
            input.value = string
            console.log(string)
        } else if (e.target.innerText === "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerText === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerText;
            input.value = string
        }

    })
})