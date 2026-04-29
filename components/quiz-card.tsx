import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type QuizCardProps = {
    title: string;
}
const QuizCard = ({title}: QuizCardProps) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#fff',
        boxShadow:  '0 4px 4px 0 rgba(0, 0, 0, 0.04)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: colors.grayscale[900],
        fontWeight: 'bold',
        fontSize: 18,
    }
})
export default QuizCard;