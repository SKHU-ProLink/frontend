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
        paddingHorizontal: 17,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        flex: 1,
    },
    inputFocused: {
        borderColor: colors.primary[500],
        backgroundColor: colors.primary[50],
    },
});

export default Input;
