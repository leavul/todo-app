import { useSettingsStore } from '@/store/use-settings-store';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import SectionCard from './section-card';

function OptionCard({ isSelected, onPress, label, children }: {
    isSelected: boolean;
    onPress: () => void;
    label: string;
    children: ReactNode;
}) {
    return (
        <Pressable
            style={[styles.option, isSelected && styles.optionSelected]}
            onPress={onPress}>
            {children}
            <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
                {label}
            </Text>
        </Pressable>
    );
}

export default function LayoutSection() {
    const {
        showTaskNumbers,
        setShowTaskNumbers,
        tasksGridColumns,
        setTasksGridColumns
    } = useSettingsStore();

    return (
        <SectionCard
            title="Layout"
            description="Choose how tasks are displayed.">
            <View style={styles.optionsRow}>
                <OptionCard
                    isSelected={showTaskNumbers === 'none'}
                    label="Without order"
                    onPress={() => setShowTaskNumbers('none')}>
                    <View style={[styles.optionBar, styles.optionBarText]}>
                        <Text style={[styles.optionLabel, showTaskNumbers === 'none' && styles.optionLabelSelected]}>
                            Rate Doit
                        </Text>
                    </View>
                </OptionCard>
                <OptionCard
                    isSelected={showTaskNumbers === 'numbered'}
                    label="With order"
                    onPress={() => setShowTaskNumbers('numbered')}>
                    <View style={[styles.optionBar, styles.optionBarText]}>
                        <Text style={[styles.optionLabel, showTaskNumbers === 'numbered' && styles.optionLabelSelected]}>
                            1. Rate Doit
                        </Text>
                    </View>
                </OptionCard>
            </View>

            <View style={styles.optionsRow}>
                <OptionCard
                    isSelected={tasksGridColumns === 1}
                    label="1 Column"
                    onPress={() => setTasksGridColumns(1)}>
                    <View style={styles.optionBarStack}>
                        <View style={styles.optionBar} />
                        <View style={styles.optionBar} />
                    </View>
                </OptionCard>

                <OptionCard
                    isSelected={tasksGridColumns === 2}
                    label="2 Columns"
                    onPress={() => setTasksGridColumns(2)}>
                    <View style={styles.optionBarRow}>
                        <View style={styles.optionBarStack}>
                            <View style={styles.optionBar} />
                            <View style={styles.optionBar} />
                        </View>
                        <View style={styles.optionBarStack}>
                            <View style={styles.optionBar} />
                            <View style={styles.optionBar} />
                        </View>
                    </View>
                </OptionCard>
            </View>
        </SectionCard>
    );
}

const styles = StyleSheet.create({
    optionsRow: {
        flexDirection: "row",
        gap: 12
    },

    option: {
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
    optionSelected: {
        backgroundColor: "#383838",
        borderColor: "white",
    },
    optionLabel: {
        fontSize: 13,
        fontWeight: "600",
        color: "#9e9e9e",
    },
    optionLabelSelected: {
        color: "white",
    },

    optionBar: {
        width: '100%',
        minHeight: 32,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 6,
        backgroundColor: "#555555",
    },

    optionBarText: {
        paddingHorizontal: 12,
    },
    optionBarStack: {
        gap: 6,
    },
    optionBarRow: {
        flexDirection: 'row',
        gap: 6,
    },
});
