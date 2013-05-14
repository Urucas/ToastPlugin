package com.urucas.plugins;

/*!
 *  
 * ToastPlugin.java
 * Created By Urucas
 * 
 * The source Code is available under 
 * same licenses as javamail which are:
 * CDDL-1.0, GPL-2.0, BSD
 * 
 */

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.widget.Toast;

public class ToastPlugin extends CordovaPlugin {

	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        
		if(action.equals("alert")) {
			
			JSONObject params = args.getJSONObject(0);
			String text = params.getString("text");
			String duration = params.getString("duration");
			
			this.alert(text, duration, callbackContext);
        	return true;
        }
        return false;
    }
	
	private void alert(String text, String duration, CallbackContext callbackContext) {

		Context context = this.cordova.getActivity();
    	
    	int duration1;
    	if(duration.toLowerCase().equals("long")) {
    		duration1 = Toast.LENGTH_LONG;
    	}else{
    		duration1 = Toast.LENGTH_SHORT;
    	}
    	Toast toast = Toast.makeText(context, text, duration1);
    	toast.show();
	}
}
