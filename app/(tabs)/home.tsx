import IconTextPill from '@/components/icon-text-pill';
import StoreIcon from '@/assets/images/store.svg';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <IconTextPill Icon={StoreIcon} text="상점" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 10,
    paddingTop: 80,
    paddingHorizontal: 24,
  },
});
