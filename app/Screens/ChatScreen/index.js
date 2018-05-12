import React, { Component } from 'react';
import {
    AsyncStorage,
  Text,
  View,
  ScrollView
} from 'react-native';
import { 
    Button,
    Input,
    Icon
 } from 'react-native-elements';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            demoChats: [{
                isUser: true,
                message: 'Hey'
            },
            {
                isUser: false,
                message: 'Bitconnect'
            }]
        }

        this.populateChats = this.populateChats.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            if(this.state.chats && this.state.demoChats.length > this.state.chats.length) {
                var newArr = this.state.chats;
                newArr.push(this.state.demoChats[this.state.chats.length]);
                this.setState((prevState) => {
                    return {
                        chats: newArr
                    }
                })
            } else {
                clearInterval();
            };
        } , 1000);
    }

    populateChats() {
        return this.state.chats && this.state.chats.map(c =>
            <View key={c.message}
            style={{width: '100%', alignItems: c.isUser ? 'flex-end' : 'flex-start'}}>
                <View 
                style={{margin: 15, padding: 15, backgroundColor: '#8f8f8f', borderRadius: 5}}>
                    <Text style={{fontSize: 17, color: 'white'}}>
                        {c.message}
                    </Text>
                </View>
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
                    <ScrollView style={{width: '100%'}}>
                        {this.populateChats()}
                    </ScrollView>
                </View>
                <View style={{width: '100%', padding: 5, backgroundColor: "#8f8f8f"}}>
                <Input
                    containerStyle={styles.login_input_field}
                    placeholder='Chat here...'
                    rightIcon={
                        <Icon
                        name='chevron-left'
                        type='entypo' />
                    }
                    />
                </View>
                <BottomNav navigation={this.props.navigation} />
              </View>
          </View>
    );
  }
}