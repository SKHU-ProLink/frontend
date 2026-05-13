import SeedIcon from '@/assets/images/seed.svg';
import LevelCard from '@/components/level-card';
import MypageCalendar from '@/components/mypage/mypage-calendar';
import MyPageSection from '@/components/mypage/mypage-section';
import { colors } from '@/constants/colors';
import { router } from 'expo-router';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const completionData: Record<string, 0 | 1 | 2 | 3> = {
  '2026-05-01': 1,
  '2026-05-02': 3,
  '2026-05-05': 2,
  '2026-05-06': 3,
  '2026-05-07': 1,
  '2026-05-08': 3,
  '2026-05-09': 2,
  '2026-05-12': 1,
  '2026-05-13': 2,
};

const pastCharacters = [
  { id: '1', name: '씽씽이' },
  { id: '2', name: '씽씽이' },
  { id: '3', name: '씽씽이' },
];

export default function MypageScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={[styles.cloud, styles.topCloud]} />
      <View style={[styles.cloud, styles.rightCloud]} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>마이페이지</Text>

        <View style={styles.greetingCard}>
          <Text style={styles.greetingName}>셔니님</Text>
          <Text style={styles.greetingText}>안녕하세요 !</Text>
        </View>

        <MyPageSection title="현재 레벨" noCard style={styles.section}>
          <LevelCard
            level={1}
            characterName="씨앗"
            currentXP={45}
            maxXP={100}
            CharacterSvg={SeedIcon}
            onPress={() => router.push('/(tabs)/home')}
          />
        </MyPageSection>

        <MyPageSection title="나의 연속학습" style={styles.section}>
          <MypageCalendar completionData={completionData} />
        </MyPageSection>

        <MyPageSection title="역대 Avocado" style={styles.section}>
          <View style={styles.characterGrid}>
            {pastCharacters.map(char => (
              <View key={char.id} style={styles.characterItem}>
                <View style={styles.characterBubble}>
                  <SeedIcon width={72} height={72} />
                </View>
                <Text style={styles.characterName}>{char.name}</Text>
              </View>
            ))}
          </View>
        </MyPageSection>

        <View style={styles.bottomButtons}>
          <TouchableOpacity onPress={() => Alert.alert('로그아웃')}>
            <Text style={styles.bottomButtonText}>로그아웃</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity onPress={() => Alert.alert('탈퇴하기')}>
            <Text style={styles.bottomButtonText}>탈퇴하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFCFF',
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
    top: 180,
    right: -44,
    width: 120,
    height: 80,
    borderTopLeftRadius: 48,
    borderBottomLeftRadius: 48,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.grayscale[900],
    fontFamily: 'Pretendard',
    marginTop: 8,
  },
  greetingCard: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  greetingName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary[500],
    fontFamily: 'Pretendard',
  },
  greetingText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.grayscale[700],
    fontFamily: 'Pretendard',
  },
  section: {
    marginTop: 24,
  },
  characterGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  characterItem: {
    alignItems: 'center',
    gap: 10,
  },
  characterBubble: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterName: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.grayscale[700],
    fontFamily: 'Pretendard',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 40,
  },
  divider: {
    width: 1,
    height: 14,
    backgroundColor: colors.grayscale[300],
  },
  bottomButtonText: {
    fontSize: 15,
    color: colors.grayscale[400],
    fontFamily: 'Pretendard',
    fontWeight: '500',
  },
});
