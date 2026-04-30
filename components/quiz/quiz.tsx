import { colors } from "@/constants/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

type QuizStatus = 'default' | 'correct' | 'wrong';

type QuizProps = {
    title: string;
    level: string;
    status?: QuizStatus;
    onPress?: () => void;
}

const Quiz = ({ title, level, status = 'default', onPress }: QuizProps) => {
    return (
        <Pressable
            style={[styles.container, styles[status]]}
            onPress={onPress}
            disabled={status !== 'default'}
        >
            <View style={[styles.circle, styles[`circle_${status}`]]}>
                <Text style={styles.levelTitle}>{level}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 18,
        paddingHorizontal: 18,
        backgroundColor: '#fff',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.04)',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 18,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    default: {
        backgroundColor: '#fff',
        borderColor: 'transparent',
    },
    correct: {
        backgroundColor: colors.primary[50],
        borderColor: colors.primary[500],
    },
    wrong: {
        backgroundColor: '#FAD6D6',
        borderColor: '#FF3131',
    },
    title: {
        color: colors.grayscale[900],
        fontWeight: '600',
        fontSize: 18,
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle_default: {
        backgroundColor: colors.grayscale[200],
    },
    circle_correct: {
        backgroundColor: colors.primary[500],
    },
    circle_wrong: {
        backgroundColor: '#FF3131',
    },
    levelTitle: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18,
    },
});

export default Quiz;