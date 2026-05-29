import { Animated } from 'react-native';

import LevelList from '../LevelList';

interface LevelStepProps {
  selectedLevel: string | null;
  levelAnims: Animated.Value[];
  levelScales: Animated.Value[];
  onSelectLevel: (id: string, index: number) => void;
}

export default function LevelStep({
  selectedLevel,
  levelAnims,
  levelScales,
  onSelectLevel,
}: LevelStepProps) {
  return (
    <LevelList
      selectedLevel={selectedLevel}
      levelAnims={levelAnims}
      levelScales={levelScales}
      onSelectLevel={onSelectLevel}
    />
  );
}
