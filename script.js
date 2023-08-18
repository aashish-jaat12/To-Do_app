const input =document.getElementById('input-box')
const btn =document.getElementById('btn')
const addul = document.getElementById('list-container')
 

btn.addEventListener('click', ()=>{

    if(input.value === ""){
        alert('Input box is empty')
    }else{
   
        let li = document.createElement("li")
        li.innerHTML =input.value
        addul.appendChild (li)
        let span = document.createElement("span")
        span.innerHTML ="\u00d7"
        li.appendChild(span)
        // span.addEventListener("click",()=>{
        //    let removeit = span.parentElement(span)
        //     removeit.remove()
        // })
    }
    input.value =""
})


addul.addEventListener('click',(e)=>{

if(e.target.tagName ==="LI"){

    e.target.classList.toggle("checked")
}
    else if(e.target.tagName ==="SPAN"){
     e.target.parentElement.remove()
}
       
    
},false)






