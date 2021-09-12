console.log("hello")
let b = 9
if(b % 2 == 0)
{console.log("So chan")}
else if(b % 3 == 0)
{console.log("chia het cho 3")}
let input = prompt("mời nhập 1 số từ 1 tới số 15")
console.log(input)
let number = ParseInt(input)
console.log(number)
for(let i = 1; i < 30; i = i + 1){
    if(i % number == 0)
    {
        console.log(i + "Là bội")
    }
    else{ i + "Ko là bội"}
}
