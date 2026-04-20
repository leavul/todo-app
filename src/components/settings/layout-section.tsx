import { useSettingsStore } from '@/store/use-settings-store';
import { TaskNumbering, TasksGridColumns } from '@/types/settings';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    const {
        showTaskNumbers,
        setShowTaskNumbers,
        tasksGridColumns,
        setTasksGridColumns,
        setLanguage
    } = useSettingsStore();

    const numberingOptions: { value: TaskNumbering; label: string; previewText: string }[] = [
        { value: 'none', label: t('layout.numbering_none'), previewText: t('layout.preview_task') },
        { value: 'numbered', label: t('layout.numbering_numbered'), previewText: `1. ${t('layout.preview_task')}` },
    ];

    const columnsOptions: { value: TasksGridColumns; label: string }[] = [
        { value: 1, label: t('layout.columns_one_label') },
        { value: 2, label: t('layout.columns_two_label') },
    ];

    return (
        <SectionCard
            title={t('layout.title')}
            description={t('layout.description')}>
            <>
                <SectionCard
                    size="compact"
                    title={t('layout.numbering')}
                    description={t('layout.numbering_description')}>
                    <View style={styles.optionsRow}>
                        {numberingOptions.map(({ value, label, previewText }) => (
                            <OptionCard
                                key={value}
                                isSelected={showTaskNumbers === value}
                                label={label}
                                onPress={() => setShowTaskNumbers(value)}>
                                <View style={[styles.optionBar, styles.optionBarText]}>
                                    <Text style={[styles.optionLabel, showTaskNumbers === value && styles.optionLabelSelected]} numberOfLines={1} adjustsFontSizeToFit>
                                        {previewText}
                                    </Text>
                                </View>
                            </OptionCard>
                        ))}
                    </View>
                </SectionCard>

                <SectionCard
                    size="compact"
                    title={t('layout.columns')}
                    description={t('layout.columns_description')}>
                    <View style={styles.optionsRow}>
                        {columnsOptions.map(({ value, label }) => (
                            <OptionCard
                                key={value}
                                isSelected={tasksGridColumns === value}
                                label={label}
                                onPress={() => setTasksGridColumns(value)}>
                                <View style={styles.optionBarRow}>
                                    {Array.from({ length: value }).map((_, i) => (
                                        <View key={i} style={styles.optionBarRowItem}>
                                            <View style={styles.optionBar} />
                                            <View style={styles.optionBar} />
                                        </View>
                                    ))}
                                </View>
                            </OptionCard>
                        ))}
                    </View>
                </SectionCard>
                <Text onPress={() => setLanguage('ar')}>to arabic</Text>
                <Text onPress={() => setLanguage('en')}>to english</Text>
            </>
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
        height: 32,
        borderRadius: 6,
        backgroundColor: "#555555",
    },

    optionBarText: {
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    optionBarRow: {
        flexDirection: 'row',
        width: '100%',
        gap: 6,
    },
    optionBarRowItem: {
        flex: 1,
        gap: 6,
    },
});
