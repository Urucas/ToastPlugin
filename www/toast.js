function toast(message, duration, success, error){
    //params (success, error, "ToastPlugin", "alert", [{text:"","duration":"short|long"}])
    cordova.exec( success, error, "ToastPlugin", "alert", [{"text":message, "duration": duration}] );
}
