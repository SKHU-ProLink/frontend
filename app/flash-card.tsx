import Button from '@/components/buttons/Button';
import ListeningButton from '@/components/buttons/ListeningButton';
import FlashCard from '@/components/flash-card';
import LearningCompleteScreen from '@/components/learning/LearningCompleteScreen';
import CommonStackScreen from '@/components/navigation/CommonStackScreen';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomResult from '../components/quiz/bottom-result';
import ProgressBar from '../components/TodoList/progressBar';
type SpeakingState = 'idle' | 'recording' | 'result';
type ResultState = 'correct' | 'incorrect';

const cards = [
  {
    front: 'Apple',
    back: {
      meaning: '사과',
      partOfSpeech: '명사',
      pronunciation: '[aepl]',
    },
  },
  {
    front: 'Banana',
    back: {
      meaning: '바나나',
      partOfSpeech: '명사',
      pronunciation: '[banana]',
    },
  },
  {
    front: 'Study',
    back: {
      meaning: '공부하다',
      partOfSpeech: '동사',
      pronunciation: '[stuh-dee]',
    },
  },
];

export default function FlashCardScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speakingState, setSpeakingState] = useState<SpeakingState>('idle');
  const [result, setResult] = useState<ResultState | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentCard = cards[currentIndex];
  const progressValue = Math.round(((currentIndex + 1) / cards.length) * 100);
  const isLastCard = currentIndex === cards.length - 1;

  // 삭제 예정: AI 음성 인식 로직이 구현되면 해당 함수를 호출해 결과를 받아오도록 수정할 예정입니다.
  const handleSpeak = async () => {
    setSpeakingState('recording');
    try {
      const aiResult = await recognizePronunciation();
      setResult(aiResult);
      setSpeakingState('result');
    } catch {
      setSpeakingState('idle');
    }
  };

  const handleNext = () => {
    if (result === 'correct') {
      setCorrectCount((prev) => prev + 1);
    }

    setSpeakingState('idle');
    setResult(null);

    if (isLastCard) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSpeakingState('idle');
    setResult(null);
    setCorrectCount(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <LearningCompleteScreen
        title="시네츄르가 응원할게"
        wordsLearned={cards.length}
        xpEarned={correctCount * 10}
        onButtonPress={handleRestart}
      />
    );
  }

  return (
    <>
      <CommonStackScreen title="플래시 카드" subtitle={`${currentIndex + 1} / ${cards.length}`} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ProgressBar progressValue={progressValue}  />
        <View style={styles.cardWrapper}>
          <View style={styles.listeningButtonRow}>
            <ListeningButton onPress={() => {}} />
          </View>
          <FlashCard key={currentCard.front} front={currentCard.front} back={currentCard.back} />
        </View>

        <Text style={styles.hint}>카드를 탭해서 단어보기</Text>

        <Button
          variant="speaking"
          title={speakingState === 'recording' ? '듣는 중...' : '말해보기'}
          onPress={handleSpeak}
        />
      </ScrollView>

      {speakingState === 'result' && result && (
        <BottomResult
          title={result === 'correct' ? '정확해요! 🎉' : '다시 해볼까요?'}
          subTitle={result === 'correct' ? '발음이 정확합니다.' : '발음을 다시 확인해보세요.'}
          state={result}
          buttonTitle={isLastCard ? '결과 보기' : '다음 문제'}
          onNext={handleNext}
        />
      )}
    </>
  );
}

async function recognizePronunciation(): Promise<ResultState> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return Math.random() > 0.5 ? 'correct' : 'incorrect';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FBFF',
  },
  content: {
    padding: 25,
    gap: 24,
  },
  cardWrapper: {
    gap: 5,
  },
  listeningButtonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  hint: {
    color: colors.grayscale[400],
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});
