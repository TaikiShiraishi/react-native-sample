import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class MainContainer extends Component {
  render() {
    let todos = [
      {id: 1, title: "create some actions"},
      {id: 2, title: "create some reducer"},
      {id: 3, title: "create store"}
    ];

    return(
      <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={this._renderItems}
        keyExtractor={(item, index) => index}
      />
      </View>
    )
  }

  _renderItems({ item }) {
    return(
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0
  },
});