import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TabNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import SplashScreen from 'react-native-splash-screen'


import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(logger, thunk))



import HomeScreen from './Screens/HomeScreen';
import ListScreen from './Screens/ListScreen';
import SingleDealScreen from './Screens/SingleDeal';
import SearchScreen from './Screens/SearchScreen';
import SettingsScreen from './Screens/SettingsScreen';
import InfoScreen from './Screens/InfoScreen';
import FeedbackScreen from './Screens/FeedbackScreen';
import AboutScreen from './Screens/AboutScreen';



const HomeTab = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  SingleDeal: {
    screen: SingleDealScreen
  }
});

const SearchTab = createStackNavigator({
  Search: {
    screen: SearchScreen
  }
});

const ListTab = createStackNavigator({
  List: {
    screen: ListScreen
  }
});

const SettingsTab = createStackNavigator({
  Setting: {
    screen: SettingsScreen
  },
  Info: {
    screen: InfoScreen
  },
  Feedback: {
    screen: FeedbackScreen
  },
  About: {
    screen: AboutScreen
  }
});

const Navigation = createBottomTabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color={tintColor} />
      ),
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    },
  },
  Search: {
    screen: SearchTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={30} color={tintColor} />
      )
    },
  },
  List: {
    screen: ListTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={30} color={tintColor} />
      ),
      title: 'Your List',
    },
  },
  Setting: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" size={30} color={tintColor} />
      ),
      headerTitle: 'My Settings',
    },
  },

});

class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App;
