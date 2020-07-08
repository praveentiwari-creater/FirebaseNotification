import React from 'react';
import {View,Text} from 'react-native';
export default class FirstPage extends React.Component{
    render(){
        return(
            <View  >
         <View style={{backgroundColor:'#333300',marginTop:70,width:'auto',height:400}} >
     
        <Text style={{ fontSize: 40,textAlign:'center' ,marginTop:20,color:'white'}}>
          WELCOME
        </Text>
          <Text style={{ fontSize: 40,textAlign:'center' ,marginTop:150,fontWeight:'bold',color:'white'}}>
           First Page
        </Text>
       
        </View>
      </View>
        )
    }
}