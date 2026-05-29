import { Animated, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

import { GROWTH_PILLS } from '../onboarding-data';

interface GrowthStepProps {
  pillAnims: Animated.Value[];
}

export default function GrowthStep({ pillAnims }: GrowthStepProps) {
  return (
    <View style={styles.pillsWrapper}>
      {GROWTH_PILLS.map((label, index) => (
        <Animated.View
          key={label}
          style={{
            opacity: pillAnims[index],
            transform: [
              {
                scale: pillAnims[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.75, 1],
                }),
              },
              {
                translateY: pillAnims[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [24, 0],
                }),
              },
            ],
          }}
        >
          <View style={styles.pill}>
            <Text style={styles.pillText}>{label}</Text>
          </View>
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  pillsWrapper: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    width: '80%',
  },
  pill: {
    backgroundColor: colors.primary[500],
    borderRadius: 50,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: colors.primary[600],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  pillText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
