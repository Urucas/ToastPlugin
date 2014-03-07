try{
    var toast = {
        /*
		 *
		 * @message: String
		 * @duration: String ["long" : "short"]
		 * @success: Function
		 * @error: Function
		 *
		 */
        alert: function(message, duration, success, error){
			if(message == undefined) {
				console.log("toast called without message");
				return;
			}
			duration = duration == undefined ? "long" : duration;
			if(success == undefined && !success instanceof Function) {
				success = null;
			}
			if(error == undefined && !error instanceof Function) {
				error = null;
			}
            cordova.exec( success, error, "ToastPlugin", "alert", [{"text":message, "duration": duration}] );
        }
    }
    module.exports = toast;

}catch(e){
	console.log("toast->"+e.message)
}

