import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import styles from './app.style';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#1890ff',
            tabBarInactiveTintColor: '#999',
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: '首页',
              tabBarLabel: '首页',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              title: '我的',
              tabBarLabel: '我的',
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
