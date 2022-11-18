const express=require('express')
const app=express()
const accounts=require('./data')
const path=require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')


app.get('/:username',(req,res)=>{
    const {username}=req.params
    const currentAccount = accounts.find((acc) => acc.username === username)
    if (currentAccount){
        res.render('show',{currentAccount})
    }
    else{
    res.send('not found')
    }
})

app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/login',(req,res)=>{
    const {username} =req.body
    res.redirect(`/${username}`)

})

app.post('/create/:username',(req,res)=>{
const {username}=req.params
let {peerShare,peerUsername,shareType,expense}=req.body
const currentAccount = accounts.find((acc) => acc.username === username)
const peerAccount = accounts.find((acc) => acc.username === peerUsername)
if (peerAccount && username!==peerUsername){
    currentAccount.amount.push(expense)
    peerAccount.amount.push(expense)
    currentAccount.peer.push(peerUsername)
    peerAccount.peer.push(username)
    if(shareType==="amount"){
        currentAccount.peerShare.push(peerShare)
        peerAccount.share.push(peerShare)
        currentAccount.share.push(expense-peerShare)
        peerAccount.peerShare.push(expense-peerShare)
    }
    else{
        peerShare=parseInt(expense)*peerShare/100
        currentAccount.peerShare.push(peerShare)
        peerAccount.share.push(peerShare)
        currentAccount.share.push(expense-peerShare)
        peerAccount.peerShare.push(expense-peerShare)
    }
}

res.redirect( `/${username}`)

})


app.listen(3000,()=>{
    console.log("Listening to PORT 3000...")
})