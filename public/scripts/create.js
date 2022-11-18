const peerUsername=document.getElementById("peerUsername")
const expense=document.getElementById("totalAmount")
const peerShare=document.getElementById("peerShare")

peerShare.addEventListener("click",()=>{
if (expense.value){
    const shareType=document.querySelector('input[name="shareType"]:checked').value
    if(shareType==="amount"){
        peerShare.max=expense.value
    }
    else{
        peerShare.max=100        
    }

}
else{
    alert('type the expense')
}
})