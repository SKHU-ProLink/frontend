import { StyleSheet, View } from 'react-native';

import { colors } from '@/constants/colors';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <View style={styles.dotsRow}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentStep && styles.dotActive,
            index < currentStep && styles.dotPast,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dotsRow: {
    flexDirection: 'row',
    gap: 6,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.grayscale[300],
  },
  dotActive: {
    width: 20,
    backgroundColor: colors.primary[500],
    borderRadius: 4,
  },
  dotPast: {
    backgroundColor: colors.primary[300],
  },
});
