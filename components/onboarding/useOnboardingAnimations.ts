import { Dispatch, SetStateAction, useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';

export function useOnboardingAnimations(step: number) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  const pillAnims = useMemo(() => createAnimatedValues(3, 0), []);
  const cashAnims = useMemo(() => createAnimatedValues(3, 0), []);
  const levelAnims = useMemo(() => createAnimatedValues(3, 0), []);
  const levelScales = useMemo(() => createAnimatedValues(3, 1), []);

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: -12, duration: 1800, useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 1800, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [floatAnim]);

  useEffect(() => {
    const animatePills = () => {
      pillAnims.forEach((anim) => anim.setValue(0));
      Animated.stagger(
        140,
        pillAnims.map((anim) =>
          Animated.spring(anim, { toValue: 1, tension: 90, friction: 8, useNativeDriver: true })
        )
      ).start();
    };

    const animateCash = () => {
      cashAnims.forEach((anim) => anim.setValue(0));
      Animated.stagger(
        120,
        cashAnims.map((anim) =>
          Animated.spring(anim, { toValue: 1, tension: 80, friction: 7, useNativeDriver: true })
        )
      ).start();
    };

    const animateLevels = () => {
      levelAnims.forEach((anim) => anim.setValue(0));
      Animated.stagger(
        100,
        levelAnims.map((anim) =>
          Animated.timing(anim, { toValue: 1, duration: 320, useNativeDriver: true })
        )
      ).start();
    };

    if (step === 1) {
      animatePills();
    }
    if (step === 2) {
      animateCash();
    }
    if (step === 3) {
      animateLevels();
    }
  }, [cashAnims, levelAnims, pillAnims, step]);

  const goToStep = (next: number, setStep: Dispatch<SetStateAction<number>>) => {
    const direction = next > step ? -24 : 24;

    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 160, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: direction, duration: 160, useNativeDriver: true }),
    ]).start(() => {
      setStep(next);
      slideAnim.setValue(-direction);
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 260, useNativeDriver: true }),
        Animated.timing(slideAnim, { toValue: 0, duration: 260, useNativeDriver: true }),
      ]).start();
    });
  };

  const animateLevelSelect = (index: number) => {
    Animated.sequence([
      Animated.timing(levelScales[index], { toValue: 0.96, duration: 80, useNativeDriver: true }),
      Animated.spring(levelScales[index], {
        toValue: 1,
        tension: 200,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return {
    fadeAnim,
    slideAnim,
    floatAnim,
    pillAnims,
    cashAnims,
    levelAnims,
    levelScales,
    goToStep,
    animateLevelSelect,
  };
}

function createAnimatedValues(count: number, initialValue: number) {
  return Array.from({ length: count }, () => new Animated.Value(initialValue));
}
