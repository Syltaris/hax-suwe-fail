import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  View,
  ScrollView
} from 'react-native';
import { 
  Card,
  Avatar,
  Button,
  Divider,
  Input,
  Icon,
  ButtonGroup,
} from 'react-native-elements';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      posts: [
        {
          name: 'Steve Knobs',
          date: '2018-05-01',
          avatarUri: 'https://source.unsplash.com/random/25x25',
          post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet vestibulum felis et dapibus. Suspendisse sodales magna eget bibendum accumsan. Integer vitae sapien pretium, lacinia magna a, tristique urna. Ut urna augue, rutrum quis placerat vitae, molestie mollis orci. Donec ac risus commodo, consequat sem nec, condimentum ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et quam luctus, porttitor odio a, sodales dolor. Duis eget efficitur eros, ut volutpat dui. Nulla sodales magna non odio aliquet pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vel sodales magna. Nam et arcu ac odio accumsan vehicula. Donec auctor lectus ipsum, ac luctus augue commodo tincidunt. Proin nec elit turpis. Aliquam vulputate tristique iaculis. Cras malesuada est luctus urna mollis ultricies.',
          likes: 3,
          comments: [
            {
              name: 'Geer How',
              date: '2018-05-03',
              avatarUri: 'https://source.unsplash.com/random/22x22',
              comment: "Inspirational!",
            },
          ]
        },
      ],
      anonymousPosts: [
        {
          name: 'Sad Dove',
          date: '2018-05-04',
          avatarUri: 'https://source.unsplash.com/random/20x20',
          post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet vestibulum felis et dapibus. Suspendisse sodales magna eget bibendum accumsan. Integer vitae sapien pretium, lacinia magna a, tristique urna. Ut urna augue, rutrum quis placerat vitae, molestie mollis orci. Donec ac risus commodo, consequat sem nec, condimentum ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et quam luctus, porttitor odio a, sodales dolor. Duis eget efficitur eros, ut volutpat dui. Nulla sodales magna non odio aliquet pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vel sodales magna. Nam et arcu ac odio accumsan vehicula. Donec auctor lectus ipsum, ac luctus augue commodo tincidunt. Proin nec elit turpis. Aliquam vulputate tristique iaculis. Cras malesuada est luctus urna mollis ultricies.',
          likes: 3,
          comments: [
            {
              name: 'Ze Xuan',
              date: '2018-05-05',
              avatarUri: 'https://source.unsplash.com/random/21x21',
              comment: "Hey, I've been through that as well, we can talk about it if you want."
            },
            {
              name: 'Geer How',
              date: '2018-05-05',
              avatarUri: 'https://source.unsplash.com/random/22x22',
              comment: "I think you can seek help from expert Steve Knobs, he helped me to go through something similar once.",
            },
          ]
        },
        {
          name: 'Sad Dovee',
          date: '2018-05-04',
          avatarUri: 'https://source.unsplash.com/random/20x20',
          post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet vestibulum felis et dapibus. Suspendisse sodales magna eget bibendum accumsan. Integer vitae sapien pretium, lacinia magna a, tristique urna. Ut urna augue, rutrum quis placerat vitae, molestie mollis orci. Donec ac risus commodo, consequat sem nec, condimentum ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et quam luctus, porttitor odio a, sodales dolor. Duis eget efficitur eros, ut volutpat dui. Nulla sodales magna non odio aliquet pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vel sodales magna. Nam et arcu ac odio accumsan vehicula. Donec auctor lectus ipsum, ac luctus augue commodo tincidunt. Proin nec elit turpis. Aliquam vulputate tristique iaculis. Cras malesuada est luctus urna mollis ultricies.',
          likes: 3,
          comments: [
            {
              name: 'Ze Xuan',
              date: '2018-05-05',
              avatarUri: 'https://source.unsplash.com/random/21x21',
              comment: "Hey, I've been through that as well, we can talk about it if you want."
            },
            {
              name: 'Geer How',
              date: '2018-05-05',
              avatarUri: 'https://source.unsplash.com/random/22x22',
              comment: "I think you can seek help from expert Steve Knobs, he helped me to go through something similar once.",
            },
          ]
        }
      ]
    }

    this.populatePosts = this.populatePosts.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }


  populatePosts(postsToRender) {
    return postsToRender && postsToRender.map(p => 
      <View style={{width: '100%'}} key={p.name}>
        <Card style={{width: '100%'}}>
          <View 
            style={{flexDirection: 'row'}}>
            <View style={{width: '12%'}}>
              <Avatar
              small
              rounded
              source={{uri: p.avatarUri}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {p.name}
              </Text>      
              <Text>
                Posted {p.date}
              </Text>
            </View>
          </View>
          <View style={{paddingTop: 10}}>
            <Text>
              {p.post}
            </Text>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', paddingTop: 10}}>
              {p.likes} Likes {p.comments.length} Comments
            </Text>
          </View>
          {
            p.comments.map(c => 
              <View style={{padding: 5}} key={c.name}>
                <Divider style={{ backgroundColor: 'blue', margin: 5 }} />
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '12%'}}>
                    <Avatar
                    small
                    rounded
                    source={{uri: c.avatarUri}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    />
                  </View>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      {c.name}
                    </Text>      
                    <Text>
                      {c.date}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={{padding: 5}}>{c.comment}</Text>
                </View>
              </View>
            )
          }
          <View style={{width: '100%', borderRadius: 5}}>
            <Input
            containerStyle={styles.login_input_field}
            placeholder='Comment...'
            rightIcon={
                <Icon
                name='chevron-left'
                type='entypo' />
            }
            />
          </View>
        </Card>
      </View>
    );
  }

  updateIndex(selectedIndex) {this.setState({selectedIndex})}

  render() {
    var postsToRender = this.state.selectedIndex === 0 ? this.state.posts : this.state.anonymousPosts;

    return (
      <View style={styles.container}>
          <MainHeader 
          title="STORIES"
          navigation={this.props.navigation} />
          <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={['Stories', 'Anonymous']}
          />
          <View style={styles.containerReverse}>
            <View style={styles.container}>
              <ScrollView>
                {this.populatePosts(postsToRender)}
              </ScrollView>
            </View>
            <BottomNav navigation={this.props.navigation} />
          </View>
      </View>
    );
  }
}