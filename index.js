let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ]
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")

function generatePassword() {
    let passwordArr = []
    for (let i = 0; i < 15; i++) {
        let num = Math.floor(Math.random() * chars.length)
        passwordArr.push(chars[num])
    }
    let password = passwordArr.join("")
    return password
}

function fillPasswords() {
    button1.value = generatePassword()
    button2.value = generatePassword()
    button3.value = generatePassword()
    button4.value = generatePassword()
}