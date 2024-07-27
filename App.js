import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('test');
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (<Focus addSubject={setCurrentSubject} />) : (
        <View>
        <Timer 
        focusSubject={currentSubject} 
        onTimerEnd={() => {}}
        clearSubject={() => {}}
        />
        </View>
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
