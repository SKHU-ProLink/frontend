import { colors } from "@/constants/colors";
import { Pressable, StyleSheet, Text } from "react-native";
import PlayIcon from "../../assets/images/play.svg";

type ListeningButtonProps = {
    onPress: () => void;
}

const ListeningButton = ({ onPress }: ListeningButtonProps) => {
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <PlayIcon width={20} height={20} />
            <Text style={styles.title}>듣기</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        maxWidth: 90,
        backgroundColor: colors.primary[50],
        borderWidth: 1.5,
        borderColor: colors.primary[500],
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    title: {
        color: colors.primary[500],
        fontWeight: 700,
    }
})

export default ListeningButton;