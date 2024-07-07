import React from 'react';
import { View, Text, Button } from 'react-native';

const SocialSharing = () => {
  const shareActivity = () => {
    // Logic to share activity on social media
    console.log('Shared activity on social media');
  };

  return (
    <View>
      <Text>Share your progress with friends!</Text>
      <Button title="Share Activity" onPress={shareActivity} />
    </View>
  );
};

export default SocialSharing;