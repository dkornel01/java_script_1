window.addEventListener("load",init)

function init(){
    const articleELEM=document.querySelectorAll("article")
    const button=gomb()
    articleELEM[0].innerHTML=button
    const gombELEM=document.querySelectorAll("article button")
    gombELEM[0].addEventListener("click",function()
    {
        console.log("valami")
    })
    gombELEM[0].addEventListener("click",()=>
    {
        console.log("valami")
    })
    gombELEM[0].addEventListener("click",gombok)

    articleELEM[0].innerHTML+='<button onclick="displayDate()">Katt</button>'
    articleELEM[0].innerHTML+='<div><img src="index.jpg"></img></div>'
    const query=document.querySelectorAll("article img")
    query[0].src="index.jpg"
    query[0].addEventListener("mouseover",function(){
        query[0].style.border="5px solid green";

        query[0].classList.add("formazasClass");
        })
}

function gomb() {
    const button="<button>Katt Ide!</button>"
    return button
}
function displayDate(){
    console.log(Date())
}
function gombok(){
    console.log("valami")
}