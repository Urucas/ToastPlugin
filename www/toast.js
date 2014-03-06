try{
    var toast = {
        alert: function(message, duration, success, error){
            //params (success, error, "ToastPlugin", "alert", [{text:"","duration":"short|long"}])
            cordova.exec( success, error, "ToastPlugin", "alert", [{"text":message, "duration": duration}] );
        }
    }
    module.exports = toast;
}catch(e){console.log("toast->"+e.message)}

