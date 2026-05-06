import { colors } from '@/constants/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, Stack } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CommonStackScreenProps = {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
};

export default function CommonStackScreen({
  title,
  subtitle,
  backgroundColor = '#F1FBFF',
}: CommonStackScreenProps) {
  return (
    <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor,
        },
        headerTitle: () => (
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>{title}</Text>
            {subtitle ? <Text style={styles.headerSubTitle}>{subtitle}</Text> : null}
          </View>
        ),
        headerLeft: () => (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="뒤로가기"
            hitSlop={12}
            onPress={() => router.back()}
            style={styles.headerIconButton}
          >
            <MaterialIcons name="arrow-back-ios-new" size={22} color={colors.grayscale[800]} />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="닫기"
            hitSlop={12}
            onPress={() => router.back()}
            style={styles.headerIconButton}
          >
            <MaterialIcons name="close" size={24} color={colors.grayscale[800]} />
          </Pressable>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    alignItems: 'center',
    gap: 2,
  },
  headerTitleText: {
    color: colors.grayscale[900],
    fontSize: 17,
    fontWeight: '700',
  },
  headerSubTitle: {
    color: colors.primary[700],
    fontSize: 12,
    fontWeight: '600',
  },
  headerIconButton: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
});
