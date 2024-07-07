import React from 'react';
import { View, Text } from 'react-native';

const NotificationService = () => {
  const sendNotification = (message) => {
    // Code to send notification
    console.log(`Notification sent: ${message}`);
  };

  const scheduleReminder = (reminderTime) => {
    // Code to schedule reminder
    console.log(`Reminder scheduled at: ${reminderTime}`);
  };

  return (
    <View>
      <Text>Notification Service</Text>
    </View>
  );
};

export default NotificationService;