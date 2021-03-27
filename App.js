/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Header from './src/header';

class App extends Component{

  state = {
    appName: 'My First App'
  }

  render() {
    return(
      <View style={styles.mainView}>
        <Header name={this.state.appName}/>
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  mainView: {
        backgroundColor: 'white',
        flex:1,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
  },
  subView:{
    backgroundColor: 'yellow',
    marginBottom :20
  },
  anotherSubView:{
    flex:2,
    backgroundColor: 'yellow',
    marginBottom :10,
    width: '100%',
    alignItems :'center',
    justifyContent: 'center'
  },
  mainText:{
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding:20
  }
})
export default App;