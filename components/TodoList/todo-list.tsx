import { colors } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';
import CheckIcon from '../../assets/images/check.svg';
import LockIcon from '../../assets/images/lock.svg';
import { IconBox } from './todo-list-icon-box';
import { ProgressCard } from './todo-list-progress';
import { type TodoListProps } from './types';

export function TodoList(props: TodoListProps) {
  if (props.completed === 'progress') return <ProgressCard {...props} />;
  return <DoneCard {...props} />;
}

function DoneCard({ title = '플래시 카드', subtitle = '모두 완료', xp = 20, icon, completed = 'done' }: TodoListProps) {
  const isDone = completed === 'done';

  return (
    <View style={[styles.container, !isDone && styles.disabledContainer]}>
      <View style={styles.left}>
        <IconBox icon={icon} color={isDone ? colors.primary[100] : colors.grayscale[200]} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, !isDone && styles.disabledTitle]}>{title}</Text>
          <Text style={[styles.subtitle, !isDone && styles.disabledSubtitle]}>{subtitle} +{xp}XP</Text>
        </View>
      </View>
      <View>
        {!isDone ? <LockIcon width={50} height={50} /> : <CheckIcon width={40} height={40} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    paddingHorizontal: 14,
    backgroundColor: colors.primary[50],
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.primary[100],
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
  },
  disabledContainer: {
    borderColor: colors.grayscale[200],
    backgroundColor: colors.grayscale[50],
  },
  left: {
    flexDirection: 'row',
    gap: 12,
    flex: 1,
    marginRight: 12,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    color: colors.grayscale[700],
    fontWeight: 'bold',
    fontSize: 20,
  },
  disabledTitle: {
    color: colors.grayscale[400],
  },
  subtitle: {
    color: colors.primary[500],
    fontWeight: '700',
    fontSize: 12,
  },
  disabledSubtitle: {
    color: colors.grayscale[300],
  },
});
