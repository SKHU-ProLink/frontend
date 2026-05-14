import BackgroundGradient from '@/assets/bg.svg';
import AvocadoIcon from '@/assets/images/avocado.svg';
import { colors } from '@/constants/colors';
import { router } from 'expo-router';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const handleNaverLogin = () => {
    // TODO: 네이버 OAuth 연동
    Alert.alert('네이버 로그인', '네이버 로그인 연동 예정', [
      {
        text: '확인',
        onPress: () => router.replace('/(tabs)/study'),
      },
    ]);
  };

  const handleKakaoLogin = () => {
    // TODO: 카카오 OAuth 연동
    Alert.alert('카카오 로그인', '카카오 로그인 연동 예정', [
      {
        text: '확인',
        onPress: () => router.replace('/(tabs)/study'),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundGradient style={styles.backgroundGradient} width="125%" height="125%" />
      <View style={styles.content}>
        <View style={styles.heroSection}>
          <Text style={styles.title}>Avocado</Text>
          <Text style={styles.subtitle}>영어 학습의 새로운 맛을 경험하세요</Text>
          <View style={styles.characterWrapper}>
            <AvocadoIcon width={160} height={172} />
          </View>
        </View>

        <View style={styles.loginSection}>
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>간편 로그인</Text>
            <View style={styles.dividerLine} />
          </View>

          <Pressable
            style={({ pressed }) => [styles.loginButton, pressed && styles.loginButtonPressed]}
            onPress={handleNaverLogin}
          >
            <Image
              source={require('@/assets/images/NAVER_login.png')}
              style={styles.loginButtonImage}
              resizeMode="contain"
            />
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.loginButton, pressed && styles.loginButtonPressed]}
            onPress={handleKakaoLogin}
          >
            <Image
              source={require('@/assets/images/kakao_login.png')}
              style={styles.loginButtonImage}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1F3F7',
    overflow: 'hidden',
    position: 'relative',
  },
  backgroundGradient: {
    position: 'absolute',
    top: -70,
    left: '-12.5%',
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    gap: 40,
  },
  heroSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: colors.grayscale[500],
    marginTop: 8,
  },
  characterWrapper: {
    marginTop: 24,
    alignItems: 'center',
  },
  loginSection: {
    gap: 14,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 4,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grayscale[400],
  },
  dividerText: {
    fontSize: 14,
    color: colors.grayscale[500],
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginButtonPressed: {
    opacity: 0.8,
  },
  loginButtonImage: {
    width: '100%',
    height: 55,
  },
});
