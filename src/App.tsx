import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import TaskHome from "./pages/Home"
import styles from './app.style';
// const Tab = createBottomTabNavigator()

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text>Hello World</Text>
      </View>
      {/* <Tab.Navigator>
      <Tab.Screen
            name="TaskHome"
            component={TaskHome}
            options={{ headerShown: false, title: '首页' }}
          />
      </Tab.Navigator> */}
    </SafeAreaView>
  );
};

export default App;
