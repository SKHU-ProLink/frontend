import Button from '@/components/buttons/Button';
import ListeningButton from '@/components/buttons/ListeningButton';
import ExampleCard from '@/components/example-card';
import LearningCompleteScreen from '@/components/learning/LearningCompleteScreen';
import CommonStackScreen from '@/components/navigation/CommonStackScreen';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomResult from '../components/quiz/bottom-result';
import ProgressBar from '../components/TodoList/progressBar';

type SpeakingState = 'idle' | 'recording' | 'result';
type ResultState = 'correct' | 'incorrect';

const examples = [
  {
    sentence: 'I eat an apple every morning.',
    keyword: 'apple',
    translation: '나는 매일 아침 사과를 먹는다.',
  },
  {
    sentence: 'She likes to study English at the library.',
    keyword: 'study',
    translation: '그녀는 도서관에서 영어 공부하는 것을 좋아한다.',
  },
  {
    sentence: 'The banana is yellow and sweet.',
    keyword: 'banana',
    translation: '바나나는 노랗고 달콤하다.',
  },
];

export default function ExampleSentenceScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speakingState, setSpeakingState] = useState<SpeakingState>('idle');
  const [result, setResult] = useState<ResultState | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentExample = examples[currentIndex];
  const progressValue = Math.round(((currentIndex + 1) / examples.length) * 100);
  const isLastCard = currentIndex === examples.length - 1;

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
        wordsLearned={examples.length}
        learnedLabel={'오늘배운\n예문'}
        xpEarned={correctCount * 10}
        onButtonPress={handleRestart}
      />
    );
  }

  return (
    <>
      <CommonStackScreen title="예문 학습하기" subtitle={`${currentIndex + 1} / ${examples.length}`} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ProgressBar progressValue={progressValue} />
        <View style={styles.cardWrapper}>
          <View style={styles.listeningButtonRow}>
            <ListeningButton onPress={() => {}} />
          </View>
          <ExampleCard
            key={currentIndex}
            sentence={currentExample.sentence}
            keyword={currentExample.keyword}
            translation={currentExample.translation}
          />
        </View>

        <Text style={styles.hint}>카드를 탭해서 해석 보기</Text>

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
