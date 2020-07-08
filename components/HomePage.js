import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PushNotification from 'react-native-push-notification';
console.disableYellowBox = true;
// import NavigattionTesting from './NavigattionTesting';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
     
    }
    this.handleNotification = this.handleNotification.bind(this);
  }

  handleNotification(notification) {
    let isBackground = notification.foreground;
    if(isBackground == false){
      this.props.navigation.navigate('FirstPage');
    }
    // console.log('handleNotification', (notification.data.data).toString());
    // this.setState({page:(notification.data.data).toString()})
    // this.props.navigation.navigate(this.state.page);
  }

  async componentDidMount() {
    var that = this;

    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        // console.log("datata==>", notification.data)
        // console.log("datataMain==>", notification.data.data)

        that.handleNotification(notification);

        //  NavigattionTesting.Navigattion123(notification.data.data)
        PushNotification.localNotification({
          title: notification.title, // (optional)
          message: notification.message, // (required)
          playSound: false,
        })

      },
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

    });

    console.log('testttttting===>')

  }
  render() {
    return (
      <View  >
         <View style={{backgroundColor:'#99ebff',marginTop:70,width:'auto',height:400}} >
        <TouchableOpacity onPress={() => this.props.navigation.navigate('FirstPage')}>
          <Text style={{ fontSize: 40,textAlign:'center' ,marginTop:150,fontWeight:'bold'}}>
           Home Page
        </Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}


// import React, { Fragment } from 'react';
// import PushController from './PushController';
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, FlatList} from 'react-native';

// import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions }
// from 'react-native/Libraries/NewAppScreen';
// // Dummy data for list, we'll replace this with data received from push
// let pushData = [
//   {
//     title: "First push",
//     message: "First push message"
//   },
//   {
//     title: "Second push",
//     message: "Second push message"
//   }
// ]

// _renderItem = ({ item }) => (
//   <View key={item.title}>
//     <Text style={styles.title}>{item.title}</Text>
//     <Text style={styles.message}>{item.message}</Text>
//   </View>
// );

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           <View style={styles.listHeader}>
//             <Text>Push Notifications</Text>
//           </View>
//           <View style={styles.body}>
//             <FlatList
//               data={pushData}
//               renderItem={(item ) => this._renderItem(item)}
//               keyExtractor={(item ) => item.title}
//             />
//             {/* <LearnMoreLinks /> */}
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//       <PushController/>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {backgroundColor: Colors.lighter,},
//   listHeader:{ backgroundColor: '#eee', color: "#222", height: 44, padding: 12},
//   title:{fontSize: 18, fontWeight: 'bold', paddingTop: 10},
//   message:{ fontSize: 14, paddingBottom: 15, borderBottomColor: "#ccc", borderBottomWidth: 1},
//   engine: { position: 'absolute', right: 0,},
//   body: { backgroundColor: Colors.white, paddingHorizontal: 20, paddingVertical: 10, },
//   sectionContainer: { marginTop: 32, paddingHorizontal: 24, },
//   sectionTitle: { fontSize: 24, fontWeight: '600', color: Colors.black},
//   sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400', color: Colors.dark,},
//   highlight: { fontWeight: '700'},
//   footer: { color: Colors.dark, fontSize: 12, fontWeight: '600', padding: 4, paddingRight: 12, textAlign: 'right',},
// });
// export default App;







