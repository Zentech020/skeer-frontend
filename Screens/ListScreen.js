import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, SafeAreaView, AsyncStorage, Alert, } from 'react-native';
import { List, ListItem, SearchBar, Icon } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import CustomListview from '../components/CustomListview';
import { connect } from 'react-redux';

import { getList } from "../actions";

import HeinekenLogo from '../assets/images/HeinekenLogo.png';

class ListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      savedProducts: [],
      isFetching: false,
    };
  }

  static navigationOptions = {
    title: 'List',
    headerStyle: {
      backgroundColor: '#7645C1',
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTruncatedBackTitle: 'Nah',
  }

  componentDidMount() {
    AsyncStorage.getItem('savedProducts', (err, result) => {
      this.setState({ savedProducts: JSON.parse(result), loading: false, })
    });
  }

  openDeleteAlert = (item) => {
    Alert.alert(
      `Deleting ${item.name}`,
      'Alert message here...',
      [
        { text: 'NO', style: 'cancel' },
        { text: 'YES DELETE', onPress: () => this.deleteProduct(item) },]
    );
  }

  loadProducts = () => {
    AsyncStorage.getItem('savedProducts', (err, result) => {
      this.setState({ savedProducts: JSON.parse(result), loading: false, isFetching: false })
    });
  }



  deleteProduct = async (item) => {
    try {
      let usersJSON = await AsyncStorage.getItem('savedProducts');
      let usersArray = JSON.parse(usersJSON);
      alteredUsers = usersArray.filter(function (e) {
        return e.id !== item.id

      })
      AsyncStorage.setItem('savedProducts', JSON.stringify(alteredUsers));
      this.setState({
        savedProducts: alteredUsers
      })
    }
    catch (error) {
      console.log(error)
    }
  };

  _handleRefresh = () => {
    this.setState({ isFetching: true }, () => this.loadProducts());
  }

  keyExtractor = (item, index) => index

  renderItem = ({ item }) => (
    <ListItem
      key={item.id}
      leftAvatar={{ source: { uri: 'https://logo.clearbit.com/coca-cola.ru' } }}
      title={item.name}
      rightIcon={<Icon name="delete" size={30} color="#E50000"
        onPress={() => this.openDeleteAlert(item)}
      />
      }
    />
  )






  render() {

    const { savedProducts, loading } = this.state;
    console.log(savedProducts);

    return (
      <View style={styles.container}>
        {loading
          ? (
            <View>
              <Text>Loading</Text>
            </View>
          ) :
          (

            <FlatList
              keyExtractor={this.keyExtractor}
              data={savedProducts}
              renderItem={this.renderItem}
              refreshing={this.state.isFetching}
              onRefresh={this._handleRefresh}
            />
          )
        }

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}


export default connect(
  mapStateToProps,
  { getList }
)(ListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});