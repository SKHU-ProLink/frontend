import { colors } from "@/constants/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";
import ProgressBar from "./TodoList/progressBar";

type LevelCardProps = {
    level: number;
    characterName: string;
    currentXP: number;
    maxXP: number;
    CharacterSvg: React.FC<SvgProps>; 
    onPress: () => void;
}

const LevelCard = ({ level, characterName, currentXP, maxXP, CharacterSvg, onPress }: LevelCardProps) => {
    return (
        <View style={styles.container}>
            <CharacterSvg width={78} height={78}/>
            <View style={styles.leftContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{characterName} Lv.{level}</Text>
                    <Text style={styles.subTitle}>{currentXP}/ {maxXP} XP</Text>
                </View>
                <ProgressBar progressValue={(currentXP / maxXP) * 100} style={{width: '100%'}}/>
                <Pressable onPress={onPress}>
                    <Text style={styles.subTitle}>캐릭터 보러가기 →</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 11,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 20,
        boxShadow: "0 0 9px 0 rgba(0, 0, 0, 0.07)",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    leftContainer: {
        flex: 1,
        minWidth: 0, 
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 5
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: colors.grayscale[900],
        fontWeight: 'bold',
        fontSize: 18
    },
    subTitle: {
        color: colors.grayscale[400],
        fontWeight: '600'
    },
})

export default LevelCard;