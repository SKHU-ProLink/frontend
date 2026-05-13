import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, Tabs } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { colors } from '@/constants/colors';

const handleHomeBack = () => {
  if (router.canGoBack()) {
    router.back();
    return;
  }

  router.replace('/(tabs)/study');
};

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
        name="quiz"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerShadowVisible: false,
          tabBarStyle: styles.hiddenTabBar,
          headerLeft: () => (
            <Pressable onPress={handleHomeBack} style={styles.backButton}>
              <MaterialIcons name="chevron-left" size={34} color="#111827" />
            </Pressable>
          ),
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
  hiddenTabBar: {
    display: 'none',
  },
  backButton: {
    marginLeft: 16,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
