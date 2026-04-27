import FlashCard from '@/components/flash-card';
import { StyleSheet, View } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlashCard front={'ㅇㅇ'} back={{
        meaning: "사과",
        partOfSpeech: "명사",
        pronunciation: "/æp.əl/"
    }} />
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
