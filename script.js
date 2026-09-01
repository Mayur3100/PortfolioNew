// Typing Effect

const text=[
"Web Developer",
"Java Programmer",
"Data Science Student",
"Machine Learning Enthusiast"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function typing(){

current=text[i];

document.getElementById("typing").innerHTML=current.substring(0,j);

if(!isDeleting){

j++;

if(j>current.length){

isDeleting=true;

setTimeout(typing,1000);

return;

}

}

else{

j--;

if(j==0){

isDeleting=false;

i++;

if(i==text.length)

i=0;

}

}

setTimeout(typing,100);

}

typing();


// Dark Mode

const btn=document.getElementById("themeBtn");

btn.onclick=()=>{

document.body.classList.toggle("dark");

btn.innerHTML=document.body.classList.contains("dark")
?"☀️":"🌙";

}


// Scroll Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

})

})

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});