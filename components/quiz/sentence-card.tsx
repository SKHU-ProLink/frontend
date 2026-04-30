import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";
type SentenceCardProps = {
    title: string;
    onPress: () => void;
}
const SentenceCard = ({title, onPress} : SentenceCardProps) => {
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container : {
        paddingVertical: 3,
        paddingHorizontal: 13,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.grayscale[900]
    }
})
export default SentenceCard;