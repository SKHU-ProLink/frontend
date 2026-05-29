import { Animated, StyleSheet, Text } from 'react-native';

import { colors } from '@/constants/colors';

import { ONBOARDING_STEP_META } from './onboarding-data';
import CashStep from './steps/CashStep';
import CharacterNameStep from './steps/CharacterNameStep';
import GrowthStep from './steps/GrowthStep';
import LevelStep from './steps/LevelStep';

interface OnboardingStepContentProps {
  step: number;
  characterName: string;
  selectedLevel: string | null;
  fadeAnim: Animated.Value;
  slideAnim: Animated.Value;
  floatAnim: Animated.Value;
  pillAnims: Animated.Value[];
  cashAnims: Animated.Value[];
  levelAnims: Animated.Value[];
  levelScales: Animated.Value[];
  onChangeCharacterName: (name: string) => void;
  onSelectLevel: (id: string, index: number) => void;
}

export default function OnboardingStepContent({
  step,
  characterName,
  selectedLevel,
  fadeAnim,
  slideAnim,
  floatAnim,
  pillAnims,
  cashAnims,
  levelAnims,
  levelScales,
  onChangeCharacterName,
  onSelectLevel,
}: OnboardingStepContentProps) {
  const { title, subtitle } = ONBOARDING_STEP_META[step];

  return (
    <Animated.View
      style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {step === 0 && (
        <CharacterNameStep
          characterName={characterName}
          floatAnim={floatAnim}
          onChangeCharacterName={onChangeCharacterName}
        />
      )}

      {step === 1 && <GrowthStep pillAnims={pillAnims} />}

      {step === 2 && <CashStep cashAnims={cashAnims} />}

      {step === 3 && (
        <LevelStep
          selectedLevel={selectedLevel}
          levelAnims={levelAnims}
          levelScales={levelScales}
          onSelectLevel={onSelectLevel}
        />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.grayscale[900],
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 15,
    color: colors.grayscale[500],
    textAlign: 'center',
    lineHeight: 22,
  },
});
