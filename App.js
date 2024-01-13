import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#fff']} style={styles.linearGradient}>
        
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>
          Attendance Management System
        </Text>
        <StatusBar style="auto" />

        <View style={styles.bottom}>
          <Text style={styles.poweredBy}>powered by andes</Text>
          </View>
      </LinearGradient>
    </View>

      
      
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 16,
    alignItems: 'center',
  },
  poweredBy: {
    fontSize: 12,
    color: 'black', // Use a low-opacity gray color for the watermark
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'FontMontserrat', // Make sure to include the font family
    textAlign: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
