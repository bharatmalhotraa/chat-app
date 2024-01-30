const messagebox=document.getElementById('messagecontainer')
const socket =io()
function sendmessage(){
    text=document.getElementById("input").value;
    names=document.getElementById("nameinput").value;
    dat={
        from:`${names}`,
        message:`${text}`,
    }
    socket.emit('message',dat)
    console.log('message sent')
    messagetoui('true',dat)
}
socket.on('messagereceive',(data)=>{
    console.log(data.message)
    messagetoui(false,data)
})
function messagetoui(isown,data){
    var time=new Date()

    const element=`<li class="${isown? "right" : "left"}">
            <p class="final">${data.message}</p>
            <span class="span">${data.from}.${time.getHours()}:${time.getMinutes()}</span>
            </li>`
    messagebox.innerHTML += element
}
function confirmation_link(){
    window.location.href = "confirmation.html"
}