function password(){
var len =parseInt(document.getElementById("len").value)
var rd1 = document.getElementById("rd1")
var rd2 = document.getElementById("rd2")
var rd3 = document.getElementById("rd3")
var rd4 = document.getElementById("rd4")
var rd5 = document.getElementById("rd5")
var rd6 = document.getElementById("rd6")
var rd7 = document.getElementById("rd7")
var rd8 = document.getElementById("rd8")
var uc = []
var lc = []
var num = []
var sym = []
if(rd1.checked==true){
    var uc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
}
if (rd3.checked==true){
    var lc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
}
if (rd5.checked==true){
    var num = [0,1,2,3,4,5,6,7,8,9]
}
if (rd7.checked==true){
    var sym = ['@','!','#','$','%','&','*']
}
var whole = uc.concat(lc,num,sym)
var psw = ""
for(var i=0; i<=(len-1); i++){
   var char = Math.floor(Math.random()*(whole.length)) 
   psw=psw+whole[char]
   console.log(psw);
}
document.getElementById("pswd").innerHTML=psw
}
