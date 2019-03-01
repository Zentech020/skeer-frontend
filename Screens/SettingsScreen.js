import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { List, ListItem, SearchBar, Icon } from "react-native-elements";


class SettingsScreen extends Component {

  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#7645C1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      notificationsOn: false,
      isOn: false,
    }
  }

  goToInfo = () => {
    this.props.navigation.push('Info');
  }


  goToFeedback = () => {
    this.props.navigation.push('Feedback');
  }

  goToAbout = () => {
    this.props.navigation.push('About');
  }

  render() {
    const { notificationsOn } = this.state;

    return (
      <View>
        <ListItem
          title='About'
          leftIcon={{ name: 'person' }}
          chevron
          onPress={() => this.goToAbout()}
        />
        <ListItem
          title='Notifications'
          leftIcon={{ name: 'notifications' }}
          switch={{
            value: this.state.isOn,
            onValueChange: value => this.setState({ isOn: value }),
          }}
        />
        <ListItem
          title='Info'
          leftIcon={{ name: 'help' }}
          chevron
          onPress={() => this.goToInfo()}
        />
        <ListItem
          title='Feedback'
          leftIcon={{ name: 'feedback' }}
          chevron
          onPress={() => this.goToFeedback()}
        />
      </View>
    )
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
})