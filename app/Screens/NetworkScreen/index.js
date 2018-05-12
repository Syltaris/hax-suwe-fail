import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { 
  Avatar,
  Card,
  Text,
  Button,

} from 'react-native-elements';
import Swiper from 'react-native-deck-swiper';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class NetworkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilesData: [{
        avatarImg: require('../../res/img/steve_knobs.jpg'),
        name: 'Hugh Mungus',
        position: 'African Program Staff, Engineers Without Borders China',
        shortDescription: ['“Edison failed 10, 000 times before he made the electric light. Do not be discouraged if you fail a few times.”',
        "“I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.”"
      ],
        
        description: 'Cras magna quam, malesuada a accumsan fringilla, rutrum vel mi. Integer laoreet volutpat est non malesuada. Duis vitae risus ex. Proin nisl risus, viverra a neque non, tristique vulputate ante. Donec cursus faucibus felis non bibendum. Praesent a accumsan metus. Praesent ac gravida tellus. Aliquam non magna sagittis, vulputate turpis eu, aliquam justo. Sed venenatis diam eget varius pulvinar. Suspendisse potenti. Quisque in felis sagittis, blandit lectus in, facilisis augue. Quisque ultrices eget nisi sit amet bibendum. Nullam vitae blandit justo. Praesent semper suscipit ipsum ut placerat. Morbi eu felis urna. Mauris porttitor tempus justo eget ornare. Etiam viverra blandit dui, non tincidunt nulla egestas tempus.',
      },
      {
        avatarImg: require('../../res/img/bo_le.jpg'),
        name: 'Bo Le',
        position: 'Wall Street Hustler',
        shortDescription: ['From an early age, Bo Le had a knack for rhythm. But his meteoric rise to stardom didn’t happen overnight. Considering that Bo Le’s roots stemmed from the housing projects of Brooklyn, NY, and grew up in extreme poverty, he faced many failures and roadblocks in his life. But he never gave up. No matter what happened to him, no matter what failures he faced, he pushed through, growing as a person, and maturing to become a better individual.'],
        
        description: 'Cras magna quam, malesuada a accumsan fringilla, rutrum vel mi. Integer laoreet volutpat est non malesuada. Duis vitae risus ex. Proin nisl risus, viverra a neque non, tristique vulputate ante. Donec cursus faucibus felis non bibendum. Praesent a accumsan metus. Praesent ac gravida tellus. Aliquam non magna sagittis, vulputate turpis eu, aliquam justo. Sed venenatis diam eget varius pulvinar. Suspendisse potenti. Quisque in felis sagittis, blandit lectus in, facilisis augue. Quisque ultrices eget nisi sit amet bibendum. Nullam vitae blandit justo. Praesent semper suscipit ipsum ut placerat. Morbi eu felis urna. Mauris porttitor tempus justo eget ornare. Etiam viverra blandit dui, non tincidunt nulla egestas tempus.',
      },
      {
        avatarImg: require('../../res/img/jia_jun.jpg'),
        name: 'Jia Jun',
        position: 'CEO of Manri',
        shortDescription: ['Jiajun\'s startup, Manri, was backed with 30.9 million RMB from investors. Manri failed. The $30.9 million RMB was lost. Jiajun was devastated. Fortunately, the support and guidance from his mentor led to his next idea – streaming live video while participating in activities.',

        "Jiajun raised money on crowdfunding websites like Kickstarter. Funkyvid app launched in 2010, and is the most downloaded streaming app to date.",
        
        "Without the unwavering guidance from my mentor and kind support from the public who instilled their faith in me and Funkyvid, this would not be possible. Now I have a strong calling to give back by sharing my stories and mentoring others."],
        
        description: 'Cras magna quam, malesuada a accumsan fringilla, rutrum vel mi. Integer laoreet volutpat est non malesuada. Duis vitae risus ex. Proin nisl risus, viverra a neque non, tristique vulputate ante. Donec cursus faucibus felis non bibendum. Praesent a accumsan metus. Praesent ac gravida tellus. Aliquam non magna sagittis, vulputate turpis eu, aliquam justo. Sed venenatis diam eget varius pulvinar. Suspendisse potenti. Quisque in felis sagittis, blandit lectus in, facilisis augue. Quisque ultrices eget nisi sit amet bibendum. Nullam vitae blandit justo. Praesent semper suscipit ipsum ut placerat. Morbi eu felis urna. Mauris porttitor tempus justo eget ornare. Etiam viverra blandit dui, non tincidunt nulla egestas tempus.',
      }
    ],

      showModal: false,
      profileToShow: undefined
    }

    this.loadProfiles = this.loadProfiles.bind(this);
  }

  loadProfiles() {
    return (
        <Swiper
          verticalSwipe={false}
          onSwipedRight={() => {this.setState({showModal: true})}}
          style={{cardVerticalMargin: 100}}
          cards={this.state.profilesData}
          infinite
          renderCard={(profile) => {
            return (
              <Card
              key={profile.name}
              image={profile.avatarImg}
              imageStyle={{height: '100%'}}
              imageWrapperStyle={{height: '60%'}}
              wrapperStyle={{width: '100%', height: '90%'}}
              containerStyle={styles.card_profileItem}>
                <TouchableOpacity
                key={profile.name}
                onPress={() => {
                  this.setState({
                    showModal: true,
                    profileToShow: profile
                  })
                }}>
                  <View >
                    <Text style={{fontSize: 20 , fontWeight: 'bold'}}>{profile.name}</Text>
                    <Text style={{fontSize: 15}}>{profile.position}</Text>
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
          }}
          //onSwiped={(cardIndex) => {console.log(cardIndex)}}
          onSwipedAll={() => {console.log('onSwipedAll')}}
          cardIndex={0}
          backgroundColor={"#F5FCFF"}
          stackSize= {2}>
      </Swiper>
    );
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
                <Card
                containerStyle={{width: '90%'}}>
                  <View style={{width: '100%', height: 150, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                      style={{width: 100, height: 100, borderRadius: 50}}
                      source={this.state.profilesData[1].avatarImg}
                    />
                  <Text style={styles.text_header}>Bo Le has accepted your request!</Text>

                </View>
                  <Button 
                  title={'GO TO CHAT'}
                  style={styles.button_fullWidth} 
                  onPress={() => {
                    this.setState({showModal: false});
                    this.props.navigation.navigate('ChatScreen');
                  }}/>
                </Card>
              </View>
            </Modal>
          <MainHeader 
          title="EXPERTS"
          navigation={this.props.navigation} />
          <View style={styles.containerReverse}>
            <View style={styles.container}>
              {this.loadProfiles()}
            </View>
            <BottomNav navigation={this.props.navigation} />
          </View>
      </View>
    );
  }
}