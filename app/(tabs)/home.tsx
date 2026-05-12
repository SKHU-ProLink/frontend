import HeartIcon from '@/assets/images/heart.svg';
import PlantIcon from '@/assets/images/plant.svg';
import StoreIcon from '@/assets/images/store.svg';
import HomeStatusSection from '@/components/home/home-status-section';
import IconTextPill from '@/components/icon-text-pill';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <IconTextPill Icon={StoreIcon} text="상점" />
      </View>
      <HomeStatusSection
        name="씨앗"
        level={1}
        currentXP={45}
        maxXP={100}
        actions={[
          {
            Icon: HeartIcon,
            title: '쓰다듬어 주세요',
            subtitle: '12개 보유',
            onPress: () => Alert.alert('쓰다듬어 주세요'),
          },
          {
            Icon: PlantIcon,
            title: '잡초뽑기',
            subtitle: '12개 보유',
            onPress: () => Alert.alert('잡초뽑기'),
          },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#D9D9D9',
    gap: 20,
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'flex-start',
  },
});
