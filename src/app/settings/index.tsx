import ConfirmModal from "@/components/confirm-modal";
import { useTodoStore } from "@/store/use-todo-store";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type ConfirmAction = "clearCompleted" | "deleteAll";

type ConfirmModalState = {
    visible: boolean;
    action: ConfirmAction;
    title: string;
    message: string;
    confirmLabel: string;
};

export default function SettingsScreen() {
    const { todos, clearCompletedTodos, deleteAllTodos } = useTodoStore();
    const [confirmModalState, setConfirmModalState] = useState<ConfirmModalState | null>(null);

    const completedTodosCount = todos.filter((todo) => todo.completed).length;
    const totalTodosCount = todos.length;

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
            clearCompletedTodos();
        }

        if (confirmModalState?.action === "deleteAll") {
            deleteAllTodos();
        }
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Danger Zone</Text>
                    <Text style={styles.sectionDescription}>
                        These actions remove tasks and cannot be undone.
                    </Text>

                    <Pressable
                        style={[
                            styles.dangerButton,
                            completedTodosCount === 0 && styles.dangerButtonDisabled,
                        ]}
                        onPress={() =>
                            setConfirmModalState({
                                visible: true,
                                action: "clearCompleted",
                                title: "Clear Completed Tasks?",
                                message: `This will remove ${completedTodosCount} completed task${completedTodosCount === 1 ? "" : "s"}.`,
                                confirmLabel: "Clear",
                            })
                        }
                        disabled={completedTodosCount === 0}
                    >
                        <Text style={styles.dangerButtonText}>Clear Completed Tasks</Text>
                        <Text style={styles.dangerButtonHint}>
                            {completedTodosCount === 0
                                ? "No completed tasks to remove"
                                : `${completedTodosCount} completed task${completedTodosCount === 1 ? "" : "s"} ready to clear`}
                        </Text>
                    </Pressable>

                    <Pressable
                        style={[
                            styles.dangerButton,
                            totalTodosCount === 0 && styles.dangerButtonDisabled,
                        ]}
                        onPress={() =>
                            setConfirmModalState({
                                visible: true,
                                action: "deleteAll",
                                title: "Delete All Tasks?",
                                message: `This will permanently remove ${totalTodosCount} task${totalTodosCount === 1 ? "" : "s"}.`,
                                confirmLabel: "Delete All",
                            })
                        }
                        disabled={totalTodosCount === 0}
                    >
                        <Text style={styles.dangerButtonText}>Delete All Tasks</Text>
                        <Text style={styles.dangerButtonHint}>
                            {totalTodosCount === 0
                                ? "No tasks to delete"
                                : `${totalTodosCount} task${totalTodosCount === 1 ? "" : "s"} will be removed`}
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>

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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212121",
        paddingHorizontal: 16,
    },
    section: {
        marginTop: 16,
        padding: 16,
        borderRadius: 20,
        backgroundColor: "#2B1F1F",
        borderWidth: 1,
        borderColor: "#5C2E2E",
        gap: 12,
    },
    sectionTitle: {
        fontSize: 20,
        color: "#fff1f0",
        fontWeight: "700",
    },
    sectionDescription: {
        color: "#D7C1BE",
        fontSize: 14,
    },
    dangerButton: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 16,
        backgroundColor: "#442626",
        borderWidth: 1,
        borderColor: "#7A3B3B",
        gap: 4,
    },
    dangerButtonDisabled: {
        opacity: 0.4,
    },
    dangerButtonText: {
        color: "#ffe7e3",
        fontSize: 16,
        fontWeight: "700",
    },
    dangerButtonHint: {
        color: "#D7C1BE",
        fontSize: 13,
    },
});
