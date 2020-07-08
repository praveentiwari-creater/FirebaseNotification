import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Testing2 extends Component {


    redirect(){
         this.props.navigator.push({name:"DetailPage", data:this.state.pageData[1]});
         }



    this.notificationListener = FCM.on(FCMEvent.Notification, notif => {
    console.log("Notification recived", notif);
    if(notif.local_notification){
    console.log("Notification recived local", "local notification");
    
      if(notif.opened_from_tray){
    
         console.log("Notification recived local ", "opened from tray");
    
        setTimeout(() => {
    
        //    console.log('setting page call!'); 
        console.log('this is props',props);
          this.redirect()
          // this.props.navigator.push({name:"Sports"});
        //  // this.props.navigator.push({name:'DetailPage',data:Data});
        }, 5000);
    
         //this.props.navigator.push({name:"Settings"});
    
      }
    
    return;
    }
    if(notif.opened_from_tray){
    
     console.log("Notification recived tray ", "opened from tray");
     //this.props.navigator.replacePrevious({name:"Settings"});
    return;
    }
    
    if(Platform.OS ==='ios'){
    //optional
    //iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link.
    //This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
    //notif._notificationType is available for iOS platfrom
    switch(notif._notificationType){
    case NotificationType.Remote:
    notif.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
    break;
    case NotificationType.NotificationResponse:
    notif.finish();
    break;
    case NotificationType.WillPresent:
    notif.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
    break;
    }
    
}   




    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
