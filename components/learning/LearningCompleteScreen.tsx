import Button from '@/components/buttons/Button';
import CommonStackScreen from '@/components/navigation/CommonStackScreen';
import { colors } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';
import BgBlob from '../../assets/bg.svg';
import SeedCharacter from '../../assets/images/seed.svg';

type LearningCompleteScreenProps = {
  headerTitle?: string;
  title: string;
  wordsLearned: number;
  learnedLabel?: string;
  xpEarned: number;
  buttonTitle?: string;
  onButtonPress: () => void;
};

export default function LearningCompleteScreen({
  headerTitle = '학습 완료',
  title,
  wordsLearned,
  learnedLabel = '오늘배운\n단어',
  xpEarned,
  buttonTitle = '계속하기',
  onButtonPress,
}: LearningCompleteScreenProps) {
  return (
    <>
      <CommonStackScreen title={headerTitle} />
      <View style={styles.container}>
        <BgBlob width={350} height={340} style={styles.bubbleTopLeft} />
        <BgBlob width={140} height={140} style={styles.bubbleTopRight} />
        <BgBlob width={153} height={153} style={styles.bubbleBottomLeft} />
        <BgBlob width={500} height={500} style={styles.bubbleBottomRight} />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🔥 학습 완료</Text>
          </View>

          <SeedCharacter width={220} height={220} style={styles.character} />

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{wordsLearned}</Text>
              <Text style={styles.statLabel}>{learnedLabel}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{xpEarned}</Text>
              <Text style={styles.statLabel}>{'오늘 얻은\nXP'}</Text>
            </View>
          </View>
        </View>

        <Button title={buttonTitle} onPress={onButtonPress} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FBFF',
    justifyContent: 'space-between',
    padding: 25,
    overflow: 'hidden',
  },
  bubbleTopLeft: {
    position: 'absolute',
    top: -80,
    left: -80,
  },
  bubbleTopRight: {
    position: 'absolute',
    top: 60,
    right: -100,
    transform: [{ rotate: '120deg' }],
  },
  bubbleBottomLeft: {
    position: 'absolute',
    bottom: 80,
    left: -100,
    transform: [{ rotate: '220deg' }],
  },
  bubbleBottomRight: {
    position: 'absolute',
    bottom: -300,
    right: -300,
    transform: [{ rotate: '45deg' }],
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    color: colors.grayscale[900],
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  badge: {
    backgroundColor: '#FFD6CC',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  character: {
    marginVertical: 8,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 48,
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statNumber: {
    fontSize: 52,
    fontWeight: '800',
    color: colors.grayscale[900],
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.grayscale[500],
    textAlign: 'center',
  },
});
