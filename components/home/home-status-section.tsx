import ProgressBar from "@/components/TodoList/progressBar";
import ImageActionCard from "@/components/image-action-card";
import { StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

type HomeStatusAction = {
  Icon: React.FC<SvgProps>;
  title: string;
  subtitle?: string;
  onPress: () => void;
};

type HomeStatusSectionProps = {
  name: string;
  level: number;
  currentXP: number;
  maxXP: number;
  actions: HomeStatusAction[];
};

const HomeStatusSection = ({
  name,
  level,
  currentXP,
  maxXP,
  actions,
}: HomeStatusSectionProps) => {
  const progressValue = maxXP > 0 ? (currentXP / maxXP) * 100 : 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.levelText}>
          {name} Lv.{level}
        </Text>
        <Text style={styles.xpText}>
          {currentXP}/{maxXP} XP
        </Text>
      </View>

      <ProgressBar progressValue={progressValue} style={styles.progressBar} />

      <View style={styles.actionList}>
        {actions.map((action) => (
          <ImageActionCard
            key={action.title}
            Icon={action.Icon}
            title={action.title}
            subtitle={action.subtitle}
            onPress={action.onPress}
            iconSize={52}
            style={styles.actionCard}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#FFF",
    gap: 11,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 11,
  },
  levelText: {
    flex: 1,
    color: "#444",
    fontFamily: "Pretendard",
    fontSize: 21.194,
    fontStyle: "normal",
    fontWeight: "600",
  },
  xpText: {
    color: "#B7B7B7",
    fontFamily: "Pretendard",
    fontSize: 13.225,
    fontStyle: "normal",
    fontWeight: "500",
  },
  progressBar: {
    height: 17,
    borderRadius: 999,
  },
  actionList: {
    flexDirection: "row",
    gap: 11,
  },
  actionCard: {
    backgroundColor: "#FAFAFA",
    paddingVertical: 18,
    paddingHorizontal: 8,
    borderRadius: 20,
    gap: 12,
  },
});

export default HomeStatusSection;
