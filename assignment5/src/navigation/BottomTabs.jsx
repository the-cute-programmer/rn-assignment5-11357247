import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = require('../assets/home.png');
            }else if (route.name === 'myCards'){
              iconName = require('..assets/myCards.png');
            }else if (route.name === 'Statistics'){
              iconName = require('../assets/statistics.png');
            }
             else if (route.name === 'Settings') {
              iconName = require('../assets/settings.png');
            }

            return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'black' },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="myCards"/>
        <Tab.Screen name="Statistics"/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
