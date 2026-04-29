import QuizCard from '@/components/quiz-card';
import { StyleSheet, View } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <QuizCard title='What does "Apple" mean?'/>
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
