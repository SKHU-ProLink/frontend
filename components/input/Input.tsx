import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../../constants/colors';

interface InputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const Input = ({ placeholder, value, onChangeText, onFocus, onBlur }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onFocus={() => {
                setIsFocused(true);
                onFocus?.();
            }}
            onBlur={() => {
                setIsFocused(false);
                onBlur?.();
            }}
            style={[styles.input, isFocused && styles.inputFocused]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.grayscale[50],
        fontSize: 16,
        paddingVertical: 17,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: 'transparent',
        width: '100%',
        textAlign: 'center',
    },
    inputFocused: {
        borderColor: colors.primary[500],
        backgroundColor: colors.primary[50],
    },
});

export default Input;
