import { colors } from '@/constants/colors';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

type MyPageSectionProps = {
  title: string;
  children: React.ReactNode;
  style?: ViewStyle;
  noCard?: boolean;
};

const MyPageSection = ({ title, children, style, noCard }: MyPageSectionProps) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.title}>{title}</Text>
      {noCard ? children : <View style={styles.card}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.grayscale[800],
    fontFamily: 'Pretendard',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    boxShadow: '0 0 9px 0 rgba(0, 0, 0, 0.07)',
  },
});

export default MyPageSection;
