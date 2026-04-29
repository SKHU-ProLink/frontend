import Quiz from '@/components/quiz/quiz';
import { StyleSheet, View } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Quiz title='사과' level='A'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    gap: 10
  },
});
