import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Button } from 'react-native-elements';


import { Fonts } from '../utils/Fonts';



class FeedbackScreen extends Component {
  static navigationOptions = {
    title: 'Feedback',
    headerStyle: {
      backgroundColor: '#7645C1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.feedBackTitle}>Your feedback would help us so much !</Text>
        <Text style={styles.feedBackDesc}>We are in a super early stage of the app. That's why we really need all the help from you to make the best product out of it.</Text>
        <Button
          style={styles.btn}
          title="Leave your feedback"
          type="outline"
        />
      </View>
    );
  }
}


export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  feedBackTitle: {
    fontSize: 30,
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
  },
  feedBackDesc: {
    fontSize: 16,
    fontFamily: Fonts.PoppinsRegular,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  btn: {
    marginTop: 30,
  }
})