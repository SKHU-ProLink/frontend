import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";
interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'disabled';
}   
const Button = ({ title, onPress, variant = 'primary' }: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.button, variant === 'secondary' && styles.secondaryButton, variant === 'disabled' && styles.disabledButton]}>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.grayscale[50],
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    secondaryButton :{
        backgroundColor: colors.grayscale[50],
    },
    disabledButton: {
        opacity: 0.5,
    }
}); 

export default Button;