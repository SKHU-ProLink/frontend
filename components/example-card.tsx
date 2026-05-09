import { colors } from "@/constants/colors";
import { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

type ExampleCardProps = {
    sentence: string;
    keyword: string;
    translation: string;
}

const ExampleCard = ({ sentence, keyword, translation }: ExampleCardProps) => {
    const [showBack, setShowBack] = useState(false);
    const scaleX = useRef(new Animated.Value(1)).current;

    const handleFlip = () => {
        Animated.timing(scaleX, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }).start(() => {
            setShowBack(prev => !prev);
            Animated.timing(scaleX, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start();
        });
    };

    const renderSentence = () => {
        const parts = sentence.split(new RegExp(`(${keyword})`, 'i'));
        return (
            <Text style={styles.sentence}>
                {parts.map((part, index) =>
                    part.toLowerCase() === keyword.toLowerCase() ? (
                        <Text key={index} style={styles.highlight}>{part}</Text>
                    ) : (
                        <Text key={index}>{part}</Text>
                    )
                )}
            </Text>
        );
    };

    return (
        <Pressable onPress={handleFlip} style={styles.wrapper}>
            <Animated.View style={[
                styles.container,
                showBack && styles.backContainer,
                { transform: [{ scaleX }] }
            ]}>
                {showBack ? (
                    <View style={styles.backContent}>
                        <Text style={styles.translation}>{translation}</Text>
                    </View>
                ) : (
                    <View style={styles.frontContent}>
                        {renderSentence()}
                    </View>
                )}
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        minHeight: 187,
    },
    container: {
        width: '100%',
        minHeight: 187,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 4px 7.2px 0 rgba(0, 0, 0, 0.08)',
        borderRadius: 20,
        padding: 24,
    },
    backContainer: {
        backgroundColor: colors.primary[500],
    },
    frontContent: {
        alignItems: 'center',
    },
    backContent: {
        alignItems: 'center',
    },
    sentence: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.grayscale[900],
        textAlign: 'center',
        lineHeight: 34,
    },
    highlight: {
        color: colors.primary[500],
        fontWeight: 'bold',
    },
    translation: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 34,
    },
});

export default ExampleCard;
