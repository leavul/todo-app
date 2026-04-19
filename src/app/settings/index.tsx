import DangerZoneSection from "@/components/settings/danger-zone-section";
import LayoutSection from "@/components/settings/layout-section";
import { ScrollView, StyleSheet } from "react-native";

export default function SettingsScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <LayoutSection />
            <DangerZoneSection />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212121",
    },
    contentContainer: {
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 60,
        gap: 16,
    },
});
