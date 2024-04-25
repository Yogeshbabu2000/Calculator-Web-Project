function calculator(args){
    document.getElementById("display").value+=args
}
function evaluation(){
    document.getElementById("display").value=eval(document.getElementById("display").value)
}
function allClear(){
    document.getElementById("display").value=''
}
function Delete(){
    let x=document.getElementById("display")
    x.value=x.value.slice(0,-1)
    if(x.value=='')
    x.value=0
}