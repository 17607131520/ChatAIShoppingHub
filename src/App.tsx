import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './app.style';

const App:React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
