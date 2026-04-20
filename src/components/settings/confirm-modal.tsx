import ModalShell from "@/components/ui/modal-shell";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ConfirmModalProps = {
    visible: boolean;
    title: string;
    message: string;
    confirmLabel: string;
    cancelLabel?: string;
    destructive?: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

export default function ConfirmModal({
    visible,
    title,
    message,
    confirmLabel,
    cancelLabel,
    destructive = false,
    onClose,
    onConfirm,
}: ConfirmModalProps) {
    const { t } = useTranslation();
    const resolvedCancelLabel = cancelLabel ?? t('form.cancel');

    return (
        <ModalShell
            visible={visible}
            onRequestClose={onClose}
        >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>

            <View style={styles.actionButtonsContainer}>
                <Pressable
                    style={[styles.actionButton, styles.cancelButton]}
                    onPress={onClose}
                >
                    <Text style={styles.cancelButtonText}>{resolvedCancelLabel}</Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.actionButton,
                        destructive ? styles.destructiveButton : styles.confirmButton,
                    ]}
                    onPress={onConfirm}
                >
                    <Text
                        style={[
                            styles.actionButtonText,
                            destructive ? styles.destructiveButtonText : styles.confirmButtonText,
                        ]}
                    >
                        {confirmLabel}
                    </Text>
                </Pressable>
            </View>
        </ModalShell>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

    message: {
        marginTop: 12,
        fontSize: 14,
        lineHeight: 20,
        color: "#D7C1BE",
        textAlign: "center",
    },

    actionButtonsContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 8,
    },

    actionButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },

    actionButtonText: {
        fontWeight: "600",
    },

    cancelButton: {
        backgroundColor: "#484848",
    },

    cancelButtonText: {
        color: "white",
        fontWeight: "600",
    },

    confirmButton: {
        backgroundColor: "#133e11",
    },

    confirmButtonText: {
        color: "#a1e7a1",
    },

    destructiveButton: {
        backgroundColor: "#3E1811",
    },

    destructiveButtonText: {
        color: "#e4a298",
    },
});
