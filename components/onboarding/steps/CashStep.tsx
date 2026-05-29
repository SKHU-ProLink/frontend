import { Animated, StyleSheet, View } from 'react-native';

import CashIcon from '@/assets/images/cash.svg';
import StoreIcon from '@/assets/images/store.svg';

interface CashStepProps {
  cashAnims: Animated.Value[];
}

export default function CashStep({ cashAnims }: CashStepProps) {
  return (
    <View style={styles.cashWrapper}>
      <View style={styles.cashCoinsRow}>
        {[70, 90, 70].map((size, index) => (
          <Animated.View
            key={index}
            style={[
              styles.cashIconItem,
              index === 1 && styles.cashIconCenter,
              {
                opacity: cashAnims[index],
                transform: [
                  {
                    scale: cashAnims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.4, 1],
                    }),
                  },
                  {
                    translateY: cashAnims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [30, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <CashIcon width={size} height={size} />
          </Animated.View>
        ))}
      </View>
      <Animated.View style={{ opacity: cashAnims[2], marginTop: 8 }}>
        <StoreIcon width={110} height={90} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  cashWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  cashCoinsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  cashIconItem: {},
  cashIconCenter: {
    marginBottom: 10,
  },
});
