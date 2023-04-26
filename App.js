import { StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantDetailsScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
