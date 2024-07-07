import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ChallengesAndRewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
      rewards: []
    };
  }

  componentDidMount() {
    this.fetchChallenges();
    this.fetchRewards();
  }

  fetchChallenges = () => {
    // Fetch challenges from the backend server or API
    // Update the state with the fetched challenges
  }

  fetchRewards = () => {
    // Fetch rewards from the backend server or API
    // Update the state with the fetched rewards
  }

  renderChallenges = () => {
    return this.state.challenges.map(challenge => (
      <View key={challenge.id}>
        <Text>{challenge.title}</Text>
        <Text>{challenge.description}</Text>
      </View>
    ));
  }

  renderRewards = () => {
    return this.state.rewards.map(reward => (
      <View key={reward.id}>
        <Text>{reward.title}</Text>
        <Text>{reward.description}</Text>
      </View>
    ));
  }

  render() {
    return (
      <View>
        <Text>Challenges</Text>
        {this.renderChallenges()}
        <Text>Rewards</Text>
        {this.renderRewards()}
      </View>
    );
  }
}

export default ChallengesAndRewards;