import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setReminder, clearReminder } from '../redux/actions/reminderActions';

const ReminderNotifications = () => {
  const dispatch = useDispatch();
  const reminder = useSelector(state => state.reminder);

  const handleSetReminder = () => {
    dispatch(setReminder('Time to hydrate!'));
  };

  const handleClearReminder = () => {
    dispatch(clearReminder());
  };

  return (
    <View>
      <Text>Reminder: {reminder}</Text>
      <Button title="Set Reminder" onPress={handleSetReminder} />
      <Button title="Clear Reminder" onPress={handleClearReminder} />
    </View>
  );
};

export default ReminderNotifications;