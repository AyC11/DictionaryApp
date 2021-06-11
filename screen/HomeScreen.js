import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput, TextComponent, Button } from 'react-native';
import { Component } from 'react'
import Constants from 'expo-constants';
import AppHeader from '../AppHeader';
export default class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      text: ''

    }

  }
  getWord = (word) => {
   
    var searchKeyboard = word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyboard + ".json"
     
    return fetch(url)
      .then((data) => {
      
        if (data.status === 200) {
          return data.json()
        }
        else {
          return null
        }
      })
  
   .then((response)=> {

        var responseObject = response
       
     if(responseObject) {
          var WordData = responseObject.definitions[0]
          
          var definition = WordData.description;
          var lexicalCategory = WordData.wordtype
 
          this.setState({
            "word": this.state.text,
            "definition": definition,
            "lexicalCategory": lexicalCategory
          })
        }
     else{
          this.setState({
            "word": this.state.text,
            "definition": "not Found",
          })
        }
      }
   );}
  render() {
    return (
      <View>
        <AppHeader />
        <View Style={styles.inputContainer}>

          <TextInput style={{ height: 40, width: "75%", borderColor: 'gray', borderWidth: 3, marginBottom: 20, marginLeft: 50 }}
            onChangeText={text => {
              this.setState({
                text: text,
                isSearchPressed: false,
                word: "Loading ...",
                lexicalCategory: '',
                example: [],
                defination: ""
              });
            }}
            value={this.state.text} />
          <TouchableOpacity
            style={styles.SearchButton}
            onPress={() => {
              this.setState({ isSearchPressed:true });
              this.getWord(this.state.text);
            }}>
            <Text style={{ marginLeft: '20%' }}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailscontainer}>
          <Text style={styles.detailsTitle}>
            Word:{" "}
      </Text>
          <Text style={{ fontSize: 18 }}>
            {this.state.word}
          </Text>
        </View>
        <View style={styles.detailscontainer}>
          <Text style={styles.detailsTitle}>
            Type:{" "}
      </Text>
          <Text style={{ fontSize: 18 }}>
            {this.state.lexicalCategory}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flexrap: 'wrap' }}>
          <Text style={styles.detailsTitle}>
            Definition:{" "}
      </Text>
          <Text style={{ fontSize: 18 }}>
            {this.state.definition}
          </Text>
        </View>
      </View>
    )

  }}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1

    },
    detailsTitle:{
      color:'orange',
      textSize:24
    },
    SearchButton: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: 15,
      marginTop: 50,
      height: 30,
      width: 100,
      backgroundColor:'blueviolet'
    },
    inputContainer: {
      borderLeftWidth: 4,
      borderRightWidth: 4,
      height: 70
    },
    input: {
      height: 70,
      backgroundColor: '#ffffff',
      paddingLeft: 15,
      paddingRight: 15
    },

  })