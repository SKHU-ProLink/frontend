import SentenceCard from '@/components/quiz/sentence-card';
import { StyleSheet, View } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SentenceCard title={'안머겅'} onPress={function (): void {
        throw new Error('Function not implemented.');
      } } />
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
