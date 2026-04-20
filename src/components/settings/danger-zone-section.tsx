import { useTaskStore } from '@/store/use-task-store';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ConfirmModal from './confirm-modal';
import SectionCard from './section-card';

type ConfirmAction = "clearCompleted" | "deleteAll";

type ConfirmModalState = {
    visible: boolean;
    action: ConfirmAction;
    title: string;
    message: string;
    confirmLabel: string;
};

function DangerZoneButton({
    title,
    hintText,
    disabled,
    onPress
}: {
    title: string,
    hintText: string,
    disabled: boolean
    onPress: () => void
}) {
    return (
        <Pressable
            style={[styles.button, disabled && styles.buttonDisabled]}
            onPress={onPress}
            disabled={disabled}>
            <Text style={styles.buttonText}>{title}</Text>
            <Text style={styles.buttonHintText}>{hintText}</Text>
        </Pressable>
    )
}

export default function DangerZoneSection() {
    const { t } = useTranslation();
    const { tasks, clearCompletedTasks, deleteAllTasks } = useTaskStore();
    const [confirmModalState, setConfirmModalState] = useState<ConfirmModalState | null>(null);

    const completedTasksCount = tasks.filter((task) => task.completed).length;
    const totalTasksCount = tasks.length;

    const handleCloseConfirmModal = () => {
        setConfirmModalState((currentState) => {
            if (currentState === null) {
                return null;
            }

            return {
                ...currentState,
                visible: false,
            };
        });
    };

    const handleConfirmAction = () => {
        if (confirmModalState?.action === "clearCompleted") {
            clearCompletedTasks();
        }

        if (confirmModalState?.action === "deleteAll") {
            deleteAllTasks();
        }
    };

    return (
        <>
            <SectionCard
                backgroundColor="#2B1F1F"
                borderColor="#5C2E2E"

                title={t('danger.title')}
                titleColor='#fff1f0'

                description={t('danger.description')}
                descriptionColor='#D7C1BE'
            >
                <View style={styles.container}>
                    <DangerZoneButton
                        title={t('danger.clear_completed')}
                        hintText={completedTasksCount === 0
                            ? t('danger.clear_completed_empty')
                            : t('danger.clear_completed_hint', { count: completedTasksCount })}
                        disabled={completedTasksCount === 0}
                        onPress={() =>
                            setConfirmModalState({
                                visible: true,
                                action: "clearCompleted",
                                title: t('danger.clear_modal_title'),
                                message: t('danger.clear_modal_message', { count: completedTasksCount }),
                                confirmLabel: t('danger.clear_confirm'),
                            })}
                    />
                    <DangerZoneButton
                        title={t('danger.delete_all')}
                        hintText={totalTasksCount === 0
                            ? t('danger.delete_all_empty')
                            : t('danger.delete_all_hint', { count: totalTasksCount })}
                        disabled={totalTasksCount === 0}
                        onPress={() =>
                            setConfirmModalState({
                                visible: true,
                                action: "deleteAll",
                                title: t('danger.delete_all_modal_title'),
                                message: t('danger.delete_all_modal_message', { count: totalTasksCount }),
                                confirmLabel: t('danger.delete_all_confirm'),
                            })
                        }
                    />
                </View>
            </SectionCard >

            <ConfirmModal
                visible={confirmModalState?.visible ?? false}
                title={confirmModalState?.title ?? ""}
                message={confirmModalState?.message ?? ""}
                destructive
                confirmLabel={confirmModalState?.confirmLabel ?? ""}
                onClose={handleCloseConfirmModal}
                onConfirm={() => {
                    handleConfirmAction();
                    handleCloseConfirmModal();
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12
    },
    button: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 16,
        backgroundColor: "#442626",
        borderWidth: 1,
        borderColor: "#7A3B3B",
        gap: 4,
    },
    buttonDisabled: {
        opacity: 0.4,
    },
    buttonText: {
        color: "#ffe7e3",
        fontSize: 16,
        fontWeight: "700",
    },
    buttonHintText: {
        color: "#D7C1BE",
        fontSize: 13,
    },
})
