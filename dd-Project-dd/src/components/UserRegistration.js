import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  }

  const handleEmailChange = (text) => {
    setEmail(text);
  }

  const handlePasswordChange = (text) => {
    setPassword(text);
  }

  const handleRegistration = () => {
    // Code to handle user registration
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <View>
      <Text>Username:</Text>
      <TextInput
        value={username}
        onChangeText={handleUsernameChange}
        placeholder="Enter username"
      />
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Enter email"
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Enter password"
        secureTextEntry={true}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
}

export default UserRegistration;