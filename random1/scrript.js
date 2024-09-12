let generateotp =()=>{

    const otplength = 6;

    const otp =Math.floor(Math.random() * Math.pow(10 , otplength));


    document.getElementById("otpdisplay").innerText=`${otp}`;

};


document.getElementById("GenerateBtn").addEventListener("click",generateotp);

window.addEventListener("load",generateotp);
