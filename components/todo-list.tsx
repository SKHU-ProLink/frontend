import { colors } from '@/constants/colors';
import { type ComponentProps } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import CheckIcon from '../assets/images/check.svg';
type Props = {
  title?: string;
  subtitle?: string;
  xp?: number;
  completed?: boolean;
  onPress?: ComponentProps<typeof TouchableOpacity>['onPress'];
  style?: ViewStyle;
  icon?: React.ReactNode;
};


export function TodoList({
  title = '플래시 카드',
  subtitle = '모두 완료',
  xp = 20,
  icon,
  completed = true,
  onPress,
  style,
}: Props) {
  return (
   <View style={styles.container}>
    <View style={styles.left}>
      <View style={styles.iconCantainer}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle} +{xp}XP</Text>
      </View>
    </View>
    <CheckIcon/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 17,
    paddingHorizontal: 14,
    backgroundColor: colors.primary[50],
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.primary[100],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.05)'
  },
  left: {
    flexDirection: 'row',
    gap: 12,
  },
  iconCantainer : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary[100],
    padding: 8,
    borderRadius: 10
  },
  textContainer: {
    justifyContent: 'center'
  },
  title: {
    color: colors.grayscale[500],
    fontWeight: 'bold',
    fontSize: 20
  },
  subtitle: {
    color: colors.primary[500],
    fontWeight: '700',
    fontSize: 12
  }
});