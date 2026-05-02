import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { colors } from '@/constants/colors';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary[500],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
      }}>
      <Tabs.Screen
        name="study"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={40} name="book.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={40} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={40} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  tabBarStyle: { 
    height: 80,
  },
  tabBarIconStyle: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});