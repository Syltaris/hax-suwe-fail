import React, { Component } from 'react';
import {
    AsyncStorage,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal
} from 'react-native';
import { 
    Button,
    Input,
    Icon,
    Card,
    Rating
 } from 'react-native-elements';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showReview: false,
            chats: [],
            demoChats: [
            {
                isUser: false,
                message: 'Hello!'
            },
            {
                isUser: true,
                message: 'Hi Bo Le! Nice to e-meet you.'
            },
            {
                isUser: false,
                message: 'Nice to meet you as well, how are you doing?'
            },
            {
                isUser: true,
                message: 'Well, not doing that well.. Have encountered some setbacks in my career recently. '
            },
            {
                isUser: false,
                message: 'Tell me more.'
            },
        ]
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
                style={{margin: 15, padding: 15, maxWidth: '70%',
                backgroundColor: c.isUser? '#22aaff' :'#8f8f8f', 
                borderRadius: 5}}>
                    <Text style={{fontSize: 17, color: c.isUser? 'black' :'white'}}>
                        {c.message}
                    </Text>
                </View>
            </View>
        )
    }


  render() {
    return (
          <View style={styles.container}>
            <Modal
                transparent
                animationType="fade"
                visible={this.state.showModal}
                onRequestClose={() => this.setState({showModal: false})}
                >
                <View style={styles.modal_transparentBlack}>
                {
                    this.state.showReview
                    ?
                    <Card
                    containerStyle={{width: '90%'}}>
                    <View style={{width: '100%', height: 150, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.text_header}>How well would you rate his advice?</Text>
                        <Rating
                        showRating
                        type="star"
                        fractions={1}
                        startingValue={3.6}
                        imageSize={40}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }} />
                    </View>
                    <Button 
                    title={'SUBMIT'}
                    style={styles.button_fullWidth} 
                    onPress={() => {
                        this.setState({showModal: false});
                        this.props.navigation.navigate('HomeScreen');
                    }}/>
                    </Card>

                    :
                    <Card
                    containerStyle={{width: '90%'}}>
                    <View style={{width: '100%', height: 150, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.text_header}>Confirm termination of session?</Text>
                        <Text>Your session was 10s long.</Text>
                    </View>
                    <Button 
                    title={'CONFIRM'}
                    style={styles.button_fullWidth} 
                    onPress={() => {
                        this.setState({showReview: true});
                    }}/>
                    </Card>
                }
        
                </View>
                </Modal>
              <MainHeader 
              title="BO LE"
              navigation={this.props.navigation} />
              <View style={styles.containerReverse}>
                <TouchableOpacity
                style={{width: '100%'}}
                onPress={() => this.setState({showModal: true})}>
                    <View style={{width: '100%', alignItems:"center",
                    height: 40, backgroundColor: '#6fbfcf', flexDirection: 'row'}}>
                        <Text> Conclude session?</Text>
                    </View>
                </TouchableOpacity>
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