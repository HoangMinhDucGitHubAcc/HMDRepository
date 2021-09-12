let formLogIn = document.getElementById("log-in form")
let user = document.getElementById("user")
let pass = document.getElementById("pass")

const correctUser = "truongan"
const correctPass = "123456"

console.dir(formLogIn)
console.dir(pass)
console.dir(user)

formLogIn.addEventListener("submit", (e)=>{
    e.preventDefault()

    let userValue = document.getElementById("user").value
    let passValue = document.getElementById("pass").value
    console.log(userValue)
    console.log(passValue)
    if (userValue ===correctUser && passValue === correctPass){
        //alert("dang nhap thanh cong")
        document.location.href = "homepage.html"
    } else {
        alert("sai ten dang nhap hoac mat khau")
    }
})
let signUpForm = document.getElementById("sign-up-form");
let userSignUp = document.getElementById("userSignUp");
let passSignUp = document.getElementById("passSignUp");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let signUpUserValue = userSignUp.value;
  let signUpPassValue = passSignUp.value;
  console.log(signUpPassValue);
  console.log(signUpUserValue);
  
});