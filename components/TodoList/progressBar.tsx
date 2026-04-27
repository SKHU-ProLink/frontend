import { colors } from "@/constants/colors";
import { StyleSheet, View, ViewStyle } from "react-native";

type ProgressBarProps = {
  progressValue: number;
  style?: ViewStyle
};

const ProgressBar = ({progressValue, style} : ProgressBarProps) => {
    return(
        <View style={[styles.progressBarBackground, style]}>
            <View style={[styles.progressBarFill, { width: `${progressValue}%` as `${number}%` }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    progressBarBackground: {
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.grayscale[200],
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 4,
        backgroundColor: colors.primary[500],
    },
})

export default ProgressBar;