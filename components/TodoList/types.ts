import { type ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';

export type TodoListProps = {
  title?: string;
  subtitle?: string;
  xp?: number;
  completed?: 'done' | 'progress' | 'disabled';
  progressValue?: number;
  onPress?: ComponentProps<typeof TouchableOpacity>['onPress'];
  icon?: React.ReactNode;
};
