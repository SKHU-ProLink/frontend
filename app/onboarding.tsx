import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import OnboardingFooter from '@/components/onboarding/OnboardingFooter';
import OnboardingStepContent from '@/components/onboarding/OnboardingStepContent';
import StepIndicator from '@/components/onboarding/StepIndicator';
import { TOTAL_ONBOARDING_STEPS } from '@/components/onboarding/onboarding-data';
import { useOnboardingAnimations } from '@/components/onboarding/useOnboardingAnimations';

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const [characterName, setCharacterName] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const animations = useOnboardingAnimations(step);

  const handleNext = () => {
    if (step < TOTAL_ONBOARDING_STEPS - 1) {
      animations.goToStep(step + 1, setStep);
    } else {
      router.replace('/(tabs)/study');
    }
  };

  const handleBack = () => {
    if (step > 0) {
      animations.goToStep(step - 1, setStep);
    }
  };

  const handleSelectLevel = (id: string, index: number) => {
    setSelectedLevel(id);
    animations.animateLevelSelect(index);
  };

  const isNextDisabled =
    (step === 0 && characterName.trim() === '') || (step === 3 && selectedLevel === null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#D8F5E6', '#F0FDF5']} style={StyleSheet.absoluteFill} />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <StepIndicator currentStep={step} totalSteps={TOTAL_ONBOARDING_STEPS} />
        <OnboardingStepContent
          step={step}
          characterName={characterName}
          selectedLevel={selectedLevel}
          fadeAnim={animations.fadeAnim}
          slideAnim={animations.slideAnim}
          floatAnim={animations.floatAnim}
          pillAnims={animations.pillAnims}
          cashAnims={animations.cashAnims}
          levelAnims={animations.levelAnims}
          levelScales={animations.levelScales}
          onChangeCharacterName={setCharacterName}
          onSelectLevel={handleSelectLevel}
        />
        <OnboardingFooter
          step={step}
          isNextDisabled={isNextDisabled}
          onBack={handleBack}
          onNext={handleNext}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
