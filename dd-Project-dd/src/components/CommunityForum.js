import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';

const CommunityForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    axios.get('https://api.example.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts: ', error);
      });
  }, []);

  const handlePostSubmit = () => {
    axios.post('https://api.example.com/posts', { body: newPost })
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPost('');
      })
      .catch(error => {
        console.error('Error creating post: ', error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Write a new post..."
        value={newPost}
        onChangeText={text => setNewPost(text)}
      />
      <Button title="Post" onPress={handlePostSubmit} />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CommunityForum;