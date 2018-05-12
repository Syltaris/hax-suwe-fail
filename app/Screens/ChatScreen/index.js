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

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: []
        }

        this.populateChats = this.populateChats.bind(this);
    }

    populateChats() {
        return this.state.chats && this.state.chats.map(c =>
            <View>
                lol
            </View>
        )
    }


  render() {
    return (
          <View style={styles.container}>
        
              <MainHeader 
              title="BO LE"
              navigation={this.props.navigation} />
              <View style={styles.containerReverse}>
                <View style={styles.container}>
                    {this.populateChats()}
                </View>
                <BottomNav navigation={this.props.navigation} />
              </View>
          </View>
    );
  }
}