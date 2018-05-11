import React, { Component } from 'react';
import {
    AsyncStorage,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: undefined,
            userData : undefined
        }
        
        AsyncStorage.getItem('user_id')
        .then(user_id =>
            AsyncStorage.getItem('accessToken')
            .then(jwt =>
                fetch('http://13.250.45.171:1337/profile/'+user_id, { //go and fetch profile from user lmao
                    method: 'GET',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer `+ jwt
                    }
                })
            .then(resp => resp.json())
            .then(respData => this.setState({profileData: respData, userData: user_id}))
            .catch(err => this.setState({profileData: 
                {msg: 'error'},
            }))
        ));
    }

  render() {
    return (
          <View style={styles.container}>
              <MainHeader 
              title="PROFILE"
              navigation={this.props.navigation} />
              <View style={styles.containerReverse}>
                <View style={styles.container}>
                  <Text>
                      {this.state.profileData && this.state.profileData.name}
                      {this.state.profileData && this.state.profileData.msg}
                      {this.state.userData}
                      {this.state.profileData &&this.state.profileData.error}
                      {this.state.profileData &&this.state.profileData.message}

                    </Text>
                </View>
                <BottomNav navigation={this.props.navigation} />
              </View>
          </View>
    );
  }
}