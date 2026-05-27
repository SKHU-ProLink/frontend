import { MaterialIcons } from '@expo/vector-icons';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

import { LEVELS } from './onboarding-data';

interface LevelListProps {
  selectedLevel: string | null;
  levelAnims: Animated.Value[];
  levelScales: Animated.Value[];
  onSelectLevel: (id: string, index: number) => void;
}

export default function LevelList({
  selectedLevel,
  levelAnims,
  levelScales,
  onSelectLevel,
}: LevelListProps) {
  return (
    <View style={styles.levelsWrapper}>
      {LEVELS.map((level, index) => {
        const isSelected = selectedLevel === level.id;

        return (
          <Animated.View
            key={level.id}
            style={{
              opacity: levelAnims[index],
              transform: [
                {
                  translateX: levelAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [32, 0],
                  }),
                },
                { scale: levelScales[index] },
              ],
            }}
          >
            <Pressable
              style={[styles.levelItem, isSelected && styles.levelItemSelected]}
              onPress={() => onSelectLevel(level.id, index)}
            >
              <View style={styles.levelText}>
                <Text style={[styles.levelTitle, isSelected && styles.levelTitleSelected]}>
                  {level.title}
                </Text>
                <Text
                  style={[styles.levelDescription, isSelected && styles.levelDescriptionSelected]}
                >
                  {level.description}
                </Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={22}
                color={isSelected ? colors.primary[600] : colors.grayscale[400]}
              />
            </Pressable>
          </Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  levelsWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    gap: 12,
  },
  levelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  levelItemSelected: {
    backgroundColor: colors.primary[50],
    borderColor: colors.primary[400],
  },
  levelText: {
    gap: 4,
  },
  levelTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.grayscale[800],
  },
  levelTitleSelected: {
    color: colors.primary[700],
  },
  levelDescription: {
    fontSize: 13,
    color: colors.grayscale[500],
  },
  levelDescriptionSelected: {
    color: colors.primary[600],
  },
});
