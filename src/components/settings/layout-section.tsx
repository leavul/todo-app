import { useSettingsStore } from '@/store/use-settings-store';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import SectionCard from './section-card';

export default function LayoutSection() {
    const { columns, setColumns } = useSettingsStore();

    return (
        <SectionCard
            title="Layout"
            description="Choose how tasks are displayed.">
            <View style={styles.container}>
                {([1, 2] as const).map((col) => (
                    <Pressable
                        key={col}
                        style={[styles.columnOption, columns === col && styles.columnOptionSelected]}
                        onPress={() => setColumns(col)}
                    >
                        <View style={styles.columnOptionPreview}>
                            {Array.from({ length: col }).map((_, i) => (
                                <View key={i} style={styles.columnOptionBar} />
                            ))}
                        </View>
                        <Text style={[styles.columnOptionLabel, columns === col && styles.columnOptionLabelSelected]}>
                            {col === 1 ? "1 Column" : "2 Columns"}
                        </Text>
                    </Pressable>
                ))}
            </View>
        </SectionCard>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 12
    },
    columnOption: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: "#303030",
        borderWidth: 1,
        borderColor: "#484848",
        alignItems: "center",
        gap: 10,
    },
    columnOptionSelected: {
        backgroundColor: "#383838",
        borderColor: "#ffffff",
    },
    columnOptionPreview: {
        flexDirection: "row",
        gap: 4,
        width: "100%",
    },
    columnOptionBar: {
        flex: 1,
        height: 32,
        borderRadius: 6,
        backgroundColor: "#555555",
    },
    columnOptionLabel: {
        fontSize: 13,
        fontWeight: "600",
        color: "#9e9e9e",
    },
    columnOptionLabelSelected: {
        color: "white",
    },
});
