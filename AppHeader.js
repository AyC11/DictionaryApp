import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Pocket Dictionary</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'maroon',
  },
  text:{
    color: 'white',
    padding: 19,
    fontSize: 20.2,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;