import { colors } from "@/constants/colors"
import { Pressable, StyleSheet, Text } from "react-native"

const FlashCard = () => {
    return(
        <Pressable style={styles.container}>
            <Text style={styles.title}>apple</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 187,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 4px 7.2px 0 rgba(0, 0, 0, 0.08)',
        borderRadius: 20,
    },
    title: {
        fontSize: 41,
        fontWeight: 'bold',
        color: colors.grayscale[900]
    }
})
export default FlashCard