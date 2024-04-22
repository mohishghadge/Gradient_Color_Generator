let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2")
let copyDiv = document.querySelector(".copyCode")

const hexValues = () => {
    let hexNums = "0123456789abcdef";
    let colors = "#";
    for(let  i=0 ; i < 6; i++){
        colors = colors + hexNums[Math.floor(Math.random() *16 )] 
    }
    return colors;
    
   // console.log(colors)
}
let rgb1 = hexValues();
const handleButton1 =()=>{
 rgb1 = hexValues();
document.getElementById("myButton").innerText = rgb1
document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`
 copyDiv.innerHTML =`background-image:linear-gradient(to right,${rgb1},${rgb2})`
 
}


let rgb2 = hexValues();
const handleButton2 =()=>{
let rgb2 = hexValues();
document.getElementById("myButton2").innerText = rgb2
document.body.style.backgroundImage = 
`linear-gradient(to right,${rgb1},${rgb2})`
copyDiv.innerHTML =`background-image:linear-gradient(to right,${rgb1},${rgb2})`
}


    copyDiv.addEventListener('click',()=>{
        navigator.clipboard.writeText(copyDiv.innerText)
        
    })
btn1.addEventListener('click',handleButton1);
btn2.addEventListener('click',handleButton2);