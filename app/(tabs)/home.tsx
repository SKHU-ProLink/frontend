import BoxIcon from '@/assets/images/box.svg';
import HeartIcon from '@/assets/images/heart.svg';
import PlantIcon from '@/assets/images/plant.svg';
import SeedIcon from '@/assets/images/seed.svg';
import StoreIcon from '@/assets/images/store.svg';
import HomeStatusSection from '@/components/home/home-status-section';
import IconTextPill from '@/components/icon-text-pill';
import { router } from 'expo-router';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={[styles.cloud, styles.topCloud]} />
      <View style={[styles.cloud, styles.rightCloud]} />

      <Pressable style={styles.storeButton} onPress={() => router.push('/store')}>
        <IconTextPill Icon={StoreIcon} text="상점" iconSize={48} />
      </Pressable>

      <View style={styles.characterArea}>
        <Text style={styles.characterName}>시네츄르</Text>
        <SeedIcon width={220} height={214} />
      </View>

      <View style={styles.statusWrapper}>
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
      </View>

      <View style={styles.storageButton}>
        <IconTextPill Icon={BoxIcon} text="보관함" iconSize={53} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFCFF',
    paddingHorizontal: 24,
  },
  cloud: {
    position: 'absolute',
    backgroundColor: '#FFF',
  },
  topCloud: {
    top: -40,
    left: -34,
    width: 150,
    height: 128,
    borderBottomRightRadius: 64,
  },
  rightCloud: {
    top: 138,
    right: -44,
    width: 120,
    height: 80,
    borderTopLeftRadius: 48,
    borderBottomLeftRadius: 48,
  },
  storeButton: {
    alignSelf: 'flex-end',
    marginTop: 18,
    zIndex: 1,
  },
  characterArea: {
    alignItems: 'center',
    marginTop: 48,
  },
  characterName: {
    marginBottom: 22,
    color: '#000',
    fontFamily: 'Pretendard',
    fontSize: 34,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  statusWrapper: {
    marginTop: 28,
  },
  storageButton: {
    marginTop: 50,
    alignSelf: 'flex-start',
  },
});
