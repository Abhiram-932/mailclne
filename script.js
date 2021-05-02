function sendMail(params){
    var tempParams={
        from_name:document.getElementById("fromName").Value,
        
        message:document.getElementById("msg").Value,
    };
    emailjs.send("service_gje9imk","template_9s4qrjo",tempParams)
    .then(function(res){
        console.log("success",res.status)
    })

}