import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import Button from "../buttons/Button";

type BottomResultProps = {
    title: string;
    subTitle: string;
    state: 'correct' | 'incorrect';
}
const BottomResult = ({title, subTitle, state}: BottomResultProps) => {
    return(
        <View style={[styles.container, state == "incorrect" && {backgroundColor: '#FFECEC'}]}>
           <View style={{gap: 4, paddingLeft: 11}}>
                <Text style={[styles.title, state == "incorrect" && {color: '#FF3131'}]}>
                    {title}
                </Text>
                <Text style={[styles.subTitle, state == "incorrect" && {color: '#FF3131'}]}>
                    {subTitle}
                </Text>
           </View>
            <Button title={'다음 문제'} onPress={function (): void {
                throw new Error('Function not implemented.');
            } } 
            variant={state === "incorrect" ? "incorrect" : "primary"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary[50],
        padding: 30,
        flexDirection: 'column',
        gap: 12,
    },
    title: {
        color: colors.primary[500],
        fontSize: 30,
        fontWeight: 'bold'
    },
    subTitle : {
        color: colors.primary[500],
        fontSize: 20,
        fontWeight: '600'
    }
})

export default BottomResult;