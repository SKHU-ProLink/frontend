import SeedIcon from '@/assets/images/seed.svg';
import LevelCard from '@/components/level-card';
import MypageCalendar from '@/components/mypage/mypage-calendar';
import MyPageSection from '@/components/mypage/mypage-section';
import { colors } from '@/constants/colors';
import { router } from 'expo-router';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 투두 완료 단계 더미 데이터 (0: 없음, 1~3: 단계별)
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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>마이페이지</Text>
        <Text style={styles.greeting}>선이님, 안녕하세요 !</Text>

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
                <SeedIcon width={80} height={80} />
                <Text style={styles.characterName}>{char.name}</Text>
              </View>
            ))}
          </View>
        </MyPageSection>

        <View style={styles.bottomButtons}>
          <TouchableOpacity onPress={() => Alert.alert('로그아웃')}>
            <Text style={styles.bottomButtonText}>로그아웃</Text>
          </TouchableOpacity>
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
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.grayscale[800],
    fontFamily: 'Pretendard',
    marginTop: 20,
    marginBottom: 8,
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
    gap: 8,
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
    gap: 40,
    marginTop: 40,
  },
  bottomButtonText: {
    fontSize: 15,
    color: colors.grayscale[400],
    fontFamily: 'Pretendard',
    fontWeight: '500',
  },
});
