import { StyleSheet, View } from 'react-native';

import Button from '@/components/buttons/Button';

import { TOTAL_ONBOARDING_STEPS } from './onboarding-data';

interface OnboardingFooterProps {
  step: number;
  isNextDisabled: boolean;
  onBack: () => void;
  onNext: () => void;
}

export default function OnboardingFooter({
  step,
  isNextDisabled,
  onBack,
  onNext,
}: OnboardingFooterProps) {
  return (
    <View style={styles.buttonsArea}>
      {step === 0 ? (
        <Button
          title="다음으로"
          onPress={onNext}
          variant={isNextDisabled ? 'disabled' : 'primary'}
        />
      ) : (
        <View style={styles.navRow}>
          <View style={styles.backBtn}>
            <Button title="이전" onPress={onBack} variant="secondary" />
          </View>
          <View style={styles.nextBtn}>
            <Button
              title={step === TOTAL_ONBOARDING_STEPS - 1 ? '시작하기' : '다음으로'}
              onPress={onNext}
              variant={isNextDisabled ? 'disabled' : 'primary'}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsArea: {
    paddingBottom: 28,
    paddingTop: 12,
  },
  navRow: {
    flexDirection: 'row',
    gap: 12,
  },
  backBtn: {
    flex: 1,
  },
  nextBtn: {
    flex: 2,
  },
});
