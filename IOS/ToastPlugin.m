#import "ToastPlugin.h"
#import "AppDelegate.h"
#import "MainViewController.h"

@implementation ToastPlugin


@synthesize callbackID;
@synthesize alert;

/*
 * Metodo para mostrar los popups toast 
 * ver http://code.google.com/p/toast-notifications-ios/ 
 */
-(void)toast:(CDVInvokedUrlCommand*)command
{
    
    CDVPluginResult* pluginResult = nil;
    NSString* myarg = [command.arguments objectAtIndex:0];
    
    [[[[iToast makeText:NSLocalizedString(myarg, @"")]
       setGravity:iToastGravityBottom] setDuration:iToastDurationNormal] show];
    
    if (myarg != nil) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

    
}

@end
