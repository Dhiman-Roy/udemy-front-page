function myfunction (x) {
if (x.matches){
    document.getElementById("udemyBuisnessButton").style.display = "none";
}
 else{
    document.getElementById("udemyBuisnessButton").style.display = "inline";
 }
}

function myfunction1(x1){
    const e =  document.getElementById("catagoryImage");
    const element = e.getElementsByTagName("img");
    if(x1.matches){
        document.getElementById("teachUdemyButton").style.display = "none";
      
       for(let elements of element){
        elements.style.display = "none";
       }
    }
    else{
        document.getElementById("teachUdemyButton").style.display = "inline";
        for(let elements of element){
            elements.style.display = "inline";
           }
    }
}

// function myfunction2(x2){
//     if(x2.matches){
//         document.querySelector(".siteName").style.display = "none";
//         document.querySelector(".Categories").style.display = "none";
//         document.querySelector(".searchBar").style.display = "none";
//         document.querySelector(".loginButton").style.display = "none";
//         document.querySelector(".signupButton").style.display = "none";
//     }
//     else{
//         document.querySelector(".siteName").style.display = "inline";
//         document.querySelector(".Categories").style.display = "inline";
//         document.querySelector(".searchBar").style.display = "inline";
//         document.querySelector(".loginButton").style.display = "inline";
//         document.querySelector(".signupButton").style.display = "inline";
//     }
//     //creating div
   

    
// }

let x = window.matchMedia("(max-width: 1080px)");
myfunction(x);
x.addEventListener("change",myfunction);

let x1 = window.matchMedia("(max-width : 890px)");
myfunction1(x1);
x1.addEventListener("change", myfunction1)

// let x2 = window.matchMedia("(max-width: 750px)");
// myfunction2(x2);
// x2.addEventListener("change", myfunction2);