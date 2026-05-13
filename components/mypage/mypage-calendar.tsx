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

const LEGEND_STEPS: { label: string; color: string }[] = [
  { label: '1단계', color: colors.primary[100] },
  { label: '2단계', color: colors.primary[300] },
  { label: '3단계', color: colors.primary[500] },
];

const toDateKey = (y: number, m: number, d: number) =>
  `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

const MypageCalendar = ({ completionData = {} }: MypageCalendarProps) => {
  const today = new Date();
  const todayKey = toDateKey(today.getFullYear(), today.getMonth() + 1, today.getDate());

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
    cells.push({ day: d, isCurrentMonth: false, dateKey: toDateKey(py, pm, d) });
  }

  for (let d = 1; d <= lastDate; d++) {
    cells.push({ day: d, isCurrentMonth: true, dateKey: toDateKey(year, month, d) });
  }

  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    const nm = month === 12 ? 1 : month + 1;
    const ny = month === 12 ? year + 1 : year;
    cells.push({ day: d, isCurrentMonth: false, dateKey: toDateKey(ny, nm, d) });
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
        {DAY_LABELS.map((label, idx) => (
          <View key={label} style={styles.cell}>
            <Text style={[
              styles.dayLabel,
              idx === 0 && styles.sundayLabel,
              idx === 6 && styles.saturdayLabel,
            ]}>
              {label}
            </Text>
          </View>
        ))}
      </View>

      {Array.from({ length: 6 }, (_, row) => (
        <View key={row} style={styles.row}>
          {cells.slice(row * 7, row * 7 + 7).map((cell, col) => {
            const completion = (completionData[cell.dateKey] ?? 0) as DayCompletion;
            const bg = COMPLETION_BG[completion];
            const isToday = cell.dateKey === todayKey;

            const textColor = completion > 0
              ? '#fff'
              : cell.isCurrentMonth
              ? colors.grayscale[700]
              : colors.grayscale[300];

            return (
              <View key={col} style={styles.cell}>
                <View style={[
                  styles.dayCircle,
                  bg ? { backgroundColor: bg } : undefined,
                  isToday && !bg ? styles.todayBorder : undefined,
                ]}>
                  <Text style={[styles.dayText, { color: textColor }]}>{cell.day}</Text>
                </View>
              </View>
            );
          })}
        </View>
      ))}

      <View style={styles.legend}>
        {LEGEND_STEPS.map(step => (
          <View key={step.label} style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: step.color }]} />
            <Text style={styles.legendText}>{step.label}</Text>
          </View>
        ))}
      </View>
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
  sundayLabel: {
    color: '#F87171',
  },
  saturdayLabel: {
    color: '#60A5FA',
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayBorder: {
    borderWidth: 1.5,
    borderColor: colors.primary[400],
  },
  dayText: {
    fontSize: 13,
    fontFamily: 'Pretendard',
    fontWeight: '500',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.grayscale[100],
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendText: {
    fontSize: 12,
    color: colors.grayscale[400],
    fontFamily: 'Pretendard',
    fontWeight: '500',
  },
});

export default MypageCalendar;
