

function myfun(){
    let x=document.querySelector("#test");
    x.innerHTML="Hello"
}

const b=document.getElementById("demo");

b.addEventListener('click',function(){
    console.log("WC")
});


const d= document.getElementById("divv")

b.addEventListener('click',function(){
    console.log("btn")
});

d.addEventListener('click',function(){
    console.log("div")
});


const d1=document.getElementById("divv")

b.addEventListener('click',function(){
    console.log("btn")
},true);

d1.addEventListener('click',function(){
    console.log("divv")
},true);


