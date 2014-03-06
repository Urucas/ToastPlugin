try{
    console.log("toast->cargo js");
    window.toast = function(message, duration, success, error){
    //params (success, error, "ToastPlugin", "alert", [{text:"","duration":"short|long"}])
    cordova.exec( success, error, "ToastPlugin", "alert", [{"text":message, "duration": duration}] );
}
}catch(e){console.log("toast->"+e.message)}

