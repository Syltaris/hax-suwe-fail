import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Modal,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { 
  Avatar,
  Card,
  Text,
  Button,

} from 'react-native-elements';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class NetworkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilesData: [{
        avatarImg: require('../../res/img/steve_knobs.jpg'),
        name: 'Steve Knobs',
        shortDescription: 'He says, "Failure is an option here. If things are not failing, you are not innovating enough." In fact, he fully expects to fail himself. "If nothing else, we are committed to failing in a new way."',
        description: 'Cras magna quam, malesuada a accumsan fringilla, rutrum vel mi. Integer laoreet volutpat est non malesuada. Duis vitae risus ex. Proin nisl risus, viverra a neque non, tristique vulputate ante. Donec cursus faucibus felis non bibendum. Praesent a accumsan metus. Praesent ac gravida tellus. Aliquam non magna sagittis, vulputate turpis eu, aliquam justo. Sed venenatis diam eget varius pulvinar. Suspendisse potenti. Quisque in felis sagittis, blandit lectus in, facilisis augue. Quisque ultrices eget nisi sit amet bibendum. Nullam vitae blandit justo. Praesent semper suscipit ipsum ut placerat. Morbi eu felis urna. Mauris porttitor tempus justo eget ornare. Etiam viverra blandit dui, non tincidunt nulla egestas tempus.',
      }],

      showModal: false,
      profileToShow: undefined
    }

    this.loadProfiles = this.loadProfiles.bind(this);
  }

  loadProfiles() {
    return this.state.profilesData && this.state.profilesData.map(profile => 

        <Card
        image={profile.avatarImg}
        imageStyle={{height: '100%'}}
        wrapperStyle={{width: '100%'}}
        imageWrapperStyle={{height: '60%'}}
        containerStyle={styles.card_profileItem}>
          <TouchableOpacity
          key={profile.name}
          onPress={() => {
            this.setState({
              showModal: true,
              profileToShow: profile
            })
          }}>
            <View 
            style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 20 , fontWeight: 'bold'}}>{profile.name}</Text>
              <View
              style={{paddingLeft: 20}}>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text>{profile.shortDescription}</Text>
            </View>
          </TouchableOpacity>
        </Card>
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
              <Card>
                <Text style={styles.text_header}>{this.state.profileToShow && this.state.profileToShow.name}</Text>
                <Text>{this.state.profileToShow && this.state.profileToShow.description}</Text>
              </Card>
            </View>
          </Modal>
          <MainHeader 
          title="EXPERTS"
          navigation={this.props.navigation} />
          <View style={styles.containerReverse}>
            <View style={styles.container}>
              <ScrollView
              style={{width: '100%'}}>
                {this.loadProfiles()}
              </ScrollView>
            </View>
            <BottomNav navigation={this.props.navigation} />
          </View>
      </View>
    );
  }
}