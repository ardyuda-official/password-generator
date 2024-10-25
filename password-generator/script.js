let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genButton = document.getElementById("genBtn");
let password = document.getElementById("password");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", ()=>{
    sliderValue.textContent = inputSlider.value;
});

genButton.addEventListener("click", () => {
    password.value = generatePassword();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let numberChars = "1234567890"
let symbolChars = "~!@#$%^&*"
function generatePassword(){
    let genPassword="";
    let allChars="";

    allChars += uppercase.checked ? upperChars : "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += numbers.checked ? numberChars : "";
    allChars += symbols.checked ? symbolChars : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i=1;
    while (i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword

}

copyIcon.addEventListener("click", () => {
    if (password.value != "" || password.value.length >= 1) {
        navigator.clipboard.writeText(password.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";
        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
    
})
