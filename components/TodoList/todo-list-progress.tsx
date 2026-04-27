import { colors } from '@/constants/colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckIcon from '../../assets/images/check.svg';
import PlayIcon from '../../assets/images/play.svg';
import ProgressBar from './progressBar';
import { IconBox } from './todo-list-icon-box';
import { type TodoListProps } from './types';

type Props = Pick<TodoListProps, 'title' | 'subtitle' | 'xp' | 'icon' | 'progressValue' | 'onPress'>;

export function ProgressCard({ title = '플래시 카드', subtitle = '모두 완료', xp = 20, icon, progressValue = 50, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.container, styles.progressContainer]} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.progressTop}>
        <View style={styles.left}>
          <IconBox icon={icon} color={colors.primary[500]} style={{width: 60, height: 60}}/>
          <View style={styles.progressTextContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>지금 학습</Text>
            </View>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <ProgressBar progressValue={progressValue}/>
          </View>
        </View>
        <PlayIcon width={48} height={48} />
      </View>
      <View style={styles.progressBottom}>
        <CheckIcon width={20} height={20} />
        <Text style={styles.xpText}>완료 시 <Text style={styles.xpHighlight}>+{xp} XP</Text> 획득</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 20,
    boxShadow: '0 4px 7.9px 2px rgba(54, 204, 117, 0.20)',
    overflow: 'hidden',
  },
  progressContainer: {
    backgroundColor: colors.grayscale[50],
    borderColor: colors.primary[500],
  },
  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    paddingHorizontal: 14,
  },
  progressBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderTopColor: colors.primary[100],
    backgroundColor: colors.primary[50]
  },
  left: {
    flexDirection: 'row',
    gap: 12,
    flex: 1,
    marginRight: 12,
  },
  progressTextContainer: {
    flex: 1,
    gap: 4,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary[50],
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    color: colors.primary[500],
    fontSize: 11,
    fontWeight: '600',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  title: {
    color: colors.grayscale[700],
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    color: colors.grayscale[400],
    fontSize: 13,
    fontWeight: '400',
  },
  
  xpText: {
    color: colors.grayscale[600],
    fontSize: 14,
    fontWeight: '500',
  },
  xpHighlight: {
    color: colors.primary[500],
    fontWeight: '700',
  },
});
