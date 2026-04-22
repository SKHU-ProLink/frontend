import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";
interface ButtonProps {
    title: string;
    onPress: () => void;
}   
const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: colors.primary[500],
        paddingHorizontal: 17,
        borderRadius: 20,
    },
    buttonText: {
        color: colors.grayscale[50],
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
}); 

export default Button;