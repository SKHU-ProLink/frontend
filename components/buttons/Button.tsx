import { Pressable, StyleSheet, Text } from "react-native";
import VoiceIcon from '../../assets/images/voice.svg';
import { colors } from "../../constants/colors";
interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'disabled' | 'speaking';
}   
const Button = ({ title, onPress, variant = 'primary' }: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.button, variant === 'secondary' && styles.secondaryButton, variant === 'disabled' && styles.disabledButton, variant === "speaking" && styles.speakingButton] }>
            {variant !== "speaking" ?
                (<Text style={styles.buttonText}>{title}</Text>) :
                (
                    <>
                        <VoiceIcon width={24} height={24} />
                        <Text style={[styles.buttonText, { color: colors.primary[500] }]}>{title}</Text>
                    </>
                )
            }
        </Pressable>
    );

}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: colors.primary[500],
        paddingVertical: 17,
        borderRadius: 50,
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
        backgroundColor: colors.grayscale[400],
    },
    disabledButton: {
        backgroundColor: colors.grayscale[400],
        opacity: 0.5
    },
    speakingButton: {
        borderWidth: 1.5,
        borderColor: colors.primary[500],
        backgroundColor: colors.primary[50],
        flexDirection: 'row',
        gap: 6
    }
}); 

export default Button;