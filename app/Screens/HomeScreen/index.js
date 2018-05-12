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
          avatarUri: 'https://source.unsplash.com/random/19x19',
          post: ['Tesla and SpaceX Founder Elon Musk embodies the popular quote, "Shoot for the moon. Even if you miss, you\'ll land among the stars." He prides himself on having a \"resume of epic failures.\"  Regarding Tesla, he shared, "I thought we would most likely fail. But I thought that we at least could address the false perception people have that an electric car had to be ugly and slow and boring like a golf cart.\"',
          "That raised the question: why try if you didn't expect to succeed?",
          "Musk's response? \"If something's important enough you should try. Even if you know the probable outcome is failure.\"",
          "By taking risks in the face of failure, Elon Musk has surely landed among the stars.",
          "Regarding SpaceX, he said, \"I want to be able to make sure that we have enough capital to survive at least three consecutive failures.\"",
          "He says, \"Failure is an option here. If things are not failing, you are not innovating enough.\" In fact, he fully expects to fail himself. \"If nothing else, we are committed to failing in a new way.\""
          ]
          ,
          likes: 3,
          comments: [
            {
              name: 'Trizha Sabaupan',
              date: '2018-05-03',
              avatarUri: 'https://source.unsplash.com/random/22x22',
              comment: ["These are nice advice because many of us will be inspired to try in what we failed to do some says : try and try until you commit your success in the end"],
            },
          ]
        },
      ],
      anonymousPosts: [
        {
          name: 'Sad Dove',
          date: '2018-05-04',
          avatarUri: 'https://source.unsplash.com/random/20x20',
          post: ['2 year’s ago I had really worked hard to get promotion but I didn’t get. II was very disappointed so I had clashes with my immediate supervisor, who said that I deserved the promotion but he doesn’t know how I didn’t get it. So I asked for an internal change. Now this year I have things went much worst. I’m really hopeless now. Don’t know what to do. Feeling like ending this life. All other’s are growing in their lives. Except me. What should I do. I’m unable to face other’s due to my failures.'],
          likes: 3,
          comments: [
            {
              name: 'Louise Chan',
              date: '2018-05-05',
              avatarUri: 'https://source.unsplash.com/random/21x21',
              comment: ["I can get so frustrated if I can’t get whatever I’m doing right the first time, it’s so silly! Yet time and time again I still get angry and beat myself up if I make mistakes. I like the fact that you mention accepting how you feel and to admit to yourself it’s okay to have setbacks, I really need to start doing this and not take everything to heart! This has also made me feel not so alone, and to realise that we all make mistakes. Thank you."]
            },
            {
              name: 'Jeremy How',
              date: '2018-05-05',
              avatarUri: 'https://source.unsplash.com/random/22x22',
              comment: ["I experienced a very difficult job loss last year and went through similar emotions. Unfortunately we will all encounter failures in life, but they never have to be final. You are always able to keep writing your story. It doesn’t have to end in failure. This does not have to be the end. Though hope and any optimism may seem lost, still reach out for them and hold them intently in your mind to move forward. Negativity may keep knocking on the door of your mind, but you just have to keep shutting it out. Be patient with yourself and kind to yourself as you would with a close friend. All of our journeys will look different, but there is always hope as long as you believe there is.",

              "If you fail, never give up because it is only a First Attempt In Learning; end is not the end, it only means that Effort Never Dies; if you get no as an answer, it just means there is a Next Opportunity.",
              
              "“The only man who never makes a mistake is the man who never does anything.” -Theodore Roosevelt",
              
              "“The greatest accomplishment is not in never falling, but in rising again after you fall.” -Vince Lombardi",
              
              "“Never give in, never give in, never, never, never, never — in nothing, great or small, large or petty—never give in except to convictions of honor and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy.” -Winston Churchill",

              "“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.” -Thomas Edison",
              
              "“Continuous effort – not strength or intelligence – is the key to unlocking our full potential.” -Winston Churchill"
              ],
            },
          ]
        },
        {
          name: 'Lazy Magpie',
          date: '2018-05-04',
          avatarUri: 'https://source.unsplash.com/random/25x25',
          post: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet vestibulum felis et dapibus. Suspendisse sodales magna eget bibendum accumsan. Integer vitae sapien pretium, lacinia magna a, tristique urna. Ut urna augue, rutrum quis placerat vitae, molestie mollis orci. Donec ac risus commodo, consequat sem nec, condimentum ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et quam luctus, porttitor odio a, sodales dolor. Duis eget efficitur eros, ut volutpat dui. Nulla sodales magna non odio aliquet pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vel sodales magna. Nam et arcu ac odio accumsan vehicula. Donec auctor lectus ipsum, ac luctus augue commodo tincidunt. Proin nec elit turpis. Aliquam vulputate tristique iaculis. Cras malesuada est luctus urna mollis ultricies.'],
          likes: 3,
          comments: [
            {
              name: 'Ze Xuan',
              date: '2018-05-05',
              avatarUri: 'https://source.unsplash.com/random/21x21',
              comment:["Hey, I've been through that as well, we can talk about it if you want."]
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
              {p.post.map(p =>
                <Text key={p}>
                  {p}
                </Text>
                )
              }
          </View>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Icon
              size={20}
              name="like"
              type="foundation"/>
            <Text style={{fontWeight: 'bold', paddingLeft: 5}}>
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
                  {c.comment.map(c => 
                  <Text style={{padding: 5}} key={c}>
                    {c}
                  </Text>
                  )}
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