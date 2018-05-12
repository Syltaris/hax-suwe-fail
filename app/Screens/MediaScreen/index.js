import React, { Component } from 'react';
import {
  View,
  Modal,
  ScrollView,
  WebView,
  TouchableOpacity
} from 'react-native';
import { 
  Text,
  Card,
  Button 
} from 'react-native-elements';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';


/*
* Loads articles from Medium, Facebook and Instagram and displays a list of them.
*/
export default class MediaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rss: 'Loading...don\'t forget to on your VPN...for now.',
      rssItems: [],

      showPostModal: false,
      postURLtoShow: 'http://baidu.com',
    }

    this.post = this.post.bind(this);
    this.load_items = this.load_items.bind(this);

    this.post();
  }

  post() {
    fetch('https://medium.com/feed/nus-overseas-colleges-shanghai')
    .then(resp => resp.text())
    .then(respData => rssParser.parse(respData))
    .then(data => {
      this.setState({
        rss: data.title,
        rssItems: data.items
      });
    })
    .catch(err => this.setState({rss: 'ERR'}))
  }

  load_items() {
    return this.state.rssItems.map(item => {
      return (
        <TouchableOpacity
        onPress={() => this.setState({showPostModal: true, postURLtoShow: item.links[0].url})}>
          <Card
          style={styles.card_recipesItem}>
            <Text h4>{item.title}</Text>
            {Object.keys(item).map(key => <Text>{key}: {String(item[key])}</Text>)}
          </Card>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
          <View style={styles.container}>
              <MainHeader 
              title="POSTS"
              navigation={this.props.navigation} />
              <Modal
              transparent
              animationType="fade"
              visible={this.state.showModal}
              onRequestClose={() => this.setState({showModal: false})}
              >
                <View style={styles.modal_transparentBlack}>
                  <Card>
                    <Text style={styles.text_header}>Bo Le has accepted your request!</Text>
                    <Button style={styles.button_fullWidth} onClick={() => this.props.navigation.navigate('ChatScreen')} />
                  </Card>
                </View>
              </Modal>
              <View style={styles.containerReverse}>
                <View style={styles.container}>

                <Text>{this.state.rss}</Text>

                <ScrollView>
                {this.load_items()}
                </ScrollView>

                </View>
                <BottomNav navigation={this.props.navigation} />
              </View>
          </View>
    );
  }
}