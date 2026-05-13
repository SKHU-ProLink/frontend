import { colors } from '@/constants/colors';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type DayCompletion = 0 | 1 | 2 | 3;

type MypageCalendarProps = {
  completionData?: Record<string, DayCompletion>;
};

const DAY_LABELS = ['일', '월', '화', '수', '목', '금', '토'];

const COMPLETION_BG: Record<DayCompletion, string | undefined> = {
  0: undefined,
  1: colors.primary[100],
  2: colors.primary[300],
  3: colors.primary[500],
};

const MypageCalendar = ({ completionData = {} }: MypageCalendarProps) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);

  const handlePrev = () => {
    if (month === 1) { setYear(y => y - 1); setMonth(12); }
    else setMonth(m => m - 1);
  };

  const handleNext = () => {
    if (month === 12) { setYear(y => y + 1); setMonth(1); }
    else setMonth(m => m + 1);
  };

  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  const prevMonthLastDate = new Date(year, month - 1, 0).getDate();

  const cells: { day: number; isCurrentMonth: boolean; dateKey: string }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    const d = prevMonthLastDate - i;
    const pm = month === 1 ? 12 : month - 1;
    const py = month === 1 ? year - 1 : year;
    cells.push({ day: d, isCurrentMonth: false, dateKey: `${py}-${String(pm).padStart(2, '0')}-${String(d).padStart(2, '0')}` });
  }

  for (let d = 1; d <= lastDate; d++) {
    cells.push({ day: d, isCurrentMonth: true, dateKey: `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}` });
  }

  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    const nm = month === 12 ? 1 : month + 1;
    const ny = month === 12 ? year + 1 : year;
    cells.push({ day: d, isCurrentMonth: false, dateKey: `${ny}-${String(nm).padStart(2, '0')}-${String(d).padStart(2, '0')}` });
  }

  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={handlePrev} hitSlop={8} style={styles.navButton}>
          <Text style={styles.navText}>{'<'}</Text>
        </Pressable>
        <Text style={styles.monthTitle}>{year}년 {month}월</Text>
        <Pressable onPress={handleNext} hitSlop={8} style={styles.navButton}>
          <Text style={styles.navText}>{'>'}</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        {DAY_LABELS.map(label => (
          <View key={label} style={styles.cell}>
            <Text style={styles.dayLabel}>{label}</Text>
          </View>
        ))}
      </View>

      {Array.from({ length: 6 }, (_, row) => (
        <View key={row} style={styles.row}>
          {cells.slice(row * 7, row * 7 + 7).map((cell, col) => {
            const completion = (completionData[cell.dateKey] ?? 0) as DayCompletion;
            const bg = COMPLETION_BG[completion];
            const textColor = completion > 0
              ? '#fff'
              : cell.isCurrentMonth
              ? colors.grayscale[700]
              : colors.grayscale[300];

            return (
              <View key={col} style={styles.cell}>
                <View style={[styles.dayCircle, bg ? { backgroundColor: bg } : undefined]}>
                  <Text style={[styles.dayText, { color: textColor }]}>{cell.day}</Text>
                </View>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    gap: 16,
  },
  navButton: {
    padding: 4,
  },
  navText: {
    fontSize: 16,
    color: colors.grayscale[600],
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.grayscale[800],
    fontFamily: 'Pretendard',
    minWidth: 100,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  dayLabel: {
    fontSize: 13,
    color: colors.grayscale[400],
    fontFamily: 'Pretendard',
    fontWeight: '500',
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 13,
    fontFamily: 'Pretendard',
    fontWeight: '500',
  },
});

export default MypageCalendar;
