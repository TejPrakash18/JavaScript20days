let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let sec =  document.querySelector("#sec")

setInterval(()=>{
    let time = new Date();

    hours.innerHTML = (time.getHours()<10?"0":"")+time.getHours();
    minutes.innerHTML = (time.getMinutes()<10?"0":"")+time.getMinutes();
    sec.innerHTML = (time.getSeconds()<10?"0":"")+time.getSeconds();
    
},1000)


