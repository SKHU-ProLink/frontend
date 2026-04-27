import { colors } from '@/constants/colors';
import { StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  icon?: React.ReactNode;
  color?: string;
  style?: ViewStyle
};

export function IconBox({ icon, color = colors.primary[100], style }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      {icon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
  },
});
