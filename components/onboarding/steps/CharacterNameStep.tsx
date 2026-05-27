import { Animated, StyleSheet, View } from 'react-native';

import SeedIcon from '@/assets/images/seed.svg';
import Input from '@/components/input/Input';

interface CharacterNameStepProps {
  characterName: string;
  floatAnim: Animated.Value;
  onChangeCharacterName: (name: string) => void;
}

export default function CharacterNameStep({
  characterName,
  floatAnim,
  onChangeCharacterName,
}: CharacterNameStepProps) {
  return (
    <View style={styles.step}>
      <Animated.View style={{ transform: [{ translateY: floatAnim }] }}>
        <SeedIcon width={220} height={214} />
      </Animated.View>
      <View style={styles.inputWrapper}>
        <Input
          placeholder="이름을 지어주세요!"
          value={characterName}
          onChangeText={onChangeCharacterName}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  step: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 16,
  },
  inputWrapper: {
    width: '100%',
  },
});
