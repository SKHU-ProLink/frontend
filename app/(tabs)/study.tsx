import LevelCard from '@/components/level-card';
import { TodoList } from '@/components/TodoList/todo-list';
import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Arrow from '../../assets/images/arrow.svg';
import FlashCardIcon from '../../assets/images/flash-card.svg';
import SeedCharacter from '../../assets/images/seed.svg';
import { ProgressCard } from '../../components/TodoList/todo-list-progress';

export default function StudyScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#D7F4FA', '#E1FCDC']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.topContainer}
      >
        <View style={styles.greetingContainer}>
          <Text style={styles.subTitle}>안녕하세요!</Text>
          <Text style={styles.title}>오늘도 성장해볼까요?</Text>
        </View>
        <LevelCard
          level={0}
          characterName={''}
          currentXP={0}
          maxXP={0}
          CharacterSvg={SeedCharacter}
          onPress={() => {}}
        />
      </LinearGradient>
      <View style={styles.todoSection}>
        <Text style={styles.sectionTitle}>오늘의 학습 투두</Text>
        <View style={styles.todoList}>
          <TodoList icon={<FlashCardIcon />} />
          <Arrow width={16} height={16} color={colors.primary[500]} />
          <ProgressCard icon={<FlashCardIcon />} />
          <Arrow width={16} height={16} color={colors.grayscale[300]} />
          <TodoList icon={<FlashCardIcon />} completed="disabled" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale[100],
  },
  topContainer: {
    flexDirection: 'column',
    gap: 25,
    paddingTop: 70,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  greetingContainer: {
    flexDirection: 'column',
    gap: 2,
    paddingLeft: 10,
  },
  title: {
    color: colors.grayscale[900],
    fontSize: 25,
    fontWeight: '700',
  },
  subTitle: {
    color: colors.grayscale[800],
    fontSize: 16,
    fontWeight: '500',
  },
  todoSection: {
    paddingHorizontal: 25,
    gap: 15,
    paddingVertical: 20,
  },
  sectionTitle: {
    paddingLeft: 10,
    color: colors.grayscale[500],
    fontSize: 16,
    fontWeight: '600',
  },
  todoList: {
    flexDirection: 'column',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});