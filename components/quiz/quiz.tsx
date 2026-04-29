import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type QuizProps = {
    title: string;
    level: string;
}
const Quiz = ({title, level}: QuizProps) => {
    return(
        <View style={styles.container}>
            <View style={styles.circle}>
                <Text style={[styles.title, styles.levelTitle]}>{level}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 18,
        paddingHorizontal: 18,
        backgroundColor: '#fff',
        boxShadow:  '0 4px 4px 0 rgba(0, 0, 0, 0.04)',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 18,
        flexDirection: 'row'
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
        backgroundColor: colors.grayscale[200],
        justifyContent: 'center',
        alignItems: 'center'
    },
    levelTitle: {
        color: colors.grayscale[400],
    }
})
export default Quiz;