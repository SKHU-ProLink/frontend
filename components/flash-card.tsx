import { colors } from "@/constants/colors";
import { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

type BackContent = {
    meaning: string;     
    partOfSpeech: string; 
    pronunciation: string; 
}

type FlashCardProps = {
    front: string;
    back: BackContent;
}

const FlashCard = ({ front, back }: FlashCardProps) => {
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

    return (
        <Pressable onPress={handleFlip} style={styles.wrapper}>
            <Animated.View style={[
                styles.container,
                showBack && styles.backContainer,
                { transform: [{ scaleX }] }
            ]}>
                {showBack ? (
                    <View style={styles.backContent}>
                        <Text style={styles.meaning}>{back.meaning}</Text>
                        <Text style={styles.partOfSpeech}>{back.partOfSpeech}</Text>
                        <Text style={styles.pronunciation}>{back.pronunciation}</Text>
                    </View>
                ) : (
                    <Text style={styles.frontTitle}>{front}</Text>
                )}
            </Animated.View>
        </Pressable>
    )
}

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
    },
    backContainer: {
        backgroundColor: colors.primary[500],
    },
    backContent: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
    },
    meaning: {
        fontSize: 41,
        fontWeight: 'bold',
        color: '#fff',
    },
    partOfSpeech: {
        fontSize: 16,
        fontWeight: '600',
        color: 'rgba(255,255,255,0.8)',
    },
    pronunciation: {
        fontSize: 16,
        fontWeight: '400',
        color: 'rgba(255,255,255,0.7)',
    },
    frontTitle: {
        fontSize: 41,
        fontWeight: 'bold',
        color: colors.grayscale[900],
    }
})

export default FlashCard