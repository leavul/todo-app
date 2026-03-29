import BackgroundDecorations from "@/components/background-decorations";
import { StyleSheet, View } from "react-native";

export default function Settings() {
    return (
        <View style={styles.container}>
            <BackgroundDecorations />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212121",
    },
});
