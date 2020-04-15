import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class Profile extends Component {
  
  state = {
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
  };

  render() {
      
    let { image } = this.state;

    return (
      <View style={styles.container}>
          <Avatar
            rounded 
            icon={{name: 'user', type: 'font-awesome'}}
            size="xlarge" 
            source={{ uri: image }}
            onEditPress={this._pickImage}
            showEditButton 
            containerStyle={styles.avatar}
          />
      </View>
    )
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Foi mal fera!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    } catch (E) {
      // alert e
    }
  };
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 30
  },
  avatar: {
    display: "flex",
    alignSelf: "center"
  }
})