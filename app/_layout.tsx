import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export const unstable_settings = {
  initialRouteName: 'login',
};

export default function RootLayout() {
  return (
    <>
       <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding" options={{ headerShown: false, animation: 'fade' }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="flash-card" options={{ headerShown: false }} />
          <Stack.Screen name="example-sentence" options={{ headerShown: false }} />
          <Stack.Screen name="store" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
    </>
  );
}
